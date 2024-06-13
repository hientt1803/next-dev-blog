"use client";

import { usePost } from "@/services/postService";
import { PostPageItem } from "../post-item";

export const ListRelativePost = () => {
  const { results, status, loadMore, isLoading } = usePost();

  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {results?.map((post) => <PostPageItem key={post._id} post={post} />)}
      </div>
    </div>
  );
};
