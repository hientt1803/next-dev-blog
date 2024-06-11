import { api } from "@/convex/_generated/api";
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
