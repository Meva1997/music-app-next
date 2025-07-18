"use client";

import FooterRights from "../components/footer/FooterRights";
import MainHeader from "../components/MainHeader";
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
        </main>
        <FooterRights /> {/* Footer automáticamente pegado a la base */}
      </div>
    </>
  );
}
