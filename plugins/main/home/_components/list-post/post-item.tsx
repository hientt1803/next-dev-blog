import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { PostPageItem } from "@/plugins/main/posts-page/_components/post-item";
import { IPosts } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function PostItem({ post }: { post: IPosts }) {
  return (
    <>
      <Card className="w-full md:shadow-sm transition-all shadow-md p-3 hover:shadow-lg border-0 z-10 hidden md:block">
        <CardContent className="m-0 p-0">
          <div className="flex gap-6">
            <Link
              href={`/posts/${post.slug}`}
              className="flex-1 hidden md:flex"
            >
              <Image
                src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
                alt="image"
                className="rounded-lg"
                width={250}
                height={250}
              />
            </Link>
            <div className="flex-[3] flex flex-col gap-2">
              <div className="flex items-center gap-4 text-xs">
                <span className="text-muted-foreground">
                  {formatDate(post._creationTime)}
                </span>
                <Badge variant="secondary">{post?.tag?.name}</Badge>
              </div>
              <Link href={`/posts/${post.slug}`}>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                  {post.title}
                </h4>
              </Link>
              <blockquote className="border-l-2 pl-6 italic line-clamp-2 text-xs">
                {post.excerpt}
              </blockquote>
              <div className="flex flex-col md:flex-row justify-start items-start text-sm mt-3 md:justify-between">
                <Button variant={"secondary"} asChild>
                  <Link href={`/posts/${post.slug}`} className="underline">
                    Read more...
                  </Link>
                </Button>
                <span className="text-muted-foreground text-xs">
                  views: {post.views}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile view */}
      <div className="block md:hidden">
        <PostPageItem post={post} />
      </div>
    </>
  );
}
