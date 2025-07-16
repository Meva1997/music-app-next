"use client";
import { Suspense, useEffect, useState } from "react";
import MainHeader from "../../components/MainHeader";
import FooterRights from "../../components/FooterRights";
import { useRouter } from "next/navigation";
import LogOutLoading from "../../ui/LogOutLoading";
import { useSession, signOut } from "next-auth/react";
import SpotifyProfile from "../../components/profile/SpotifyProfile";
import LoadingSpotifyProfileSkeleton from "../../ui/skeletons/LoadingSpotifyProfileSkeleton";
import GenericProfile from "../../components/profile/GenericProfile";
import SpotifyLogoutInfoModal from "../../ui/SpotifyLogoutInfoModal";
import Swal from "sweetalert2";

export default function PageProfile() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showSpotifyModal, setShowSpotifyModal] = useState(false);
  const [manualSingOut, setManualSignOut] = useState(false);

  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated" && !manualSingOut) {
      router.push("/login");
      Swal.fire({
        position: "center",
        icon: "error",
        title: "You must be logged in to access this page",
        showConfirmButton: false,
        timer: 3500,
      });
    }
  }, [status, router, manualSingOut]);

  const handleLogout = () => {
    if (isSpotifyProvider) {
      setShowSpotifyModal(true);
    } else {
      // Si NO es Spotify, hace logout directo
      setManualSignOut(true);
      setIsLoggingOut(true);
      signOut({ redirect: false }).then(() => {
        setTimeout(() => {
          setIsLoggingOut(false);
          router.push("/login");
        }, 2000);
      });
    }
  };

  const handleSpotifyModalClose = async () => {
    setManualSignOut(true);
    setIsLoggingOut(true);
    setShowSpotifyModal(false);
    await signOut({ redirect: false });
    setTimeout(() => {
      setIsLoggingOut(false);
      router.push("/login");
    }, 2000); // Optional delay for better UX
  };

  const hasSpotify = Boolean(session?.accessToken); // Verifica si el usuario tiene acceso a Spotify
  const isSpotifyProvider = session?.provider === "spotify"; // Verifica si el proveedor es Spotify

  if (status === "loading") {
    return <LoadingSpotifyProfileSkeleton />;
  }

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
            <>
              <Suspense fallback={<LoadingSpotifyProfileSkeleton />}>
                <SpotifyProfile />
              </Suspense>
              <button
                className="px-5 text-center text-orange-400 transition-all duration-300 border-2 border-green-400 rounded-md cursor-pointer w-[200px] mx-auto hover:scale-105"
                type="button"
                onClick={handleLogout}
              >
                Log Out
              </button>
            </>
          ) : (
            <GenericProfile
              user={{
                name: session?.user?.name ?? undefined,
                email: session?.user?.email ?? undefined,
              }}
              onLogout={handleLogout}
            />
          )}

          <FooterRights />
        </>
      )}
      {isSpotifyProvider &&
        // Si el proveedor es Spotify, muestra el modal de información de cierre de sesión
        showSpotifyModal && (
          <SpotifyLogoutInfoModal onClose={handleSpotifyModalClose} />
        )}
    </div>
  );
}

// {showSpotifyModal && (
//   <SpotifyLogoutInfoModal onClose={handleSpotifyModalClose} />
// )}
