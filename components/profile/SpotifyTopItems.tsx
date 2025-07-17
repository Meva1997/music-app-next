import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSpotifyTopItems } from "@/hooks/useSpotifyUserTopItems";
import SpotifyTopItemsSkeleton from "@/ui/skeletons/SpotifyTopItemsSkeleton";
import { SpotifyArtist, SpotifyTrack } from "../../types/index";
import ToggleButtonGroup from "./ToggleButtonGroup";

export default function SpotifyTopItems() {
  const [type, setType] = useState<"artists" | "tracks">("artists");
  const { items, error, loading } = useSpotifyTopItems(
    "long_term",
    12,
    0,
    type
  );

  if (loading) {
    return <SpotifyTopItemsSkeleton />;
  }
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-500">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>{error}</p>
      </div>
    );
  }
  if (!items?.length)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-2xl font-bold">
          No Top {type === "artists" ? "Artists" : "Tracks"} Found
        </h1>
        <p className="mt-4">You have not listened to any {type} yet.</p>
      </div>
    );

  return (
    <section className="my-10 px-10 w-full max-w-5xl mx-auto text-center space-y-10">
      <h2 className="text-2xl text-orange-500 font-black">
        My Top {type === "artists" ? "Artists" : "Tracks"}
      </h2>
      <ToggleButtonGroup
        options={[
          { label: "Top Artists", value: "artists" },
          { label: "Top Tracks", value: "tracks" },
        ]}
        value={type}
        onChange={setType}
      />
      <ul className="grid items-stretch grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
        {type === "artists"
          ? (items as SpotifyArtist[]).map((artist: SpotifyArtist) => (
              <li
                key={artist.id}
                style={{ marginBottom: 16 }}
                className="bg-gray-800 p-4 rounded-lg w-full"
              >
                {artist.images?.[0]?.url && (
                  <Image
                    src={artist.images[0].url}
                    alt={artist.name}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                      marginInline: "auto",
                    }}
                    priority
                  />
                )}
                <div className="flex flex-col items-center mt-2">
                  <strong>{artist.name}</strong> <br />
                  Followers: {artist.followers?.total}
                  <br />
                  <Link
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline mt-2"
                  >
                    View on Spotify
                  </Link>
                </div>
              </li>
            ))
          : (items as SpotifyTrack[]).map((track: SpotifyTrack) => (
              <li
                key={track.id}
                style={{ marginBottom: 16 }}
                className="bg-gray-800 p-4 rounded-lg w-full"
              >
                {track.album?.images?.[0]?.url && (
                  <Image
                    src={track.album.images[0].url}
                    alt={track.name}
                    width={50}
                    height={50}
                    style={{
                      borderRadius: "12%",
                      objectFit: "cover",
                      width: "auto",
                      height: "auto",
                      marginInline: "auto",
                    }}
                    priority
                  />
                )}
                <div className="flex flex-col items-center mt-2">
                  <strong>{track.name}</strong> <br />
                  Artists:{" "}
                  {track.artists?.map((artist) => artist.name).join(", ")}
                  <br />
                  Album:{" "}
                  {track.album?.name ? (
                    track.album.name
                  ) : (
                    <span className="text-red-500">Unknown</span>
                  )}
                  <br />
                  <Link
                    href={track.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline mt-2"
                  >
                    Listen on Spotify
                  </Link>
                </div>
              </li>
            ))}
      </ul>
    </section>
  );
}
