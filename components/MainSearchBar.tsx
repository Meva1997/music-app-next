import { useForm } from "react-hook-form";
import { SearchInputMain } from "../types";
import ErrorMessage from "../ui/ErrorMessage";
import ArtistResultMainPage from "./API Result/ArtistResultMainPage";
import LoadingMessage from "../ui/spinner artist search /LoadingMessage";
import { useSpotifySearch } from "../hooks/useSpotifyArtistSearch";
import { Suspense } from "react";
import TrackResultMainPage from "./API Result/TrackResultMainPage";

export default function MainSearchBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInputMain>();

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
      <ErrorMessage message={errors.search?.message} />
      {loading && <LoadingMessage />}

      {!result?.artists?.length && !result?.tracks?.length && !loading && (
        <div className="flex items-center justify-center my-20 h-auto max-w-3xl mx-auto px-8">
          <p className="text-center text-white text-xl animate-pulse ">
            First search for an artist or song name. Results will appear here.
          </p>
        </div>
      )}

      {result?.artists && result.artists.length > 0 && (
        <Suspense fallback={<LoadingMessage />}>
          <ArtistResultMainPage artists={result.artists} />
          <hr className="text-green-500" />
          <TrackResultMainPage tracks={result.tracks || []} />
        </Suspense>
      )}
      <ErrorMessage message={errorMessage} />
    </>
  );
}
