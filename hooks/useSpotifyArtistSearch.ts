import { useState } from "react";
import {
  ArtistSpotifySearch,
  spotifySearchResultSchema,
  SpotifyTrack,
} from "../types";

type SearchResult = {
  artists?: ArtistSpotifySearch[];
  tracks?: SpotifyTrack[];
};

export function useSpotifySearch() {
  const [result, setResult] = useState<SearchResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function searchSpotify(
    query: string,
    type: string = "artist, track",
    limit: number = 10
  ) {
    setLoading(true);
    setResult(null);
    setErrorMessage(null);
    try {
      const res = await fetch(
        `/api/spotify-search?query=${encodeURIComponent(
          query
        )}&type=${type}&limit=${limit}`
      );
      const data = await res.json();

      const result = spotifySearchResultSchema.safeParse(data);
      if (!result.success) {
        setErrorMessage("Invalid data from Spotify API.");
        setLoading(false);
        return;
      }

      setResult({
        artists: result.data.artists?.items ?? [],
        tracks: result.data.tracks?.items ?? [],
      });

      if (
        !result.data.artists?.items?.length &&
        !result.data.tracks?.items?.length
      ) {
        setErrorMessage("No results found.");
      }
    } catch (_error) {
      setErrorMessage("Search failed. Please try again.");
    }
    setLoading(false);
  }

  return {
    result,
    errorMessage,
    loading,
    searchSpotify,
  };
}
