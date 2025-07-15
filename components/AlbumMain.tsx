import Image from "next/image";

export default function AlbumMain() {
  return (
    <>
      <div className="text-center text-2xl text-orange-500 font-bold my-8">
        Featured Albums
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-8 my-10 lg:max-w-4xl lg:mx-auto">
        {/* Example album cards */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src="/placeholder-image.jpg" // Replace with the actual image source
              width={150}
              height={150}
              className="w-full h-40 object-cover rounded-md mb-2"
              alt="Album Cover"
            />
            <h3 className="text-white text-lg font-semibold">Album Title</h3>
            <p className="text-gray-400">Artist Name</p>
          </div>
        ))}
      </div>
    </>
  );
}
