"use client";

import { IPosts } from "@/types";
import { PostItem } from "./post-item";
import { usePaginatedQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const fetchPosts = async () => {
  const posts = await fetch(`${process.env.API_URL}/api/posts`, {
    next: { revalidate: 20 },
  });
  const data = await posts.json();
  return data;
};

export const ListPost = async () => {
  // const listPosts: IPosts[] = await fetchPosts();
  const { results, status, loadMore } = usePaginatedQuery(
    api.posts.getAllPostPaginate,
    {},
    { initialNumItems: 5 }
  );

  return (
    <div id="list-post-home" className="flex-[2] mt-16">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        DISCOVER NEW POST HERE
      </h4>
      <div className="grid grid-cols-1 gap-6">
        {results?.map((post, index) => <PostItem key={index} post={post} />)}
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
