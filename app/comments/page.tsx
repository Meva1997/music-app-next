"use client";
import { Suspense, useState } from "react";
import CommentsSection from "../../components/commentaries/CommentsSection";
import FooterRights from "../../components/footer/FooterRights";
import MainHeader from "../../components/MainHeader";
import CommentsSkeleton from "../../ui/skeletons/CommentsSkeleton";
import NewCommentary from "../../components/commentaries/NewCommentary";

export default function CommentsPage() {
  const [comments, setComments] = useState<
    { author: string; commentary: string }[]
  >([
    { author: "Person 1", commentary: "This is the first comment." },
    { author: "Person 2", commentary: "Here's another comment!" },
    { author: "Person 3", commentary: "Great job on this project!" },
  ]);

  // Handler para agregar comentario
  const addComment = (author: string, commentary: string) => {
    setComments((prev) => [...prev, { author, commentary }]);
  };

  return (
    <>
      <MainHeader title="Comments" />
      <main className="my-20 space-y-10">
        <section className="scroll-container px-3 mx-auto max-w-4xl h-[540px] overflow-y-auto space-y-10 overscroll-none">
          {comments.length === 0 ? (
            <div className="text-center text-gray-400">
              No hay comentarios aún.
            </div>
          ) : (
            comments.map((comment, index) => (
              <Suspense key={index} fallback={<CommentsSkeleton />}>
                <CommentsSection
                  author={comment.author}
                  commentary={comment.commentary}
                />
              </Suspense>
            ))
          )}
        </section>
        <hr className="border-green-400" />
        <NewCommentary addComment={addComment} />
      </main>
      <FooterRights />
    </>
  );
}
