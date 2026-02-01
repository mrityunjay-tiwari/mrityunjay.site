"use client";

import { BubbleMenu } from "@tiptap/react/menus";
import { useCurrentEditor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import {
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  TypeIcon,
} from "lucide-react";

export const EditorImageBubbleMenu = () => {
  const { editor } = useCurrentEditor();

  if (!editor) return null;

  return (
    <BubbleMenu
      editor={editor}
      shouldShow={({ state }) => {
        const { selection } = state;
        return (
          selection.$from.parent.type.name === "imageWithCaption"
        );
      }}
      className="flex gap-1 rounded-xl border bg-background p-1 shadow"
    >
      {/* Align Left */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() =>
          editor
            .chain()
            .focus()
            .updateAttributes("imageWithCaption", {
              align: "left",
            })
            .run()
        }
      >
        <AlignLeftIcon size={16} />
      </Button>

      {/* Align Center */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() =>
          editor
            .chain()
            .focus()
            .updateAttributes("imageWithCaption", {
              align: "center",
            })
            .run()
        }
      >
        <AlignCenterIcon size={16} />
      </Button>

      {/* Align Right */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() =>
          editor
            .chain()
            .focus()
            .updateAttributes("imageWithCaption", {
              align: "right",
            })
            .run()
        }
      >
        <AlignRightIcon size={16} />
      </Button>

      {/* Edit Caption */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => {
          editor.commands.focus();
          editor.commands.setTextSelection(
            editor.state.selection.$from.end()
          );
        }}
      >
        <TypeIcon size={16} />
      </Button>
    </BubbleMenu>
  );
};
