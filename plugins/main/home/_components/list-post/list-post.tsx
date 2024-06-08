"use client";

import { PostItem } from "./post-item";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

export const ListPost = () => {
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.posts.getAllPostPaginate,
    {},
    { initialNumItems: 5 }
  );
  // const isLoadingMore = status === "LoadingMore";

  return (
    <div id="list-post-home" className="flex-[2]">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        DISCOVER NEW POST HERE
      </h4>
      <div className="grid grid-cols-1 gap-6">
        {/* {isLoading || isLoadingMore ? (
          <div>Loading...</div>
        ) : (
          <>
            {results?.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </>
        )} */}

        <Suspense fallback={<div>Loading...</div>}>
          {results?.map((post, index) => <PostItem key={index} post={post} />)}
        </Suspense>

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
