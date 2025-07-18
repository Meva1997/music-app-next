import { NextRequest, NextResponse } from "next/server";
import {
  // artistSpotifySearchSchema,
  // spotifyTrackSchema,
  // spotifyArtistSchema,
  spotifySearchResultSchema,
} from "@/types/index";

export async function GET(req: NextRequest) {
  // Extrae el parámetro de búsqueda desde la URL
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
  const type = searchParams.get("type") ?? "artist,track";
  const limit = searchParams.get("limit") ?? "10";
  // Lee las variables de entorno (client id y secret)
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;

  // Solicita el token de Spotify usando tus credenciales secretas
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(clientId + ":" + clientSecret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });
  const { access_token } = await tokenRes.json();

  // Hace la búsqueda con el token (ya autorizado)
  const spotifyRes = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query ?? ""
    )}&type=${type}&limit=${limit}`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  const data = await spotifyRes.json();

  const result = spotifySearchResultSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json(
      { error: "Invalid response format from Spotify" },
      { status: 500 }
    );
  }

  // Devuelve el resultado en JSON (al frontend)
  return NextResponse.json(result.data);
}
