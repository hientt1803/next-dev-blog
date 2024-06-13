import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { IPosts } from "@/types";
import { fetchQuery } from "convex/nextjs";
import { usePaginatedQuery } from "convex/react";

export function usePost() {
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.posts.getAllPostPaginate,
    {},
    { initialNumItems: 5 }
  );

  return {
    results,
    status,
    loadMore,
    isLoading,
  };
}

export function GetPostsWithTagId(tagId?: Id<"tags">, searchTerm?: string) {
  const { results, status, loadMore, isLoading } = usePaginatedQuery(
    api.posts.getAllPostPaginateWithTagIdAndSearchTerm,
    { tagId: tagId, searchTerm: searchTerm },
    { initialNumItems: 10 }
  );

  return {
    results,
    status,
    loadMore,
    isLoading,
  };
}

export async function getAllPostByTitle(): Promise<IPosts[]> {
  const results = await fetchQuery(api.posts.getAllPost);
  return results as unknown as IPosts[];
}
