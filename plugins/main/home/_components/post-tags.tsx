import { ComboboxFilter } from "@/components/combobox-filter";
import { Button } from "@/components/ui/button";
import { Id } from "@/convex/_generated/dataModel";
import { ITags } from "@/types";
import { ChevronsUp } from "lucide-react";
import Link from "next/link";
import { TagItem } from "./tag-item";

export const PostTags = ({
  listTags,
  selectedTag,
  handleSelectedTag,
}: {
  listTags: ITags[];
  selectedTag: Id<"tags"> | undefined;
  handleSelectedTag: (tagId: Id<"tags"> | undefined, tagSlug: string) => void;
}) => {
  return (
    <div className="flex-1 order-1 lg:order-2">
      <div className="sticky top-16 right-0 transition-all">
        <ComboboxFilter
          selectedTag={selectedTag}
          tags={listTags}
          handleSelectedTag={handleSelectedTag}
        />

        <Button
          variant={"outline"}
          className="cursor-pointer underline w-full mt-2"
          onClick={() => handleSelectedTag(undefined, "")}
        >
          Clear search
        </Button>

        <div className="grid grid-cols-1 mt-2">
          <div className="flex flex-wrap gap-4 mt-5">
            {listTags.map((tag: ITags) => {
              return (
                <TagItem
                  key={tag._id}
                  tag={tag}
                  handleSelectedTag={handleSelectedTag}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-24 ms-auto">
          <Link href="#home-list-post">
            <Button variant={"default"} className="rounded-full p-4">
              <ChevronsUp />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
