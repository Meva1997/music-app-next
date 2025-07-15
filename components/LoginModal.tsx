"use client";
import { signIn } from "next-auth/react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-md shadow-md">
        <h2 className="mb-2 text-xl font-bold">
          Inicia sesión para ver tu perfil
        </h2>
        <button
          className="px-6 py-2 font-bold text-white transition bg-green-500 rounded-md hover:bg-green-600"
          onClick={() => signIn("spotify")}
        >
          Iniciar sesión con Spotify
        </button>
        <button className="mt-3 text-gray-500 underline" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
