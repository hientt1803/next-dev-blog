import { Footer } from "@/plugins/main/footer/footer";
import { Overview } from "@/plugins/main/home/overview";
import { PostCategories } from "@/plugins/main/home/post-categories";
import { ListHostPost } from "@/plugins/main/list-post/list-host-post";
import { ListPost } from "@/plugins/main/list-post/list-post";

export default function Home() {
  return (
    <>
      <main className="mt-[100px]">
        <Overview />

        <div className="container mt-[100px] relative w-full h-auto">
          <PostCategories />

          <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 relative">
            <ListPost />
            <ListHostPost />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
