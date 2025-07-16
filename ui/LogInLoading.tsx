import { LuLoaderPinwheel } from "react-icons/lu";

export default function LogInLoading() {
  return (
    <>
      <header className="text-center">
        <h1 className="text-4xl text-orange-400">Welcome back to API Music!</h1>
      </header>
      <main className="space-y-10 text-3xl text-center">
        <p>Nice seeing you again</p>
        <p className="text-2xl text-green-500 animate-pulse">Loading</p>
      </main>
      <footer className="flex items-center justify-center space-x-2">
        <LuLoaderPinwheel className="text-orange-400 animate-spin text-7xl" />
        <p className="text-lg text-green-500">Please wait...</p>
      </footer>
    </>
  );
}
