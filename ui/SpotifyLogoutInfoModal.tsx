"use client";

export default function SpotifyLogoutInfoModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-orange-500">Attention!</h2>
        <p className="mb-4 text-lg text-gray-700">
          You have logged out of API Music.
          <br />
          <span className="font-semibold text-green-600">However</span>, if you
          want to log out <b>globally</b> from Spotify, you need to do it
          manually.
        </p>
        <p className="mb-4 text-gray-600">
          You can log out of Spotify by clicking here:
        </p>
        <a
          href="https://accounts.spotify.com/logout"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 font-bold text-white transition bg-green-500 rounded hover:bg-green-600"
        >
          Log out of Spotify
        </a>
        <button
          className="block px-4 py-2 mx-auto mt-6 font-bold text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
