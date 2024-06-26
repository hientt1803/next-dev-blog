import { badgeVariants } from "@/components/ui/badge";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { ITags } from "@/types";

const ItemTag = ({
  tag,
  handleSelectedTag,
}: {
  tag: ITags;
  handleSelectedTag: (tagId: Id<"tags">, tagSlug: string) => void;
}) => {
  return (
    <span
      className={cn(
        badgeVariants({ variant: "outline" }),
        "px-3 py-1 text-sm cursor-pointer"
      )}
      onClick={() => handleSelectedTag(tag._id, tag.slug)}
    >
      {tag.name}
    </span>
  );
};

export default ItemTag;
