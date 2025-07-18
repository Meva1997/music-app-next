import Image from "next/image";
import { SpotifyTrack } from "../../types";

type TrackResultProps = {
  tracks: SpotifyTrack[];
};

export default function TrackResultMainPage({ tracks }: TrackResultProps) {
  if (!tracks.length) {
    return <p className="text-center text-white">No tracks found.</p>;
  }

  return (
    <>
      <h1 className="text-center my-5 text-3xl font-bold text-orange-500 ">
        Tracks
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 max-w-5xl mx-auto px-10">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="text-center bg-gray-800 p-3 rounded-lg space-y-5"
          >
            <h2 className="text-lg font-bold">{track.name}</h2>
            <Image
              src={track.album.images[0]?.url}
              alt={track.name}
              width={128}
              height={128}
              className="object-cover mx-auto  w-32 h-32 mb-2"
            />
            <p>By: {track.artists.map((artist) => artist.name).join(", ")}</p>
            <p>Album: {track.album.name}</p>
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              Listen on Spotify
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
