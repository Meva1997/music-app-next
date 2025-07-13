import AlbumMain from "../components/AlbumMain";
import FooterRights from "../components/FooterRights";
import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <>
      <MainHeader title="API Music" />
      <main className="overscroll-none">
        <section className="flex gap-2 justify-center items-center mt-10 mx-8 h-8">
          <input
            type="text"
            className="border-2 border-orange-400 rounded-xl text-center text-white w-2/3 outline-orange-600 h-10"
            placeholder="Search for a artist, or album"
          />
          <input
            type="button"
            className=" bg-green-500 px-2 rounded-xl font-bold w-1/3 hover:bg-green-600 h-8 cursor-pointer text-white"
            value="Search"
          />
        </section>
        <section>
          <AlbumMain />
        </section>
      </main>

      <FooterRights />
    </>
  );
}
