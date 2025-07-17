"use client";

import { Suspense } from "react";
import AlbumMain from "../components/AlbumMain";
import FooterRights from "../components/footer/FooterRights";
import MainHeader from "../components/MainHeader";
import LoadingMainSkeleton from "../ui/skeletons/LoadingMainSkeleton";
import MainSearchBar from "../components/MainSearchBar";

export default function Home() {
  return (
    <>
      <MainHeader title="API Music" />
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Contenedor principal */}
        <main className="flex-grow my-0 space-y-10">
          {" "}
          {/* flex-grow para ocupar el espacio disponible */}
          <MainSearchBar />
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
