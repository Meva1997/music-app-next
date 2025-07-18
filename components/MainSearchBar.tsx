import { Suspense, useState } from "react";
import { useForm } from "react-hook-form";
import { SearchInputMain } from "../types";
import ErrorMessage from "../ui/ErrorMessage";
import ArtistResultMainPage from "./API Result/ArtistResultMainPage";
import LoadingMessage from "../ui/spinner artist search /LoadingMessage";
import { useSpotifySearch } from "../hooks/useSpotifyArtistSearch";
import TrackResultMainPage from "./API Result/TrackResultMainPage";

export default function MainSearchBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInputMain>();

  const [view, setView] = useState<"artists" | "tracks">("artists");
  const { result, errorMessage, loading, searchSpotify } = useSpotifySearch();

  const onSubmit = (data: SearchInputMain) => {
    searchSpotify(data.search, "artist,track", 10);
    reset();
  };

  return (
    <>
      <section className="relative flex items-center justify-center h-8 max-w-2xl gap-2 mx-8 mt-10 md:w-1/2 md:mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center w-full gap-2"
        >
          <input
            type="text"
            className="w-2/3 h-10 text-center text-white bg-transparent border-2 border-orange-400 appearance-none rounded-xl outline-orange-600"
            placeholder="Search for an artist or song name"
            {...register("search", {
              required: "Enter an artist name",
            })}
          />

          <button
            type="submit"
            className="w-1/3 h-8 px-2 font-bold text-white bg-green-500 cursor-pointer rounded-xl hover:bg-green-600"
            value="Search"
          >
            Search
          </button>
        </form>
      </section>
      {/* Switch de vista */}
      <section className="flex justify-center gap-4 my-5 font-bold">
        <button
          className={`px-4 py-2 rounded ${
            view === "artists"
              ? "bg-green-500 text-white "
              : "bg-gray-700 cursor-pointer hover:bg-orange-800"
          }`}
          onClick={() => setView("artists")}
        >
          Artists
        </button>
        <button
          className={`px-4 py-2 rounded ${
            view === "tracks"
              ? "bg-green-500 text-white"
              : "bg-gray-700 cursor-pointer hover:bg-orange-800"
          }`}
          onClick={() => setView("tracks")}
        >
          Tracks
        </button>
      </section>

      {!loading && !result && (
        <div className="flex items-center justify-center h-64 text-gray-500 animate-pulse max-w-xl mx-auto px-5 text-center">
          Your search results will appear here. Please enter a search term.
        </div>
      )}
      <ErrorMessage message={errors.search?.message} />

      {/* Loading message and results */}
      {loading && <LoadingMessage />}
      {!loading && view === "artists" && result?.artists?.length && (
        <Suspense fallback={<LoadingMessage />}>
          <ArtistResultMainPage artists={result.artists} />
        </Suspense>
      )}
      {!loading && view === "tracks" && result?.tracks?.length && (
        <Suspense fallback={<LoadingMessage />}>
          <TrackResultMainPage tracks={result.tracks || []} />
        </Suspense>
      )}
      <ErrorMessage message={errorMessage} />
    </>
  );
}
