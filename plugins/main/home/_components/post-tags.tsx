import { ComboboxFilter } from "@/components/combobox-filter";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn, fetcher } from "@/lib/utils";
import { useTags } from "@/services/tagService";
import { ITags } from "@/types";
import { ChevronsUp } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";

export const PostTags = () => {
  // const { data, error, isLoading } = useTags();
  const { data, error, isLoading } = useSWR(
    `${process.env.API_URL}/api/tags`,
    fetcher
  );

  return (
    <div className="flex-1">
      <div className="sticky top-16 right-0 transition-all">
        <ComboboxFilter tags={data} />

        <div className="grid grid-cols-1 mt-2">
          <div className="flex flex-wrap gap-4 mt-5">
            {data.map((tag: ITags) => {
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
