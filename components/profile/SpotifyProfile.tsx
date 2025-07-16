"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { SpotifyUser, spotifyUserSchema } from "../../types";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function SpotifyProfile() {
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
        const result = spotifyUserSchema.safeParse(json); // Validate the response against the schema
        if (result.success) {
          setSpotifyUser(result.data);
          console.log("Spotify User Data:", result.data);
        } else {
          setError("Datos de Spotify no válidos");
          setSpotifyUser(null);
        }
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error al obtener el perfil de Spotify"
        );
        setSpotifyUser(null);
      }
    };
    fetchSpotifyProfile();
  }, [session]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow items-center justify-center max-h-[500px] p-8 mt-20">
      {spotifyUser && (
        <>
          <h1 className="mb-4 text-3xl font-bold text-green-500">
            Spotify Profile
          </h1>
          <div className="p-6 text-lg text-white bg-gray-800 rounded-lg shadow-lg">
            <p className="font-bold text-orange-500">
              Name:{" "}
              <span className="text-white">{spotifyUser.display_name}</span>
            </p>
            <p className="font-bold text-orange-500">
              Email: <span className="text-white">{spotifyUser.email}</span>
            </p>
            <p className="font-bold text-orange-500">
              Followers:{" "}
              <span className="text-white">{spotifyUser.followers.total}</span>
            </p>
            {spotifyUser.images.length ? (
              <Image
                width={128}
                height={128}
                src={spotifyUser.images[0].url}
                alt="Spotify Profile"
                className="object-cover w-32 h-32 mx-auto mt-4 rounded-full"
              />
            ) : (
              <FaUserCircle className="w-32 h-32 mx-auto mt-8 text-green-500 bg-black border-0 rounded-full" />
            )}
            <Link
              href={spotifyUser.external_urls.spotify}
              rel="noopener noreferrer"
              target="_blank"
              className="block mt-4 text-center text-green-500 hover:underline"
            >
              Link to Spotify Profile
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
