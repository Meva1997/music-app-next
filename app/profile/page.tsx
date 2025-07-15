"use client";
import { useState } from "react";
import Link from "next/link";
import MainHeader from "../../components/MainHeader";
import { FaUserAltSlash, FaStar } from "react-icons/fa";
import FooterRights from "../../components/FooterRights";
import { useRouter } from "next/navigation";
import LogOutLoading from "../../ui/LogOutLoading";

export default function PageProfile() {
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Estado para controlar el renderizado
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggingOut(true); // Muestra la página de LogOutLoading
    setTimeout(() => {
      router.push("/login"); // Redirige a la página de login después de un retraso
      setIsLoggingOut(false); // Restablece el estado de isLoggingOut
    }, 800); // Cambia el tiempo según lo que necesites
  };

  return (
    <div className="flex flex-col min-h-screen ">
      {" "}
      {/* Contenedor principal */}
      {isLoggingOut ? (
        <div className="grid place-items-center h-dvh animate-fade-in">
          <LogOutLoading />
        </div>
      ) : (
        <>
          <div className="w-full">
            <MainHeader title="Profile" />
          </div>

          <main className="flex flex-col items-center justify-center flex-grow h-auto mx-8 space-y-10">
            <h2 className="text-3xl font-bold">Username</h2>
            <p className="text-xl">Test UserName</p>
            <p className="flex items-center gap-2 text-lg font-bold text-orange-400">
              <FaStar
                className="text-2xl text-green-400"
                aria-label="Premium Member Icon"
              />
              Premium Member
            </p>
            <Link href={"#"} className="font-bold text-green-400">
              Change Password
            </Link>
            <div className="flex flex-col items-center gap-2 font-bold">
              <FaUserAltSlash
                className="mr-2 text-4xl text-white"
                aria-label="Log Out Icon"
              />
              <button
                className="px-5 text-center text-orange-400 transition-all duration-300 border-2 border-green-400 rounded-md cursor-pointer hover:scale-105"
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </div>
          </main>
        </>
      )}
      <FooterRights /> {/* Footer siempre pegado a la base */}
    </div>
  );
}
