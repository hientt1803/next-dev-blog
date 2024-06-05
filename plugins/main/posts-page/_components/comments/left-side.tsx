import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { BellIcon, CheckIcon, HeartIcon } from "lucide-react";

export const LeftSide = () => {
  return (
    <Card className={cn("w-[380px] border-0 shadow-md rounded-none lg:sticky lg:top-14")}>
      <CardHeader>
        <CardTitle className="text-3xl">Article Review</CardTitle>
        {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-3">
          <BellIcon />
          <div className="flex-1 space-y-1">
            <span className="text-sm font-medium leading-none">
              Base on 3466 review
            </span>
          </div>
        </div>
        <div className="mt-4 border rounded-lg p-3 space-x-2">
          <div className="flex justify-start items-center gap-2">
            <HeartIcon /> <Progress value={33} /> 5%
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 items-start">
        <div>
          <div className="text-xl font-semibold">Share your thoughts</div>
          <div className="text-lg">
            If {"you’ve"} used this product, share your thoughts with other
            customers
          </div>
        </div>
        <Button className="w-full">
          <CheckIcon className="mr-2 h-4 w-4" /> Write a review
        </Button>
      </CardFooter>
    </Card>
  );
};
