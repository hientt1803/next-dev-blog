"use client";

import { CategoryItem } from "./category-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Id } from "@/convex/_generated/dataModel";
import { ITags } from "@/types";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

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
  const [searchValue, setsearchValue] = useState<string>("");

  return (
    <div className="grid grid-cols-1 gap-5 sticky top-16 right-0 transition-all">
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        Search for what you need!
      </h4>
      <div className="flex justify-end w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Search everything you want"
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
        />
        <Button type="submit" onClick={() => handleSearch(searchValue)}>
          <SearchIcon />
        </Button>
      </div>
      <Button
        variant={"outline"}
        className="cursor-pointer underline"
        onClick={() => handleSelectedTag(undefined, "")}
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
