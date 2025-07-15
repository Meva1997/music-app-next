export default function CommentsSkeleton() {
  return (
    <main className="my-20 space-y-10 animate-pulse">
      {/* Skeleton for comments section */}
      <section className="scroll-container px-3 mx-auto w-3/4 h-[540px] overflow-y-auto space-y-10 overscroll-none">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="px-3 py-5 space-y-3 border border-gray-300 rounded-lg animate-pulse"
          >
            <div className="w-1/3 h-6 bg-gray-400 rounded"></div>
            <div className="w-2/3 h-4 mx-auto bg-gray-400 rounded"></div>
          </div>
        ))}
      </section>

      <hr className="border-gray-500" />

      {/* Skeleton for comment form */}
      <section className="w-3/4 mx-auto text-center">
        <div className="w-1/3 h-6 mx-auto mb-4 bg-gray-500 rounded-md"></div>
        <div className="w-full h-32 mb-4 bg-gray-600 rounded-lg"></div>
        <div className="w-1/2 h-10 mx-auto bg-gray-500 rounded-xl"></div>
      </section>
    </main>
  );
}
