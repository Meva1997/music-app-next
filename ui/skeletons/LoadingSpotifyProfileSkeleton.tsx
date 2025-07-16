export default function LoadingSpotifyProfileSkeleton() {
  return (
    <div className="p-6 text-lg text-white bg-gray-800 rounded-lg shadow-lg animate-pulse">
      <div className="w-1/3 h-6 mb-4 bg-gray-600 rounded"></div>{" "}
      {/* Simula el nombre */}
      <div className="w-1/2 h-6 mb-4 bg-gray-600 rounded"></div>{" "}
      {/* Simula el email */}
      <div className="w-1/4 h-6 mb-4 bg-gray-600 rounded"></div>{" "}
      {/* Simula los seguidores */}
      <div className="w-32 h-32 mx-auto mt-4 bg-gray-600 rounded-full"></div>{" "}
      {/* Simula la imagen */}
      <div className="w-1/3 h-6 mx-auto mt-4 bg-gray-600 rounded"></div>{" "}
      {/* Simula el enlace */}
    </div>
  );
}
