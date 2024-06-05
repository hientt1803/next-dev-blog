"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, ChevronsUpDown } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export const TopControl = ({
  ResetMarkDown,
  saveArticle,
}: {
  ResetMarkDown: () => void;
  saveArticle: (
    value: string,
    message: string,
    catId?: Id<"categories"> | undefined,
    tagId?: Id<"tags"> | undefined
  ) => void;
}) => {
  const tags = useQuery(api.tags.getAllTags);

  const [value, setValue] = useState<string>("");
  const [open, setOpen] = React.useState(false);
  const [ComboboxValue, setComboboxValue] = React.useState("");
  const [tagId, setTagId] = useState<Id<"tags"> | undefined>(undefined);
  const [catId, setCatId] = useState<Id<"categories"> | undefined>(undefined);

  return (
    <div className="mb-3 flex justify-between gap-2 items-center">
      <div className="w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          className="w-full min-w-96"
          placeholder="What your artical title?"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="w-full max-w-sm items-center space-x-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {ComboboxValue
                ? tags?.find((framework) => framework.name === ComboboxValue)
                    ?.name
                : "Select tags..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search for tags..." />
              <CommandEmpty>No tags found.</CommandEmpty>
              <CommandList>
                <CommandGroup>
                  {tags?.map((framework) => (
                    <CommandItem
                      key={framework.name}
                      value={framework.name}
                      onSelect={(currentValue) => {
                        setComboboxValue(
                          currentValue === ComboboxValue ? "" : currentValue
                        );
                        setOpen(false);
                        setTagId(framework._id);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          ComboboxValue === framework.name
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                      {framework.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex gap-3">
        <Button variant={"secondary"} onClick={ResetMarkDown}>
          Reset your article
        </Button>
        <Button
          variant={"default"}
          onClick={() => {
            saveArticle(
              value,
              value === "" ? "Please provide post title" : "",
              catId,
              tagId
            );
          }}
        >
          Save this article
        </Button>
      </div>
    </div>
  );
};
