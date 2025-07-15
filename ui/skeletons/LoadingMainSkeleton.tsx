export default function LoadingMainSkeleton() {
  return (
    <>
      <section className="flex gap-2 justify-center items-center mt-10 mx-8 h-8 animate-pulse">
        <div className="bg-gray-600 rounded-xl w-2/3 h-10"></div>
        <div className="bg-gray-600 rounded-xl w-1/3 h-8"></div>
      </section>
      <div className="text-center text-2xl text-orange-500 font-bold my-8">
        Featured Albums
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-8 my-10">
        {/* Skeleton loader for album cards */}
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded-lg shadow-lg animate-pulse"
          >
            <div className="w-full h-40 bg-gray-600 rounded-md mb-2"></div>
            <div className="h-6 bg-gray-600 rounded-md mb-2"></div>
            <div className="h-4 bg-gray-600 rounded-md"></div>
          </div>
        ))}
      </div>
    </>
  );
}
