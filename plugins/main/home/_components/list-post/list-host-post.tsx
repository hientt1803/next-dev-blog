import React from "react";
import { HotPost } from "./hot-post";
import { IPosts } from "@/types";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import Link from "next/link";
import { ChevronsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ListHostPost = async () => {
  const listPosts: IPosts[] = await fetchQuery(api.posts.getAllPost);

  return (
    <div className="flex-1 mt-16 relative">
      <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        HOT POST
      </h4>
      <div className="grid grid-cols-1">
        {listPosts?.map((post, index) => <HotPost key={index} />)}
      </div>

      <div className="absolute bottom-0 right-0">
        <Link href="#home-list-post">
          <Button variant={"secondary"} className="rounded-full bg-neutral-100 dark:bg-neutral-900 p-4">
            <ChevronsUp className="dark:text-white"/>
          </Button>
        </Link>
      </div>
    </div>
  );
};
