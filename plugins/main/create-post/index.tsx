"use client";

import { MDXEditorMethods } from "@mdxeditor/editor";
import React, { Suspense, useEffect, useState } from "react";
import { ForwardRefEditor } from "./_components/Forward-ref-editor";
import { TopControl } from "./_components/top-control";
import { Id } from "@/convex/_generated/dataModel";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { cn, formatDate } from "@/lib/utils";

const admonitionMarkdown = `
  > WRITE YOUR OWN STORY HERE!
`;

export const CreatePostPageIndex = () => {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  const ref = React.useRef<MDXEditorMethods>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  const ResetMarkDown = (): void => {
    ref.current?.setMarkdown("> WRITE YOUR OWN STORY HERE!");
  };

  const saveArticle = async (
    value: string,
    message: string,
    tagId?: Id<"tags">
  ) => {
    if (message !== "") {
      alert("Please provide title for this article");
      return;
    }

    if (tagId === undefined) {
      alert("Please provide tag for this article");
      return;
    }

    // const data = {
    //   title: value,
    //   desc: String(ref.current?.getMarkdown()),
    //   tagId,
    // };
    // await fetch("http://localhost:3000/api/posts", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // });
 
    toast({
      title: "Success: article have been posted successfully",
      description: formatDate(Number(new Date())),
      action: <ToastAction altText="Try again">Close toast</ToastAction>,
    });
  };

  return (
    <div className="w-full h-auto mt-[50px]">
      <h1 className="scroll-m-20 text-5xl max-w-5xl font-mono text-center mx-auto tracking-tight my-16">
        Set your article title and
        <b className="dark:text-neutral-100"> start sharing your story.</b>
      </h1>

      {/* <TextEditor /> */}
      <TopControl ResetMarkDown={ResetMarkDown} saveArticle={saveArticle} />

      {/* Show mardown editor */}
      <Suspense fallback={"Loading"}>
        <ForwardRefEditor ref={ref} markdown={admonitionMarkdown} />
      </Suspense>
    </div>
  );
};
