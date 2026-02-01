"use client";

import {updateProjectNoteById} from "@/app/actions/contents";
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
import {useState} from "react";
import {Input} from "../ui/input";
import {toast} from "sonner";
import {TechStackItem} from "@/types/project";

export default function MeWritingProjectNote({
  previousContent,
  id,
  defaultTitleValue,
  defaultDescriptionValue,
  defaultSlugValue,
  defaultSourceCodeLinkValue,
  defaultWebsiteLinkValue,
  defaultTechStackValue,
  defaultThumbnailValue,
  defaultVideoLinkValue,
}: {
  previousContent: JSONContent | null;
  id: string;
  defaultTitleValue: string | null;
  defaultDescriptionValue: string | null;
  defaultSlugValue: string | null;
  defaultSourceCodeLinkValue: string | null;
  defaultWebsiteLinkValue: string | null;
  defaultTechStackValue: TechStackItem[] | null;
  defaultThumbnailValue: string | null;
  defaultVideoLinkValue: string | null;
}) {
  const [content, setContent] = useState<JSONContent>({
    type: "doc",
  });

  const [slug, setSlug] = useState<string>(defaultSlugValue ?? "");

  const [title, setTitle] = useState<string>(defaultTitleValue ?? "");
  const [description, setDescription] = useState<string>(defaultDescriptionValue ?? "");

  const [sourceCodeLink, setSourceCodeLink] = useState<string>(defaultSourceCodeLinkValue ?? "");

  const [websiteLink, setWebsiteLink] = useState<string>(defaultWebsiteLinkValue ?? "");

  const [techStack, setTechStack] = useState<TechStackItem[]>(defaultTechStackValue ?? []);

  const [thumbnailImage, setThumbnailImage] = useState<string>(defaultThumbnailValue ?? "");

  const [videoLink, setVideoLink] = useState<string>(defaultVideoLinkValue ?? "");

  const handleUpdate = async ({editor}: {editor: Editor}) => {
    const json = editor.getJSON();

    setContent(json);
    console.log(JSON.stringify(json));
    console.log("json is : ", json);
  };

  const addTechStackItem = () => {
    setTechStack((prev) => [...prev, {name: "", image: ""}]);
  };

  const updateTechStackItem = (
    index: number,
    key: "name" | "image",
    value: string,
  ) => {
    setTechStack((prev) =>
      prev.map((item, i) => (i === index ? {...item, [key]: value} : item)),
    );
  };

  const removeTechStackItem = (index: number) => {
    setTechStack((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSave = async () => {
    const safeContent = JSON.parse(JSON.stringify(content));
    console.log("safecontent is :", safeContent);
    setContent(safeContent);
    await updateProjectNoteById(
      id,
      safeContent,
      slug,
      title,
      description,
      sourceCodeLink,
      websiteLink,
      techStack,
      thumbnailImage,
      videoLink,
    );
    console.log("saved to db");
    toast.success("Project Note saved successfully");
  };
  return (
    <>
      <div className="space-y-2">
        <p className="text-sm font-medium">Tech Stack</p>

        {techStack.map((tech, index) => (
          <div key={index} className="flex gap-2">
            <Input
              placeholder="Tech name (e.g. Next.js)"
              value={tech.name}
              onChange={(e) =>
                updateTechStackItem(index, "name", e.target.value)
              }
            />

            <Input
              placeholder="Image link"
              value={tech.image}
              onChange={(e) =>
                updateTechStackItem(index, "image", e.target.value)
              }
            />

            <Button variant="ghost" onClick={() => removeTechStackItem(index)}>
              ✕
            </Button>
          </div>
        ))}

        <Button variant="outline" size="sm" onClick={addTechStackItem}>
          + Add Tech
        </Button>
      </div>

      <Input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        placeholder="Source Code Link"
        value={sourceCodeLink}
        onChange={(e) => setSourceCodeLink(e.target.value)}
      />
      <Input
        placeholder="Website Link"
        value={websiteLink}
        onChange={(e) => setWebsiteLink(e.target.value)}
      />

      <Input
        placeholder="Thumbnail Image"
        value={thumbnailImage}
        onChange={(e) => setThumbnailImage(e.target.value)}
      />
      <Input
        placeholder="Video Link"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
      />
      <Input
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
      />
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
