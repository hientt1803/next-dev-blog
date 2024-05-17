import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const HotPost = () => {
  return (
    <Link href={"/posts/abcef"} className="w-full mb-3">
      <Card className="shadow-sm border-0 z-10 p-0">
        <CardContent className="p-0">
          <div className="flex gap-3">
            <Image
              src="https://images.unsplash.com/photo-1583909553512-6fe1e33a1adf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNvbGxlY3Rpb24lMjBzdG9yaWVzfGVufDB8MHwwfHx8Mg%3D%3D"
              alt="image"
              width={100}
              height={100}
              className="object-cover"
              style={{ height: "100px" }}
            />
            <div className="flex flex-col gap-2">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Title here
              </h3>
              <p className="italic">
                {"After all,"} he said, {"everyone"} enjoys a good
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
