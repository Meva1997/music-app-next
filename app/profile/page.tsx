"use client";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import MainHeader from "../../components/MainHeader";
import FooterRights from "../../components/FooterRights";
import { FaUserAltSlash, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import LogOutLoading from "../../ui/LogOutLoading";
import { useSession, signOut } from "next-auth/react";
import SpotifyLogoutInfoModal from "../../components/SpotifyLogoutInfoModal";
import SpotifyProfile from "../../components/profile/SpotifyProfile";
import LoadingSpotifyProfileSkeleton from "../../ui/skeletons/LoadingSpotifyProfileSkeleton";

export default function PageProfile() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <span className="text-lg">Cargando perfil...</span>
      </div>
    );
  }

  const handleLogout = () => {
    setIsLoggingOut(true);
    setTimeout(async () => {
      await signOut({ redirect: false });
      setIsLoggingOut(false);
      setShowSpotifyModal(true); // <-- Aquí se muestra el modal de aviso
    }, 2000);
  };

  const handleSpotifyModalClose = () => {
    setShowSpotifyModal(false);
    router.push("/login"); // Redirige después de cerrar el modal
  };

  const hasSpotify = Boolean(session?.accessToken); // Verifica si el usuario tiene acceso a Spotify

  return (
    <div className="flex flex-col min-h-screen ">
      {isLoggingOut ? (
        <div className="grid h-screen place-items-center">
          <LogOutLoading />
        </div>
      ) : (
        <>
          <div className="w-full">
            <MainHeader title="Profile" />
          </div>
          {hasSpotify ? (
            <Suspense fallback={<LoadingSpotifyProfileSkeleton />}>
              <SpotifyProfile />
              <button
                className="px-5 text-center text-orange-400 transition-all duration-300 border-2 border-green-400 rounded-md cursor-pointer w-[200px] mx-auto hover:scale-105"
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </Suspense>
          ) : (
            <main className="flex flex-col items-center justify-center flex-grow h-auto mx-8 space-y-10">
              <h2 className="text-3xl font-bold">Username</h2>
              <p className="text-xl">{session?.user?.name}</p>
              <p className="text-xl">{session?.user?.email}</p>
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
              </div>
              <button
                className="px-5 text-center text-orange-400 transition-all duration-300 border-2 border-green-400 rounded-md cursor-pointer w-[200px] mx-auto hover:scale-105"
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </main>
          )}

          <FooterRights />
        </>
      )}

      {showSpotifyModal && (
        <SpotifyLogoutInfoModal onClose={handleSpotifyModalClose} />
      )}
    </div>
  );
}
