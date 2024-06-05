"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

export const DetailTitle = ({ slug }: { slug: string }) => {
  const post = useQuery(api.posts.getPostBySlug, {
    slug: "How to handle NextJS Routing",
  });

  return (
    <h1 className="scroll-m-20 text-4xl font-mono text-start tracking-tight my-16">
      {post?.title}
    </h1>
  );
};
