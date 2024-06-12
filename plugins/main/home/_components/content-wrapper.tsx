"use client";

import { Id } from "@/convex/_generated/dataModel";
import { GetPostsWithTagId } from "@/services/postService";
import { ITags } from "@/types";
import { useEffect, useState } from "react";
import { ListPost } from "./list-post/list-post";
import { PostTags } from "./post-tags";
import { useRouter } from "next/navigation";

const fetchTags = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`);
  const data = await res.json();
  return data;
};

const HomeContentWrapper = () => {
  const [selectedTag, setSetselectedTag] = useState<Id<"tags"> | undefined>(
    undefined
  );
  const { results, status, loadMore, isLoading } =
    GetPostsWithTagId(selectedTag);
  const [listTags, setListTags] = useState<ITags[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTags();
      const result = await data;
      setListTags(result);
    };

    fetchData();
  }, []);

  const handleSelectedTag = (
    tagId: Id<"tags"> | undefined,
    tagSlug: string
  ): void => {
    setSetselectedTag(tagId);
    window.history.pushState(null, "", `?tags=${tagSlug}`);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between flex-wrap gap-6 relative">
      <ListPost
        results={results}
        status={status}
        loadMore={loadMore}
        isLoading={isLoading}
      />
      <PostTags
        listTags={listTags}
        selectedTag={selectedTag}
        handleSelectedTag={handleSelectedTag}
      />
    </div>
  );
};

export default HomeContentWrapper;
