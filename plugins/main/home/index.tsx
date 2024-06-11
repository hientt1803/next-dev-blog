import { ListPost } from "@/plugins/main/home/_components/list-post/list-post";
import { Overview } from "@/plugins/main/home/_components/overview/overview";
import { PostTags } from "./_components/post-tags";

const IndexHomePage = () => {
  return (
    <div className="mt-[50px]">
      <Overview />

      <div className="container mt-[50px] w-full h-auto">
        <div
          className="flex flex-col md:flex-row justify-between flex-wrap gap-6 relative"
          id="home-list-post"
        >
          <ListPost />
          <PostTags />
        </div>
      </div>
    </div>
  );
};

export default IndexHomePage;
