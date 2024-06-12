import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
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
    api.posts.getAllPostPaginateWithParamsAndSearchTerm,
    { tagId: tagId, searchTerm: searchTerm },
    { initialNumItems: 5 }
  );

  return {
    results,
    status,
    loadMore,
    isLoading,
  };
}
