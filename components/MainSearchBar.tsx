import { useForm } from "react-hook-form";
import { SearchInputMain } from "../types";
import ErrorMessage from "../ui/ErrorMessage";
import ArtistResultMainPage from "./API Result/ArtistResultMainPage";
import LoadingMessage from "../ui/spinner artist search /LoadingMessage";
import { useSpotifyArtistSearch } from "../hooks/useSpotifyArtistSearch";

export default function MainSearchBar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SearchInputMain>();

  const { artistResult, errorMessage, loading, searchArtist } =
    useSpotifyArtistSearch();

  const onSubmit = (data: SearchInputMain) => {
    searchArtist(data.search);
    reset();
  };

  return (
    <>
      <section className="flex items-center justify-center h-8 max-w-2xl gap-2 mx-8 mt-10 md:w-1/2 md:mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center w-full gap-2"
        >
          <input
            type="text"
            className="w-2/3 h-10 text-center text-white bg-transparent border-2 border-orange-400 appearance-none rounded-xl outline-orange-600"
            placeholder="Search for an artist name"
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
      {artistResult && <ArtistResultMainPage artist={artistResult} />}
      <ErrorMessage message={errorMessage} />
    </>
  );
}
