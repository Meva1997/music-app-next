export default function NewCommentary() {
  return (
    <section className="flex flex-col items-center max-w-2xl mx-auto text-center">
      <h3 className="text-xl text-orange-400">Leave your comment below</h3>
      <textarea
        name=""
        id=""
        placeholder="Type your comment here..."
        className="w-3/4 h-32 px-5 mt-2 text-white transition-all border border-gray-300 rounded-lg resize-none outline-green-400 focus:ring-2 focus:border-green-600 focus:ring-green-600"
      ></textarea>
      <button className="px-5 py-2 mt-5 font-bold text-center text-white transition-all duration-300 bg-green-500 cursor-pointer rounded-xl hover:bg-green-800">
        Submit
      </button>
    </section>
  );
}
