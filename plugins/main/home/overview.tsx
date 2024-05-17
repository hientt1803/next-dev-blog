import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

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
            <svg className="arrows">
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </svg>
          </Button>
        </Link>
      </div>
      <div className="mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="Banner image"
              width={650}
              height={150}
              className="shadow-md"
            />
            <Image
              src="https://images.unsplash.com/photo-1534531688091-a458257992cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxjb2xsZWN0aW9uJTIwc3Rvcmllc3xlbnwwfDB8MHx8fDI%3D"
              alt="Banner image"
              width={650}
              height={200}
              className="shadow-md"
            />
          </div>

          <Image
            src="https://images.unsplash.com/photo-1506430730356-91514bf7359c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
            alt="Banner image"
            width={650}
            height={500}
            className="shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
