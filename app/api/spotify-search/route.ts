import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Extrae el parámetro de búsqueda desde la URL
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");
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
    )}&type=artist&limit=1`,
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );
  const data = await spotifyRes.json();

  // Devuelve el resultado en JSON (al frontend)
  return NextResponse.json(data);
}
