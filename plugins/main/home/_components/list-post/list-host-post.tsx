import React from "react";
import { HotPost } from "./hot-post";
import { IPosts } from "@/types";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export const ListHostPost = async () => {
  const listPosts: IPosts[] = await fetchQuery(api.posts.getAllPost);

  return (
    <div className="flex-1 mt-16">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        HOT POST
      </h4>
      <div className="grid grid-cols-1">
        {listPosts?.map((post, index) => (
          <HotPost key={index} />
        ))}
      </div>
    </div>
  );
};
