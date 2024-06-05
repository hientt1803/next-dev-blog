import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CommentItem = () => {
  return ( 
    <div className="flex flex-col flex-wrap gap-4 p-3">
      <div className="flex justify-start items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <div className="font-bold text-lg">Author name</div>
          <div className="text-muted-foreground text-sm">Sat, 1/06/2024</div>
        </div>
      </div>
      <p className="leading-7 line-clamp-3">DESCRIPTION</p>
      <hr />
    </div>
  );
};
