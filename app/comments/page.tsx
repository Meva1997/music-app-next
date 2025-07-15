"use client";
import { Suspense } from "react";
import CommentsSection from "../../components/CommentsSection";
import FooterRights from "../../components/FooterRights";
import MainHeader from "../../components/MainHeader";
import CommentsSkeleton from "../../ui/skeletons/CommentsSkeleton";

export default function page() {
  const comments = [
    { author: "Person 1", commentary: "This is the first comment." },
    { author: "Person 2", commentary: "Here's another comment!" },
    { author: "Person 3", commentary: "Great job on this project!" },
    { author: "Person 4", commentary: "I love this app!" },
    { author: "Person 5", commentary: "This is very informative." },
  ];

  return (
    <>
      <MainHeader title="Comments" />

      <main className="my-20 space-y-10">
        <section className="scroll-container px-3 mx-auto max-w-4xl h-[540px] overflow-y-auto space-y-10 overscroll-none">
          {comments.map((comment, index) => (
            <Suspense key={index} fallback={<CommentsSkeleton />}>
              <CommentsSection
                key={index}
                author={comment.author}
                commentary={comment.commentary}
              />
            </Suspense>
          ))}
        </section>

        <hr className="border-green-400" />

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
      </main>

      <FooterRights />
    </>
  );
}
