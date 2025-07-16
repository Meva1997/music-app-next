import { z } from "zod";

export type LoginFormInputs = {
  email: string;
  password: string;
  confirmPassword?: string; // Campo opcional para la confirmación de contraseña
};

export type SearchInputMain = {
  search: string; // Campo de búsqueda para artistas o álbumes
};

export const spotifyUserSchema = z.object({
  display_name: z.string(),
  email: z.string().email(),
  followers: z.object({
    total: z.number(),
  }),
  images: z.array(
    z.object({
      url: z.string().url(),
      height: z.number().nullable().optional(),
      width: z.number().nullable().optional(),
    })
  ),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
});
export type SpotifyUser = z.infer<typeof spotifyUserSchema>;
