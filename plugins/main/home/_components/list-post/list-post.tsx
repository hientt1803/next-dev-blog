"use client";

import { SkeletonLoading } from "@/components/skeleton-loading";
import { Button } from "@/components/ui/button";
import { IPosts } from "@/types";
import { PostItem } from "./post-item";

export const ListPost = ({ results, status, loadMore, isLoading }: any) => {
  return (
    <div id="list-post-home" className="flex-1 lg:flex-[2] order-2 lg:order-1">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        DISCOVER NEW POST HERE
      </h4>
      <div className="grid grid-cols-1 gap-6">
        {isLoading && (
          <>
            <SkeletonLoading />
            <SkeletonLoading />
            <SkeletonLoading />
          </>
        )}

        {results.length === 0 && !isLoading ? (
          <h2 className="scroll-m-20 text-3xl font-mono text-center font-semibold mt-16">
            There no article found! Please choose another tags and enjoy your
            posts. Thanks you ❤️❤️❤️ !!!
          </h2>
        ) : (
          <>
            {results?.map((post: IPosts, index: number) => (
              <PostItem key={index} post={post} />
            ))}
          </>
        )}

        <Button
          variant={"outline"}
          onClick={() => loadMore(5)}
          disabled={status !== "CanLoadMore"}
        >
          {status !== "CanLoadMore" ? "Run out of article" : "Load More"}
        </Button>
      </div>
    </div>
  );
};
