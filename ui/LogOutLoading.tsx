import { LuLoaderPinwheel } from "react-icons/lu";

export default function LogOutLoading() {
  return (
    <>
      <header className="text-center my-10">
        <h1 className="text-4xl text-orange-400 font-bold">Loggin Out</h1>
      </header>
      <main className="text-center my-10 flex space-x-3 text-xl px-2">
        <p className=" text-green-500">You are being logged out, </p>
        <p className="animate-pulse text-orange-400 ">Please Wait..</p>
      </main>
      <footer className="text-center my-5">
        <LuLoaderPinwheel className="animate-spin text-7xl text-orange-400 mx-auto" />
      </footer>
    </>
  );
}
