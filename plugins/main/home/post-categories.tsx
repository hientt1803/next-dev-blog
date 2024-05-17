import { ComboboxFilter } from "@/components/combobox-filter";
import { badgeVariants } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";

const categories = [
  "Life",
  "technologies",
  "next.js",
  "react",
  "front-end",
  "back-end",
  "Life",
  "technologies",
  "next.js",
  "react",
  "front-end",
  "back-end",
  "Life",
  "technologies",
  "next.js",
  "react",
  "front-end",
  "back-end",
];

export const PostCategories = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          #Tags
        </h4>
        <div>
          {/* <Input type="email" placeholder="Enter your tags here" />
          <Button type="submit">
            <SearchSlash />
          </Button> */}
          <ComboboxFilter />
        </div>
      </div>
      <div className="bg-white dark:bg-[#212121] rounded-md z-20">
        <ScrollArea className="w-full whitespace-nowrap rounded-md border-0 shadown-sm">
          <div className="flex w-max space-x-4 p-4">
            {categories.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={`/posts?category=${item}`}
                  className={cn(
                    badgeVariants({ variant: "secondary" }),
                    "text-xl shadow-sm active dark:bg-neutral-600 dark:text-white"
                  )}
                >
                  {item}
                </Link>
              );
            })}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
};
