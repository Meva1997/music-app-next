import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import {
  SpotifyArtist,
  spotifyTopArtistsSchema,
  SpotifyTrack,
  spotifyTopTracksSchema,
} from "../types";

export function useSpotifyTopItems(
  time_range: "short_term" | "medium_term" | "long_term" = "medium_term",
  limit: number = 12,
  offset: number = 0,
  type: "artists" | "tracks" = "artists"
): {
  items: SpotifyArtist[] | SpotifyTrack[];
  error: string | null;
  loading: boolean;
} {
  const { data: session } = useSession();
  const [items, setItems] = useState<SpotifyArtist[] | SpotifyTrack[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopItems = async () => {
      if (!session?.accessToken) return;
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.spotify.com/v1/me/top/${type}?time_range=${time_range}&limit=${limit}&offset=${offset}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        const data = await response.json();

        // Validar con el schema correcto
        let itemsResult: SpotifyArtist[] | SpotifyTrack[] = [];
        if (type === "artists") {
          const result = spotifyTopArtistsSchema.safeParse(data);
          itemsResult = result.success ? result.data.items : [];
        } else {
          const result = spotifyTopTracksSchema.safeParse(data);
          itemsResult = result.success ? result.data.items : [];
        }
        if (itemsResult && itemsResult.length >= 0) {
          setItems(itemsResult);
        } else {
          setError("Invalid Spotify top items data, please try again later.");
          setItems([]);
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error fetching Spotify top items"
        );
        setItems([]);
      } finally {
        setLoading(false);
      }
    };
    fetchTopItems();
  }, [session, time_range, limit, offset, type]);

  return { items, error, loading };
}
