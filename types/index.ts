import { z } from "zod";

//! types for form inputs

export type LoginFormInputs = {
  email: string;
  password: string;
  confirmPassword?: string; // Campo opcional para la confirmación de contraseña
};

export type SearchInputMain = {
  search: string; // Campo de búsqueda para artistas o álbumes
};

export type GenericProfileData = {
  name?: string; // Nombre del usuario
  email?: string; // Correo electrónico del usuario
};

//! Spotify User Schema

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

//! Spotify user top items schema for artists and tracks

// Simplificado para artista, puedes expandir para track si lo necesitas
export const spotifyArtistSchema = z.object({
  id: z.string(),
  name: z.string(),
  images: z.array(
    z.object({
      url: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    })
  ),
  genres: z.array(z.string()),
  followers: z.object({
    total: z.number(),
  }),
  external_urls: z.object({
    spotify: z.string(),
  }),
});

export const spotifyTopArtistsSchema = z.object({
  items: z.array(spotifyArtistSchema),
  total: z.number(),
  limit: z.number(),
  offset: z.number(),
  href: z.string(),
  previous: z.string().nullable(),
  next: z.string().nullable(),
});

export type SpotifyArtist = z.infer<typeof spotifyArtistSchema>;
export type SpotifyTopArtists = z.infer<typeof spotifyTopArtistsSchema>;

// Track schema
export const spotifyTrackSchema = z.object({
  id: z.string(),
  name: z.string(),
  album: z.object({
    id: z.string(),
    name: z.string(),
    images: z.array(
      z.object({
        url: z.string(),
        width: z.number().optional(),
        height: z.number().optional(),
      })
    ),
    external_urls: z.object({
      spotify: z.string(),
    }),
  }),
  artists: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      external_urls: z.object({
        spotify: z.string(),
      }),
    })
  ),
  duration_ms: z.number(),
  external_urls: z.object({
    spotify: z.string(),
  }),
  popularity: z.number(),
});

export const spotifyTopTracksSchema = z.object({
  href: z.string(),
  items: z.array(spotifyTrackSchema),
  limit: z.number(),
  next: z.string().nullable(),
  offset: z.number(),
  previous: z.string().nullable(),
  total: z.number(),
});

// Types
export type SpotifyTrack = z.infer<typeof spotifyTrackSchema>;
export type SpotifyTopTracks = z.infer<typeof spotifyTopTracksSchema>;

//! Artist Spotify Search Schema

export const artistSpotifySearchSchema = z.object({
  name: z.string(),
  images: z.array(
    z.object({
      url: z.string().url(),
      height: z.number().nullable().optional(),
      width: z.number().nullable().optional(),
    })
  ),
  genres: z.array(z.string()),
  followers: z.object({
    href: z.string().url().nullable(),
    total: z.number(),
  }),
  external_urls: z.object({
    spotify: z.string().url(),
  }),
  error: z.string().optional(), // Campo opcional para manejar errores
});

export type ArtistSpotifySearch = z.infer<typeof artistSpotifySearchSchema>;

//! Spotify Search all
export const spotifySearchResultSchema = z.object({
  artists: z
    .object({
      items: z.array(artistSpotifySearchSchema).optional(),
    })
    .optional(),
  tracks: z
    .object({
      items: z.array(spotifyTrackSchema).optional(),
    })
    .optional(),
  // Agrega albums y playlists si tienes schemas
});

export type SpotifySearchResult = z.infer<typeof spotifySearchResultSchema>;
