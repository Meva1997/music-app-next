import Link from "next/link";
import MainHeader from "../../components/MainHeader";
import { FaUserAltSlash, FaStar } from "react-icons/fa";
import FooterRights from "../../components/FooterRights";

export default function page() {
  return (
    <>
      <MainHeader title="Profile" />

      <main className="flex flex-col items-center justify-center my-30 mx-8 space-y-10">
        <h2 className="font-bold text-3xl">Username</h2>
        <p className="text-xl">Test UserName</p>
        <p className="text-orange-400 font-bold text-lg flex items-center gap-2">
          <FaStar
            className="text-green-400 text-2xl"
            aria-label="Premium Member Icon"
          />
          Premium Member
        </p>
        <Link href={""} className="text-green-400 font-bold">
          Change Password
        </Link>
        <Link href={""} className="font-bold flex flex-col items-center gap-2">
          <FaUserAltSlash
            className="mr-2 text-white text-4xl"
            aria-label="Log Out Icon"
          />
          <button className="border-2 border-green-400 text-orange-400 rounded-md text-center px-5 hover:scale-105 transition-all duration-300 cursor-pointer">
            Log Out
          </button>
        </Link>
      </main>

      <FooterRights />
    </>
  );
}
