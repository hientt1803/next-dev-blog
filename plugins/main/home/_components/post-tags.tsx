import { ComboboxFilter } from "@/components/combobox-filter";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ITags } from "@/types";
import Link from "next/link";

const fetchPosts = async () => {
  const tags = await fetch(`${process.env.API_URL}/api/tags`);
  const data = await tags.json();
  return data;
};

export const PostTags = async () => {
  const tags: ITags[] = await fetchPosts();

  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          #Tags
        </h4>
        <div>
          <ComboboxFilter tags={tags} />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mt-5">
        {tags.map((tag) => {
          return (
            <Link
              key={tag._id}
              href={`/posts?category=${tag.slug}`}
              className={cn(
                badgeVariants({ variant: "secondary" }),
                "text-xl shadow-sm active dark:bg-neutral-600 dark:text-white"
              )}
            >
              {tag.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};
