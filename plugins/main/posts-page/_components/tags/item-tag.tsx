import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";

const ItemTag = ({ tag }: any) => {
  return <Link href={"posts/"} className={cn(badgeVariants({ variant: "outline" }),"px-3 py-1 text-sm")}>{tag.name}</Link>;
};

export default ItemTag;
