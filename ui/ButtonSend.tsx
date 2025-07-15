import React from "react";

type ButtonSendProps = {
  text: string;
};

export default function ButtonSend({ text }: ButtonSendProps) {
  return (
    <button className="px-3 py-1 font-black text-center text-white transition-colors duration-300 bg-green-500 cursor-pointer rounded-2xl hover:bg-green-600">
      {text}
    </button>
  );
}
