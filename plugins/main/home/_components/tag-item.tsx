import { badgeVariants } from "@/components/ui/badge";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { ITags } from "@/types";

export const TagItem = ({
  tag,
  handleSelectedTag,
}: {
  tag: ITags;
  handleSelectedTag: (tagId: Id<"tags">, tagSlug: string) => void;
}) => {
  return (
    <span
      className={cn(
        badgeVariants({ variant: "secondary" }),
        "text-xl shadow-sm active dark:bg-neutral-600 dark:text-white cursor-pointer"
      )}
      onClick={() => handleSelectedTag(tag._id, tag.slug)}
    >
      {tag.name}
    </span>
  );
};
