import CommentsSection from "../../components/CommentsSection";
import FooterRights from "../../components/FooterRights";
import MainHeader from "../../components/MainHeader";

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

      <main className="space-y-10 my-20">
        <section className="scroll-container px-3 mx-auto w-3/4 h-[540px] overflow-y-auto space-y-10 overscroll-none">
          {comments.map((comment, index) => (
            <CommentsSection
              key={index}
              author={comment.author}
              commentary={comment.commentary}
            />
          ))}
        </section>

        <hr className="border-green-400" />

        <section className="mx-auto w-3/4 text-center">
          <h3 className="text-orange-400 text-xl">Leave your comment below</h3>
          <textarea
            name=""
            id=""
            placeholder="Type your comment here..."
            className="w-full h-32 border text-white border-gray-300 rounded-lg p-2 mt-2 resize-none outline-green-400 focus:ring-2 focus:border-green-600 focus:ring-green-600 transition-all"
          ></textarea>
          <button className="text-white bg-green-500 rounded-xl font-bold text-center w-1/2 py-2 px-5 mt-5 hover:bg-green-800 transition-all duration-300 cursor-pointer">
            Submit
          </button>
        </section>
      </main>

      <FooterRights />
    </>
  );
}
