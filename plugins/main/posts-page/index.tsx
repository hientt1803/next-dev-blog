import { PageBreadcrumb } from "@/components/breadcrumb";
import Link from "next/link";
import { CategoriesList } from "./_components/categories-list";
import { ListPost } from "./_components/list-post";
import ListTags from "./_components/tags/list-tags";

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
        <div className="max-w-[45rem] mx-auto px-auto">
          <ListTags />
        </div>
        <div className="grid grid-flow-row-dense grid-cols-3 gap-8 relative">
          <div className="col-span-2">
            <ListPost />
          </div>
          <div>
            <CategoriesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPage;
