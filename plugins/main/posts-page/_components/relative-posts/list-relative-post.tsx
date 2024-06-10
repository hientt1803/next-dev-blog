import React from "react";
import { PostPageItem } from "../post-item";
import { IPosts } from "@/types";

const fetchPosts = async () => {
  const posts = await fetch(`${process.env.API_URL}/api/posts`, {
    next: { revalidate: 20 },
  });
  const data = await posts.json();
  return data;
};

export const ListRelativePost = async () => {
  const listPosts: IPosts[] = await fetchPosts();
  return (
    <div className="w-full h-auto mt-2">
      <div className="grid grid-cols-2 gap-6">
        {listPosts.map((post) => (
          <PostPageItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
