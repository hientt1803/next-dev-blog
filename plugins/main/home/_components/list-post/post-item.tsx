import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PostPageItem } from "@/plugins/main/posts-page/_components/post-item";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function PostItem({ post }: { post: any }) {
  return (
    <>
      <Card className="w-full md:shadow-md transition-all shadow-md p-3 hover:shadow-lg border-0 z-10 hidden md:block">
        <CardContent className="m-0 p-0">
          <div className="flex gap-6">
            <div className="flex-1 hidden md:flex">
              <Image
                src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
                alt="image"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </div>
            <div className="flex-[3] flex flex-col gap-2">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground">Mar 16,2024</span>
                <Badge variant="secondary">Marketing</Badge>
              </div>
              <Link href="/posts/abc">
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  Title here
                </h4>
              </Link>
              <blockquote className="border-l-2 pl-6 italic line-clamp-3 text-xs">
                {"After all,"} he said, {"everyone"} enjoys a good joke, so{" "}
                {"it's"}
                only fair that they should pay for the privilege{"."}
              </blockquote>
              <div className="flex flex-col md:flex-row justify-start items-start text-sm mt-3 md:justify-between">
                <Button variant={"ghost"} asChild>
                  <Link href="/post/slug-text" className="underline">
                    Read more...
                  </Link>
                </Button>
                <span className="text-muted-foreground text-xs">
                  views: 367
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="block md:hidden">
        <PostPageItem post={post} />
      </div>
    </>
  );
}
