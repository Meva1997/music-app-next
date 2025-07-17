import Image from "next/image";
import { ArtistSpotifySearch } from "../../types";

type ArtistResultProps = {
  artist: ArtistSpotifySearch;
};

export default function ArtistResultMainPage({ artist }: ArtistResultProps) {
  return (
    <div className="mt-4 text-center">
      <h2 className="text-lg font-bold">{artist.name}</h2>
      {artist.images[0] && (
        <Image
          height={128}
          width={128}
          src={artist.images[0].url}
          alt={artist.name}
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
  );
}
