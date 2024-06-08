import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const AuthDisplay = () => {
  return (
    <div className="flex justify-start items-center gap-3">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          width={25}
          height={25}
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex gap-2">
        <div className="font-bold text-sm">Author name</div> |
        <div className="text-muted-foreground text-sm">Sat, 1/06/2024</div>
      </div>
    </div>
  );
};
