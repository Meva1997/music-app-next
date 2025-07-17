import { useState } from "react";
import { ArtistSpotifySearch, artistSpotifySearchSchema } from "../types";

export function useSpotifyArtistSearch() {
  const [artistResult, setArtistResult] = useState<ArtistSpotifySearch | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function searchArtist(query: string) {
    setLoading(true);
    setArtistResult(null);
    setErrorMessage(null);
    try {
      const res = await fetch(
        `/api/spotify-search?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      const artist = data.artists?.items?.[0];
      if (artist) {
        const parseResult = artistSpotifySearchSchema.safeParse(artist);
        if (parseResult.success) {
          setArtistResult(parseResult.data);
        } else {
          setErrorMessage("Result format is invalid.");
        }
      } else {
        setErrorMessage("Artist not found.");
      }
    } catch (_error) {
      setErrorMessage("Search failed. Please try again.");
    }
    setLoading(false);
  }

  return {
    artistResult,
    errorMessage,
    loading,
    searchArtist,
    setArtistResult,
    setErrorMessage,
  };
}
