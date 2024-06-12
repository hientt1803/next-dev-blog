import React from "react";
import ItemTag from "./item-tag";
import { ITags } from "@/types";
import { Id } from "@/convex/_generated/dataModel";

const ListTags = ({
  listTags,
  selectedTag,
  handleSelectedTag,
}: {
  listTags: ITags[];
  selectedTag: Id<"tags"> | undefined;
  handleSelectedTag: (tagId: Id<"tags">, tagSlug: string) => void;
}) => {
  return (
    <div className="col-span-4 flex gap-2 justify-center items-center flex-wrap">
      {listTags.map((tag) => (
        <ItemTag key={tag._id} tag={tag} handleSelectedTag={handleSelectedTag} />
      ))}
    </div>
  );
};

export default ListTags;
