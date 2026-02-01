"use client";

import {NodeViewWrapper, NodeViewProps} from "@tiptap/react";
import Image from "next/image";
import {useRef} from "react";

export const ResizableImageView = ({
  node,
  updateAttributes,
  selected,
}: NodeViewProps) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const startResize = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const startX = e.clientX;
    const startWidth = imgRef.current?.offsetWidth || 0;

    const onMouseMove = (event: MouseEvent) => {
      if (!imgRef.current) return;

      const delta = event.clientX - startX;
      const newWidth = startWidth + delta;

      updateAttributes({
        width: `${Math.max(100, newWidth)}px`,
      });
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <NodeViewWrapper className="flex justify-center">
      <div className="relative inline-block">
        <Image
          alt="image"
          ref={imgRef}
          src={node.attrs.src}
          style={{width: node.attrs.width}}
          className="rounded-lg max-w-full w-full justify-self-center text-center"
          draggable={false}
          width={400}
          height={400}
        />

        {selected && (
          <div
            className="absolute right-0 top-1/2 h-3 w-3 cursor-ew-resize rounded-full bg-primary"
            onMouseDown={startResize}
          />
        )}
      </div>
    </NodeViewWrapper>
  );
};
