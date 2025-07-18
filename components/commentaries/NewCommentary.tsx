"use client";
import { useState } from "react";

export default function NewCommentary({
  addComment,
}: {
  addComment: (author: string, commentary: string) => void;
}) {
  const [author, setAuthor] = useState("");
  const [commentary, setCommentary] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !commentary.trim()) return;
    addComment(author, commentary);
    setAuthor("");
    setCommentary("");
  };

  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto text-center">
      <h3 className="text-xl text-orange-400">Leave your comment below</h3>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center space-y-5"
      >
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-3/4 px-5 py-2 mt-2 mb-2 text-white border border-gray-300 rounded-lg outline-green-400 focus:ring-2 focus:border-green-600 focus:ring-green-600"
          required
        />
        <textarea
          placeholder="Type your comment here..."
          value={commentary}
          onChange={(e) => setCommentary(e.target.value)}
          className="w-3/4 h-32 px-5 mb-2 text-white border border-gray-300 rounded-lg resize-none outline-green-400 focus:ring-2 focus:border-green-600 focus:ring-green-600"
          required
        />
        <button
          type="submit"
          className="px-5 py-2 mt-2 font-bold text-center text-white transition-all duration-300 bg-green-500 cursor-pointer rounded-xl hover:bg-green-800"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
