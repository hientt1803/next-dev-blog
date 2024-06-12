import { PageBreadcrumb } from "@/components/breadcrumb";
import Link from "next/link";
import ContentWrapper from "./_components/content-wrapper";

const PostPage = async () => {
  return (
    <>
      <div className="mt-[50px]">
        <div className="mb-8">
          <PageBreadcrumb segment="posts" />
        </div>
        <h1 className="scroll-m-20 text-5xl max-w-5xl font-mono text-center mx-auto tracking-tight my-16">
          <b className="dark:text-neutral-100">Discover</b> your ideals, find
          what you need here! {"Can't"} find what you find.{" "}
          <Link
            href="/create-post"
            className="underline font-bold dark:text-neutral-100"
          >
            Create by your own
          </Link>{" "}
          and share your knowledge.
        </h1>
        <ContentWrapper />
      </div>
    </>
  );
};

export default PostPage;
