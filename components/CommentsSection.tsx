type AuthorProps = {
  author: string;
  commentary: string;
};

export default function CommentsSection({ author, commentary }: AuthorProps) {
  return (
    <>
      <div className="border border-gray-300 break-all py-5 px-3 space-y-3 rounded-lg">
        <h2 className="font-black text-xl">{author}</h2>
        <p className="text-center text-lg font-bold">{commentary}</p>
      </div>
    </>
  );
}
