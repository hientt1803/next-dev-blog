"use client";

import { Badge } from "@/components/ui/badge";
import { CategoryItem } from "./category-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Id } from "@/convex/_generated/dataModel";
import { ITags } from "@/types";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const CategoriesList = ({
  listTags,
  selectedTag,
  handleSelectedTag,
  handleSearch,
}: {
  listTags: ITags[];
  selectedTag: Id<"tags"> | undefined;
  handleSelectedTag: (tagId: Id<"tags"> | undefined, tagSlug: string) => void;
  handleSearch: (term: string) => void;
}) => {
  const pathname = usePathname();
  const useParams = useSearchParams();
  const tag = useParams.get("tags");
  const [searchValue, setsearchValue] = useState<string>("");

  return (
    <div className="grid grid-cols-1 gap-5 sticky top-16 right-0 transition-all">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Search for what you need!
      </h4>
      {tag && (
        <span className="flex flex-wrap">
          Currently search by tag:
          <Badge variant={"secondary"}>{tag}</Badge>
        </span>
      )}
      <div className="flex justify-end w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder={
            tag ? `search article in tag: ${tag}` : "Search article you want"
          }
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(searchValue);
            }
          }}
        />
        <Button type="submit" onClick={(e) => handleSearch(searchValue)}>
          <SearchIcon />
        </Button>
      </div>
      <Button
        variant={"outline"}
        className="cursor-pointer underline"
        onClick={(e) => {
          handleSelectedTag(undefined, "");
          handleSearch("");
          setsearchValue("");
        }}
      >
        Clear search
      </Button>
      <div className="flex flex-col gap-4">
        <CategoryItem
          listTags={listTags}
          selectedTag={selectedTag}
          handleSelectedTag={handleSelectedTag}
          title="Categories"
        />
      </div>
    </div>
  );
};
