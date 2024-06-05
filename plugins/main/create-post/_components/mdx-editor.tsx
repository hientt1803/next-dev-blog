"use client";

import { cn } from "@/lib/utils";
import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  codeBlockPlugin,
  codeMirrorPlugin,
  ConditionalContents,
  CreateLink,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  directivesPlugin,
  frontmatterPlugin,
  headingsPlugin,
  imagePlugin,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertTable,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  UndoRedo,
} from "@mdxeditor/editor";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import type { ForwardedRef } from "react";

async function imageUploadHandler(image: File) {
  const formData = new FormData();
  formData.append("image", image);
  const response = await fetch("/uploads/new", {
    method: "POST",
    body: formData,
  });
  const json = (await response.json()) as { url: string };
  return json.url;
}

export default function MDXEditorComponent({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  const { theme } = useTheme();

  return (
    <div className="min-w-full">
      <MDXEditor
        className={cn(theme === "dark" ? "dark-theme dark-editor" : "")}
        contentEditableClassName="prose lg:prose-xl min-w-full"
        plugins={[
          // Text format
          listsPlugin(),
          quotePlugin(),
          headingsPlugin({ allowedHeadingLevels: [1, 2, 3, 4, 5, 6] }),
          thematicBreakPlugin(),
          frontmatterPlugin(),
          // Link
          linkPlugin(),
          linkDialogPlugin({
            linkAutocompleteSuggestions: [
              "https://virtuoso.dev",
              "https://mdxeditor.dev",
            ],
          }),
          // Table
          tablePlugin(),
          // Image
          imagePlugin({ imageUploadHandler }),
          // Adimonitions
          directivesPlugin({
            directiveDescriptors: [AdmonitionDirectiveDescriptor],
          }),
          // Driff source
          diffSourcePlugin({ viewMode: "rich-text", diffMarkdown: "boo" }),
          //shorcut
          markdownShortcutPlugin(),
          // Code block
          codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
          codeMirrorPlugin({
            codeBlockLanguages: {
              js: "JavaScript",
              css: "CSS",
              txt: "Plain Text",
              tsx: "TypeScript",
              "": "Unspecified",
            },
          }),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <DiffSourceToggleWrapper>
                  <UndoRedo />
                  <Separator />
                  <BoldItalicUnderlineToggles />
                  <InsertFrontmatter />
                  <Separator />
                  <ListsToggle />
                  <BlockTypeSelect />
                  <Separator />
                  <InsertImage />
                  <CreateLink />
                  <InsertTable />

                  {/* Code block */}
                  <ConditionalContents
                    options={[
                      {
                        when: (editor) => editor?.editorType === "codeblock",
                        contents: () => <ChangeCodeMirrorLanguage />,
                      },
                      {
                        fallback: () => (
                          <>
                            <InsertCodeBlock />
                          </>
                        ),
                      },
                    ]}
                  />
                </DiffSourceToggleWrapper>
              </>
            ),
          }),
        ]}
        {...props}
        ref={editorRef}
      />
    </div>
  );
}
