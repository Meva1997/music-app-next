import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SpotifyUser, spotifyUserSchema } from "../types";

export function useSpotifyProfile() {
  const { data: session } = useSession();
  const [spotifyUser, setSpotifyUser] = useState<SpotifyUser | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyProfile = async () => {
      if (!session?.accessToken) return;

      try {
        const res = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        const json = await res.json();
        const result = spotifyUserSchema.safeParse(json);
        if (result.success) {
          setSpotifyUser(result.data);
          setError(null);
        } else {
          setError("Invalid Spotify profile data, Log out and log in again");
          setSpotifyUser(null);
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error fetching Spotify profile"
        );
        setSpotifyUser(null);
      }
    };
    fetchSpotifyProfile();
  }, [session]);

  return { spotifyUser, error };
}
