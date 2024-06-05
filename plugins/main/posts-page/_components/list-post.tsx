import { fetchQuery } from "convex/nextjs";
import { PostPageItem } from "./post-item";
import { api } from "@/convex/_generated/api";
import { IPosts, POST_STATUS } from "@/types";

export const ListPost = async () => {
  const listPosts = await fetchQuery(api.posts.getAllPost);

  const convertedPosts: IPosts[] = listPosts.map((post) => ({
    ...post,
    status: POST_STATUS[post.status.toUpperCase() as keyof typeof POST_STATUS],
  }));

  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        {convertedPosts?.map((post) => (
          <PostPageItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
