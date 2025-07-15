import { LuLoaderPinwheel } from "react-icons/lu";

export default function LogInLoading() {
  return (
    <>
      <header className="text-center">
        <h1 className="text-orange-400 text-4xl">Welcome back to API Music!</h1>
      </header>
      <main className="text-center space-y-10 text-3xl">
        <p>Nice seeing you again {"user"}</p>
        <p className=" text-green-500 animate-pulse text-2xl">Loading</p>
      </main>
      <footer className="flex justify-center items-center space-x-2">
        <LuLoaderPinwheel className="animate-spin text-7xl text-orange-400" />
        <p className="text-lg text-green-500">Please wait...</p>
      </footer>
    </>
  );
}
