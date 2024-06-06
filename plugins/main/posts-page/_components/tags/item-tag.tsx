import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";

const ItemTag = ({ tag }: any) => {
  return <Link href={"posts/"} className={badgeVariants({ variant: "outline" })}>{tag.name}</Link>;
};

export default ItemTag;
