import { PageBreadcrumb } from "@/components/breadcrumb";
import { LeftSide } from "./_components/comments/left-side";
import { ListComment } from "./_components/comments/list-comment";
import { ShowDetailPostContent } from "./_components/detail/detail-post-content";
import { ListRelativePost } from "./_components/relative-posts/list-relative-post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IPosts, POST_STATUS } from "@/types";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export const DetailPostPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const post = await fetchQuery(api.posts.getPostBySlug, {
    slug: params.slug,
  });

  if (!post) {
    return null;
  }

  const convertedPost: IPosts = {
    _id: post._id,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    desc: post.desc,
    views: post.views,
    status: POST_STATUS[post.status.toUpperCase() as keyof typeof POST_STATUS],
    _creationTime: post._creationTime,
    image: post.image,
    user_id: post.user_id,
    cat_id: post.cat_id,
    tag_id: post.tag_id,
  };

  return (
    <div className="mt-[50px]">
      <div className="mb-8">
        <PageBreadcrumb segment="posts" page={`${convertedPost.slug}`} />
      </div>
      {/* <DetailTitle slug={params.slug} /> */}
      <h1 className="scroll-m-20 text-4xl font-mono text-start tracking-tight my-16">
        {convertedPost.slug}
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
        <ShowDetailPostContent markdown={convertedPost.desc} />
      </div>
      <hr />
      <h2 className="scroll-m-20 text-3xl font-mono font-semibold text-start mt-16">
        Leave a comment if you like this article!
      </h2>
      <div className="comments mt-8 grid grid-flow-col-1 lg:grid-cols-12 justify-center lg:justify-start gap-5 relative">
        <div className="col-span-1 md:col-span-4">
          <LeftSide />
        </div>
        <div className="col-span-1 md:col-span-8">
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
