"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { MainNav } from "./_components/main-nav";
import MobileNav from "./_components/mobile-nax";

export const MainHeader = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`header-glassmorphism ${theme ? theme : ""} sticky top-0 left-0 right-0 shadow-md p-2 z-[9999999]`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Next-dev
        </Link>

        <MainNav />

        <div className="md:hidden">
          <MobileNav /> 
        </div>
      </div>
    </header>
  );
};
