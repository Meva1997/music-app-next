export default function SpotifyTopItemsSkeleton() {
  return (
    <section className="my-10 px-10 w-full max-w-5xl mx-auto text-center space-y-10 animate-pulse">
      <h2 className="text-2xl text-orange-500 font-black">My Top Items</h2>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-items-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <li
            key={index}
            className="bg-gray-800 p-4 rounded-lg w-full flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-gray-600 rounded-full mb-4"></div>{" "}
            {/* Simula la imagen */}
            <div className="w-2/3 h-4 bg-gray-600 rounded mb-2"></div>{" "}
            {/* Simula el nombre */}
            <div className="w-1/2 h-4 bg-gray-600 rounded mb-2"></div>{" "}
            {/* Simula los seguidores */}
            <div className="w-1/3 h-4 bg-gray-600 rounded"></div>{" "}
            {/* Simula el enlace */}
          </li>
        ))}
      </ul>
    </section>
  );
}
