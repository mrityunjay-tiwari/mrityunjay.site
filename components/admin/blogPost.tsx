"use client";

import {updateBlogPostById, updateProjectNoteById} from "@/app/actions/contents";
// It is the main file

import {
  EditorBubbleMenu,
  EditorCharacterCount,
  EditorClearFormatting,
  EditorFloatingMenu,
  EditorFormatBold,
  EditorFormatCode,
  EditorFormatItalic,
  EditorFormatStrike,
  EditorFormatSubscript,
  EditorFormatSuperscript,
  EditorFormatUnderline,
  EditorLinkSelector,
  EditorNodeBulletList,
  EditorNodeCode,
  EditorNodeHeading1,
  EditorNodeHeading2,
  EditorNodeHeading3,
  EditorNodeOrderedList,
  EditorNodeQuote,
  EditorNodeTable,
  EditorNodeTaskList,
  EditorNodeText,
  EditorProvider,
  EditorSelector,
  EditorTableColumnAfter,
  EditorTableColumnBefore,
  EditorTableColumnDelete,
  EditorTableColumnMenu,
  EditorTableDelete,
  EditorTableFix,
  EditorTableGlobalMenu,
  EditorTableHeaderColumnToggle,
  EditorTableHeaderRowToggle,
  EditorTableMenu,
  EditorTableMergeCells,
  EditorTableRowAfter,
  EditorTableRowBefore,
  EditorTableRowDelete,
  EditorTableRowMenu,
  EditorTableSplitCell,
} from "@/components/kibo-ui/editor";

import type {Editor, JSONContent} from "@/components/kibo-ui/editor";
import {Button} from "@/components/ui/button";
import {useRef, useState} from "react";
import {Input} from "../ui/input";
import {BlogType} from "@/lib/generated/prisma/enums";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MeWritingBlogPost({
  previousContent,
  id,
  defaultTitle,
  defaultSlug,
  defaultLink,
  defaultImage,
  defaultDescription,
  defaultWebsiteOn,
}: {
  previousContent: JSONContent | null;
  id: string;
  defaultTitle: string;
  defaultSlug: string;
  defaultLink: string;
  defaultImage: string;
  defaultDescription: string;
  defaultWebsiteOn: string;
}) {
  const [content, setContent] = useState<JSONContent>({
    type: "doc",
  });

  const [title, setTitle] = useState<string>(defaultTitle ?? "");
  const [slug, setSlug] = useState<string>(defaultSlug ?? "");
  const [link, setLink] = useState<string>(defaultLink ?? "");
  const [type, setType] = useState<BlogType>(BlogType.TECH);
  const [image, setImage] = useState<string>(defaultImage ?? "");
  const [description, setDescription] = useState<string>(defaultDescription ?? "");
  const [websiteOn, setWebsiteOn] = useState<string>(defaultWebsiteOn ?? "");

  const editorRef = useRef<Editor | null>(null);
  const handleUpdate = async ({editor}: {editor: Editor}) => {
    editorRef.current = editor;
    const json = editor.getJSON();

    setContent(json);
    console.log(JSON.stringify(json));
    console.log("json is : ", json);
  };

  const handleSave = async () => {
    if (!editorRef.current) return;
    const safeContent = JSON.parse(JSON.stringify(content));
    const wordCount = editorRef.current.storage.characterCount.words();
    setContent(safeContent);
    await updateBlogPostById(id, safeContent, title, slug, link, type, image, description, websiteOn, wordCount);
  };
  return (
    <>
      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
      <Input
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="websiteOn"
        value={websiteOn}
        onChange={(e) => setWebsiteOn(e.target.value)}
      />

      <Select
        value={type}
        onValueChange={(value) => setType(value as BlogType)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select blog type" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value={BlogType.TECH}>Tech</SelectItem>
          <SelectItem value={BlogType.THOUGHTS}>Thoughts</SelectItem>
        </SelectContent>
      </Select>

      <EditorProvider
        className="h-full w-full overflow-y-auto rounded-none bg-background dark:bg-inherit py-4"
        content={previousContent}
        onUpdate={handleUpdate}
        placeholder="Write or press 'space and /' for commands"
      >
        <EditorFloatingMenu className="mt-14">
          <EditorNodeHeading1 hideName />
          <EditorNodeBulletList hideName />
          <EditorNodeQuote hideName />
          <EditorNodeCode hideName />
          <EditorNodeTable hideName />
        </EditorFloatingMenu>
        <EditorBubbleMenu>
          <EditorSelector title="Text">
            <EditorNodeText />
            <EditorNodeHeading1 />
            <EditorNodeHeading2 />
            <EditorNodeHeading3 />
            <EditorNodeBulletList />
            <EditorNodeOrderedList />
            <EditorNodeTaskList />
            <EditorNodeQuote />
            <EditorNodeCode />
          </EditorSelector>
          <EditorSelector title="Format">
            <EditorFormatBold />
            <EditorFormatItalic />
            <EditorFormatUnderline />
            <EditorFormatStrike />
            <EditorFormatCode />
            <EditorFormatSuperscript />
            <EditorFormatSubscript />
          </EditorSelector>
          <EditorLinkSelector />
          <EditorClearFormatting />
        </EditorBubbleMenu>
        <EditorTableMenu>
          <EditorTableColumnMenu>
            <EditorTableColumnBefore />
            <EditorTableColumnAfter />
            <EditorTableColumnDelete />
          </EditorTableColumnMenu>
          <EditorTableRowMenu>
            <EditorTableRowBefore />
            <EditorTableRowAfter />
            <EditorTableRowDelete />
          </EditorTableRowMenu>
          <EditorTableGlobalMenu>
            <EditorTableHeaderColumnToggle />
            <EditorTableHeaderRowToggle />
            <EditorTableDelete />
            <EditorTableMergeCells />
            <EditorTableSplitCell />
            <EditorTableFix />
          </EditorTableGlobalMenu>
        </EditorTableMenu>
        <Button onClick={() => handleSave()}>Save</Button>
        <EditorCharacterCount.Words>Words: </EditorCharacterCount.Words>
      </EditorProvider>
    </>
  );
}
