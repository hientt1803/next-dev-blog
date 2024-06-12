"use client";

import { Button } from "@/components/ui/button";
import { IPosts } from "@/types";
import { PostPageItem } from "./post-item";
import { Skeleton } from "@/components/ui/skeleton";

export const ListPost = ({ results, status, loadMore, isLoading }: any) => {
  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        {isLoading && (
          <>
            <SkeletonLoadingPost />
            <SkeletonLoadingPost />
            <SkeletonLoadingPost />
          </>
        )}
      </div>

      {results.length === 0 && !isLoading ? (
        <h2 className="scroll-m-20 text-3xl font-mono text-center font-semibold mt-16">
          There no article found! Please choose another tags and enjoy your
          posts. Thanks you ❤️❤️❤️ !!!
        </h2>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {results?.map((post: IPosts, index: number) => (
            <PostPageItem key={index} post={post} />
          ))}
        </div>
      )}

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

export const SkeletonLoadingPost = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton className="h-60 w-full rounded-md" />
      <Skeleton className="h-6 w-full mt-4" />
      <Skeleton className="h-6 w-full mt-2" />
    </div>
  );
};
