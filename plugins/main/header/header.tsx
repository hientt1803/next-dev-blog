"use client";

import { ModeToggle } from "@/components/switch-theme-btn";
import { MenuAuth } from "./_components/auth";
import { HeaderNavigationMenu } from "./_components/navigation-menu";
import Link from "next/link";
import React from "react";
import { useTheme } from "next-themes";

export const MainHeader = () => {
  const { themes, theme } = useTheme();
  console.log(theme);

  return (
    <header
      className={`header-glassmorphism ${theme} container sticky top-0 left-0 right-0 shadow-md p-2`}
    >
      <div className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Next Dev
        </Link>

        <HeaderNavigationMenu />

        <div className="flex gap-3">
          <MenuAuth />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
