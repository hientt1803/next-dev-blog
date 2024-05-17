import React from "react";
import { HeaderNavigationMenu } from "./navigation-menu";
import { MenuAuth } from "./auth";
import { ModeToggle } from "@/components/switch-theme-btn";

export const MainNav = () => {
  return (
    <div className="hidden md:flex gap-3">
      <HeaderNavigationMenu />
      <MenuAuth />
      <ModeToggle />
    </div>
  );
};
