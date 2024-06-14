"use client";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { getAllPostByTitle } from "@/services/postService";
import { IPosts } from "@/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const SearchArticle = () => {
  const route = useRouter();
  const [listPosts, setListPosts] = useState<IPosts[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getAllPostByTitle();
      setListPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <span
        className="text-sm text-muted-foreground"
        onClick={() => {
          setOpen(true);
        }}
      >
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 mx-2 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>+ K
        </kbd>
        to search Article
      </span>
      <Command>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type article content..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              {listPosts?.map((post) => (
                <CommandItem
                  key={post._id}
                  value={post.slug}
                  onSelect={() => {
                    route.push(`http://localhost:3000/posts/${post.slug}`);
                    setOpen(false);
                  }}
                >
                  <div
                    className="flex flex-col"
                    onClick={() => {
                      route.push(`http://localhost:3000/posts/${post.slug}`);
                      setOpen(false);
                    }}
                  >
                    <span className="text-xl font-bold line-clamp-1">
                      {post.title}
                    </span>
                    <span className="text-md line-clamp-2">{post.desc}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Command>
    </div>
  );
};

export default SearchArticle;
