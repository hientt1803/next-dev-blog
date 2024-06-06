import { IPosts } from "@/types";
import { PostItem } from "./post-item";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export const ListPost = async () => {
  const listPosts: IPosts[] = await fetchQuery(api.posts.getAllPost);

  return (
    <div id="list-post-home" className="flex-[2] mt-16">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        DISCOVER NEW POST HERE
      </h4>
      <div className="grid grid-cols-1 gap-6">
        {listPosts?.map((post, index) => <PostItem key={index} post={post} />)}
      </div>
    </div>
  );
};
