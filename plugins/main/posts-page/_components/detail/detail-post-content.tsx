"use client";

import { useEffect, useState } from "react";
import { remark } from "remark";
import html from "remark-html";

export const ShowDetailPostContent = ({ markdown }: { markdown: string }) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    if (markdown) {
      remark()
        .use(html)
        .process(markdown)
        .then((file: any) => {
          setHtmlContent(String(file));
        });
    }
  }, [markdown]);

  return (
    <>
      <div>
        <div
          className="prose min-w-full dark:dark-blog-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </>
  );
};
