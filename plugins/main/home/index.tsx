import { ListHostPost } from "@/plugins/main/home/_components/list-post/list-host-post";
import { ListPost } from "@/plugins/main/home/_components/list-post/list-post";
import { Overview } from "@/plugins/main/home/_components/overview/overview";
import { PostCategories } from "@/plugins/main/home/post-categories";

const IndexHomePage = () => {
  return (
    <div className="mt-[50px]">
      <Overview />

      <div className="container mt-[100px] relative w-full h-auto">
        <PostCategories />

        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 relative">
          <ListPost />
          <ListHostPost />
        </div>
      </div>
    </div>
  );
};

export default IndexHomePage;
