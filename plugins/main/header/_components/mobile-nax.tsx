import { ModeToggle } from "@/components/switch-theme-btn";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { Menu as MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuAuth } from "./auth";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const user = useUser();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="block md:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent side="right">
        <div className="flex flex-col items-start gap-16">
          <div className="flex gap-3 items-center">
            <MenuAuth />
            <span className="font-bold text-xl font-mono">
              {user ? user.user?.fullName : "Please Login!"}
            </span>
            <ModeToggle />
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-14 items-start justify-start">
              <NavigationMenuItem>
                <Link className="px-0" href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-5xl")}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  className="px-0"
                  href="/posts"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-5xl")}
                  >
                    Posts
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  className="px-0"
                  href="/create-post"
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-5xl")}
                  >
                    Create Post
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <Link className="px-0" href="#" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "text-5xl")}
                  >
                    <ShowDialog />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="mt-10 flex gap-16 absolute bottom-10 left-10 right-10">
          <Link href="/"><Image src="/facebook.png" alt="" width={30} height={30} /></Link> 
          <Link href="/"><Image src="/instagram.png" alt="" width={30} height={30} /></Link> 
          <Link href="/"><Image src="/tiktok.png" alt="" width={30} height={30} /></Link> 
          <Link href="/"><Image src="/youtube.png" alt="" width={30} height={30} /></Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
