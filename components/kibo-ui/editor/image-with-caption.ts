import { Node, mergeAttributes } from "@tiptap/core";

export const ImageWithCaption = Node.create({
  name: "imageWithCaption",

  group: "block",
  draggable: true,
  selectable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "figure[data-type='image-with-caption']",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "figure",
      mergeAttributes(HTMLAttributes, {
        "data-type": "image-with-caption",
        class: "my-6 flex flex-col items-center",
      }),
      [
        "img",
        {
          src: HTMLAttributes.src,
          alt: HTMLAttributes.alt,
          class: "rounded-lg max-w-full",
        },
      ],
      [
        "figcaption",
        {
          class:
            "mt-2 text-sm text-muted-foreground text-center outline-none",
          contenteditable: "true",
          "data-placeholder": "Add a caption…",
        },
        0,
      ],
    ];
  },
});
