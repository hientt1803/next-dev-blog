import { PageBreadcrumb } from "@/components/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IPosts } from "@/types";
import { LeftSide } from "./_components/comments/left-side";
import { ListComment } from "./_components/comments/list-comment";
import { ShowDetailPostContent } from "./_components/detail/detail-post-content";
import { ListRelativePost } from "./_components/relative-posts/list-relative-post";

const fetchPosts = async (slug: string) => {
  const posts = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    next: { revalidate: 60 },
  });
  const data = await posts.json();
  return data;
};

export const DetailPostPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post: IPosts = await fetchPosts(params.slug);

  return (
    <div className="mt-[50px]">
      <div className="mb-8">
        <PageBreadcrumb segment="posts" page={`${post.slug}`} />
      </div>
      {/* <DetailTitle slug={params.slug} /> */}
      <h1 className="scroll-m-20 text-4xl font-mono text-start tracking-tight my-16">
        {post.title}
      </h1>
      <div className="d-flex justify-start gap-3 mb-10">
        <div className="flex justify-start items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={25}
              height={25}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex gap-2">
            <div className="font-bold text-sm">Author name</div> |
            <div className="text-muted-foreground text-sm">Sat, 1/06/2024</div>
          </div>
        </div>
      </div>
      <div className="text-start">
        <ShowDetailPostContent markdown={post.desc} />
      </div>
      <hr />
      <h2 className="scroll-m-20 text-3xl font-mono font-semibold text-start mt-16">
        Leave a comment if you like this article!
      </h2>
      <div className="comments mt-8 grid grid-flow-col-1 md:grid-cols-12 justify-center lg:justify-start gap-5 relative">
        <div className="col-span-1 md:col-span-6 lg:col-span-4">
          <LeftSide />
        </div>
        <div className="col-span-1 md:col-span-6 lg:col-span-8">
          <ListComment />
        </div>
      </div>
      <div className="relative-posts mt-28">
        <h2 className="scroll-m-20 text-3xl font-mono font-semibold text-start mt-16">
          Related articles you should check out!
        </h2>
        <ListRelativePost />
      </div>
    </div>
  );
};
