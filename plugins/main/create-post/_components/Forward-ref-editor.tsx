"use client";

import { MDXEditorMethods, MDXEditorProps } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import { forwardRef } from "react";

const Editor = dynamic(() => import("./mdx-editor"), {
  ssr: false,
});

export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => (
    <div className="min-w-full">
      <Editor {...props} editorRef={ref} />
    </div>
  )
);

ForwardRefEditor.displayName = "ForwardRefEditor";
