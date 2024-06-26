import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { IUsers } from "@/types";

export const AuthDisplay = ({
  user,
  creationTime,
}: {
  user: IUsers;
  creationTime: number;
}) => {
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
        <div className="font-bold text-sm">
          {user?.full_name ? user?.full_name : "Anonynous"}
        </div>{" "}
        |
        <div className="text-muted-foreground text-sm">
          {formatDate(creationTime)}
        </div>
      </div>
    </div>
  );
};
