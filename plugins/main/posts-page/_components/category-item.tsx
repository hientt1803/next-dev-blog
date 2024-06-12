import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Id } from "@/convex/_generated/dataModel";
import { ITags } from "@/types";
import { useSearchParams } from "next/navigation";

export const CategoryItem = ({
  listTags,
  selectedTag,
  handleSelectedTag,
  title,
}: {
  listTags: ITags[];
  selectedTag: Id<"tags"> | undefined;
  handleSelectedTag: (tagId: Id<"tags">, tagSlug: string) => void;
  title: string;
}) => {
  const searchParams = useSearchParams();
  const selectedTagSlug = searchParams.get("tags");

  return (
    <Accordion type="single" collapsible defaultValue={title}>
      <AccordionItem value={`title`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div className="flex justify-start flex-col gap-2">
            {listTags.map((item, index) => (
              <span
                className={`cursor-pointer hover:underline ${
                  selectedTagSlug === item.slug ? "font-bold" : ""
                }`}
                key={index}
                onClick={() => handleSelectedTag(item._id, item.slug)}
              >
                {item.name}
              </span>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
