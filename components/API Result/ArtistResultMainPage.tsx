import Image from "next/image";
import { ArtistSpotifySearch } from "../../types";

type ArtistResultProps = {
  artists: ArtistSpotifySearch[];
};

export default function ArtistResultMainPage({ artists }: ArtistResultProps) {
  if (!artists.length) {
    return <p className="text-center text-white">No artist found.</p>;
  }

  return (
    <>
      <h1 className="text-center my-5 text-3xl font-bold text-orange-500">
        Artists
      </h1>
      <section className="my-8 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto px-10">
        {artists.map((artist) => (
          <div
            key={artist.external_urls.spotify}
            className="text-center bg-gray-800 p-4 rounded-lg"
          >
            <h2 className="text-lg font-bold">{artist.name}</h2>
            {artist.images[0] && (
              <Image
                src={artist.images[0].url}
                alt={artist.name}
                width={128}
                height={128}
                className="mx-auto rounded-full w-32 h-32"
              />
            )}
            <p>Followers: {artist.followers.total}</p>
            <p>Genres: {artist.genres.join(", ")}</p>
            <a
              href={artist.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              View on Spotify
            </a>
          </div>
        ))}
      </section>
    </>
  );
}
