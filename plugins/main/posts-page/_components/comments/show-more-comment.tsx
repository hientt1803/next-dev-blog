"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ShowMoreComment = () => {
  const [open, setOpen] = useState(false);

  // if (isDesktop) {
  //   return (
  //     <Drawer open={open} onOpenChange={setOpen}>
  //     <DrawerTrigger asChild>
  //     <Button variant="outline">Show more</Button>
  //   </DrawerTrigger>
  //   <DrawerContent>
  //     <DrawerHeader className="text-left">
  //       <DrawerTitle>Edit profile</DrawerTitle>
  //       <DrawerDescription>
  //         Make changes to your profile here. Click save when {"you're"} done.
  //       </DrawerDescription>
  //     </DrawerHeader>
  //     <ProfileForm className="px-4" />
  //     <DrawerFooter className="pt-2">
  //       <DrawerClose asChild>
  //         <Button variant="outline">Cancel</Button>
  //       </DrawerClose>
  //     </DrawerFooter>
  //   </DrawerContent>
  // </Drawer>
  //   );
  // }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Show more</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when {"you're"} done.
          </DialogDescription>
        </DialogHeader>
        <ProfileForm />
      </DialogContent>
    </Dialog>
  );
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  );
}
