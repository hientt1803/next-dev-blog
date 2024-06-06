import { Button } from "@/components/ui/button";
import Link from "next/link";
import { OverviewImageBanner } from "./overview-image-banner";

export const Overview = () => {
  return (
    <div className="container flex flex-col justify-start items-start">
      <h1 className="scroll-m-20 text-4xl tracking-tight md:text-7xl">
        <b className="dark:text-neutral-100">Hey, Next-dev here</b>, Discover
        someone ideals or create your own posts, stories now.{" "}
        <Link href="posts" className="underline">
          Discover now!
        </Link>
      </h1>
      <div className="w-full flex justify-center items-center mt-20">
        <Link href="#list-post-home">
          <Button variant={"link"} className="p-3 text-2xl hover:bg-white dark:hover:bg-transparent dark:text-white">
            <svg className="arrows hover:animate-bounce">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Button>
        </Link>
      </div>
      {/* Image banner */}
      {/* <div>
        <OverviewImageBanner/>
      </div> */}
    </div>
  );
};
