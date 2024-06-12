"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
import { ITags } from "@/types";
import { Id } from "@/convex/_generated/dataModel";

export function ComboboxFilter({
  tags,
  selectedTag,
  handleSelectedTag,
}: {
  tags: ITags[];
  selectedTag: Id<"tags"> | undefined;
  handleSelectedTag: (tagId: Id<"tags">, tagSlug: string) => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<string | undefined>(
    selectedTag ? tags.find((tag) => tag._id === selectedTag)?.name : undefined
  );

  const handleSelect = (currentValue: string) => {
    setValue((prevValue) =>
      prevValue === currentValue ? undefined : currentValue
    );
    setOpen(false);
  };

  const displayValue = value
    ? tags.find((tag) => tag.name === value)?.name
    : "Choose tags you want...";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[400px] justify-between"
        >
          {displayValue}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search for tags..." />
          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {tags.map((tag) => (
                <CommandItem
                  key={tag._id}
                  value={tag.name}
                  onSelect={() => {
                    handleSelect(tag.name);
                    handleSelectedTag(tag._id, tag.slug);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === tag.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {tag.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
