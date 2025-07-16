import Link from "next/link";
import { FaUserAltSlash, FaStar } from "react-icons/fa";
import { GenericProfileData } from "../../types";

type GenericProfileProps = {
  user: GenericProfileData;
  onLogout: () => void; // Función opcional para manejar el cierre de sesión
};

export default function GenericProfile({
  user,
  onLogout,
}: GenericProfileProps) {
  return (
    <main className="flex flex-col items-center justify-center flex-grow h-auto mx-8 space-y-10">
      <h2 className="text-3xl font-bold">Username</h2>
      <p className="text-xl">{user.name}</p>
      <p className="text-xl">{user.email}</p>
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
        onClick={onLogout}
      >
        Log Out
      </button>
    </main>
  );
}
