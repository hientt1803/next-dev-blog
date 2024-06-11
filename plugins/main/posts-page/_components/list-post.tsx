"use client";

import { SkeletonLoading } from "@/components/skeleton-loading";
import { Button } from "@/components/ui/button";
import { usePost } from "@/services/postService";
import { Suspense } from "react";
import { PostPageItem } from "./post-item";

export const ListPost = () => {
  const { results, status, loadMore, isLoading } = usePost();

  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SkeletonLoading />}>
          {results?.map((post, index) => (
            <PostPageItem key={post._id} post={post} />
          ))}
        </Suspense>
      </div>

      <Button
        variant={"outline"}
        className="w-full mt-5"
        onClick={() => loadMore(5)}
        disabled={status !== "CanLoadMore"}
      >
        {status !== "CanLoadMore" ? "Run out of article" : "Load More"}
      </Button>
    </div>
  );
};
