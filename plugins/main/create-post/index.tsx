"use client";

import { MDXEditorMethods } from "@mdxeditor/editor";
import React, { Suspense, useEffect, useState } from "react";
import { ForwardRefEditor } from "./_components/Forward-ref-editor";
import { TopControl } from "./_components/top-control";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const admonitionMarkdown = `
  > WRITE YOUR OWN STORY HERE!
`;

export const CreatePostPageIndex = () => {
  const createPost = useMutation(api.posts.createPosts);

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
    catId?: Id<"categories">,
    tagId?: Id<"tags">
  ) => {
    if (message !== "") {
      alert(message);
      return;
    }

    try {
      await createPost({
        title: value,
        excerpt: value,
        desc: String(ref.current?.getMarkdown()),
      });

      alert("create completed");
    } catch (error) {
      alert("create fail");
    }
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
