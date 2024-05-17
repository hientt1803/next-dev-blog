import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export async function PostItem() {
  return (
    <Card className="w-full mb-4 shadow-md md:shadow-sm border-0 z-10">
      <CardContent className="m-0 p-0">
        <div className="flex gap-3">
          <div className="hidden md:flex">
            <Image
              src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="image"
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              Title here
            </h3>
            <div className="flex gap-2 text-muted-foreground">
              Author - createdAt
            </div>
            <blockquote className="border-l-2 pl-6 italic">
              {"After all,"} he said, {"everyone"} enjoys a good joke, so{" "}
              {"it's"}
              only fair that they should pay for the privilege{"."}
            </blockquote>
            <div className="mt-auto flex flex-col md:flex-row justify-start items-start md:justify-between">
              <Link href="/">
                <Button variant="link" className="underline">
                  Read more...
                </Button>
              </Link>
              <Link href="/">
                <Button variant="link" className="underline">
                  views: 367
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
