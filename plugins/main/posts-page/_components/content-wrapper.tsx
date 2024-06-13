"use client";

import { Id } from "@/convex/_generated/dataModel";
import { GetPostsWithTagId } from "@/services/postService";
import { ITags } from "@/types";
import { useEffect, useState } from "react";
import ListTags from "./tags/list-tags";
import { ListPost } from "./list-post";
import { CategoriesList } from "./categories-list";

const fetchTags = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`);
  const data = await res.json();
  return data;
};

const ContentWrapper = () => {
  const [selectedTag, setSetselectedTag] = useState<Id<"tags"> | undefined>(
    undefined
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { results, status, loadMore, isLoading } = GetPostsWithTagId(
    selectedTag,
    searchTerm
  );
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

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <div className="max-w-[45rem] mx-auto px-auto my-8">
        <div>
          <h1 className="scroll-m-20 text-2lg font-bold text-center mx-auto tracking-tight mt-10 mb-4">
            #Tags
          </h1>
          <ListTags
            listTags={listTags}
            selectedTag={selectedTag}
            handleSelectedTag={handleSelectedTag}
          />
        </div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-8 relative">
        <div className="col-span-3 order-2 lg:order-1 lg:col-span-2">
          <ListPost
            results={results}
            status={status}
            loadMore={loadMore}
            isLoading={isLoading}
          />
        </div>
        <div className="col-span-3 order-1 lg:order-2 lg:col-span-1">
          <CategoriesList
            listTags={listTags}
            selectedTag={selectedTag}
            handleSelectedTag={handleSelectedTag}
            handleSearch={handleSearch}
          />
        </div>
      </div>
    </>
  );
};

export default ContentWrapper;
