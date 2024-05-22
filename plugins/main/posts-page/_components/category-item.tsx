import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const CategoryItem = ({
  data,
  title,
}: {
  data: any[];
  title: string;
}) => {
  return (
    <Accordion type="single" collapsible defaultValue={title}>
      <AccordionItem value={`title`}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div className="flex justify-start flex-col gap-2">
            {data.map((item, index) => (
              <Link key={index} href={item.title}>
                {item.title}
              </Link>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
