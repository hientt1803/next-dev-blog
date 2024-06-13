"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { MainNav } from "./_components/main-nav";
import MobileNav from "./_components/mobile-nax";
import { cn } from "@/lib/utils";
import SearchArticle from "./_components/search-article";

export const MainHeader = () => {
  const { theme } = useTheme();

  return (
    <header
      className={cn(
        "header-glassmorphism sticky top-0 left-0 right-0 shadow-md p-2 z-[9999999]",
        theme ? theme : ""
      )}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl">
          Next-dev
        </Link>

        <div className="flex gap-2 items-center text-xl tracking-tight">
          <SearchArticle />
          <MainNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
