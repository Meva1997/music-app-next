"use client";

import { Suspense } from "react";
import AlbumMain from "../components/AlbumMain";
import FooterRights from "../components/FooterRights";
import MainHeader from "../components/MainHeader";
import LoadingMainSkeleton from "../ui/skeletons/LoadingMainSkeleton";
import ErrorMessage from "../ui/ErrorMessage";
import { SearchInputMain } from "../types";
import { useForm } from "react-hook-form";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchInputMain>(); // Configura React Hook Form

  const onSubmit = (data: SearchInputMain) => {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviando los datos a una API
    alert(`Searching for: ${data.search}`); // Simula una búsqueda
  };

  return (
    <>
      <MainHeader title="API Music" />
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Contenedor principal */}
        <main className="flex-grow my-0 space-y-10">
          {" "}
          {/* flex-grow para ocupar el espacio disponible */}
          <section className="flex items-center justify-center h-8 max-w-2xl gap-2 mx-8 mt-10 md:w-1/2 md:mx-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex items-center w-full gap-2"
            >
              <input
                type="text"
                className="w-2/3 h-10 text-center text-white bg-transparent border-2 border-orange-400 appearance-none rounded-xl outline-orange-600"
                placeholder="Search for an artist name or album name"
                {...register("search", {
                  required: "Enter an artist name or album name",
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
          {<ErrorMessage message={errors.search?.message} />}
          <section className="h-auto">
            <Suspense fallback={<LoadingMainSkeleton />}>
              <AlbumMain />
            </Suspense>
          </section>
        </main>
        <FooterRights /> {/* Footer automáticamente pegado a la base */}
      </div>
    </>
  );
}
