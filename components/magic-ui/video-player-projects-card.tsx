/* eslint-disable @next/next/no-img-element */
"use client";

import {useEffect, useState} from "react";
import {Play, XIcon} from "lucide-react";
import {AnimatePresence, motion} from "motion/react";
import {cn} from "@/lib/utils";
import { Portal } from "./portal";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface VideoDialogForProjectCardProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
  playButtonHidden: boolean;
}

const animationVariants = {
  "from-bottom": {
    initial: {y: "100%", opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: "100%", opacity: 0},
  },
  "from-center": {
    initial: {scale: 0.6, opacity: 0},
    animate: {scale: 1, opacity: 1},
    exit: {scale: 0.6, opacity: 0},
  },
  "from-top": {
    initial: {y: "-100%", opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: "-100%", opacity: 0},
  },
  "from-left": {
    initial: {x: "-100%", opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: "-100%", opacity: 0},
  },
  "from-right": {
    initial: {x: "100%", opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: "100%", opacity: 0},
  },
  fade: {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
  },
  "top-in-bottom-out": {
    initial: {y: "-100%", opacity: 0},
    animate: {y: 0, opacity: 1},
    exit: {y: "100%", opacity: 0},
  },
  "left-in-right-out": {
    initial: {x: "-100%", opacity: 0},
    animate: {x: 0, opacity: 1},
    exit: {x: "100%", opacity: 0},
  },
};

export function VideoDialogForProjectCard({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
  playButtonHidden,
}: VideoDialogForProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const animation = animationVariants[animationStyle];

  // 🔒 Lock body scroll
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ⎋ Escape to close
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

    function getEmbedUrl(url: string): string {
  try {
    const parsed = new URL(url);

    // --- YouTube ---
    if (
      parsed.hostname.includes("youtube.com") &&
      parsed.searchParams.get("v")
    ) {
      const videoId = parsed.searchParams.get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }

    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.slice(1);
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // --- Vimeo ---
    if (parsed.hostname.includes("vimeo.com")) {
      const videoId = parsed.pathname.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }

    // --- Already embed-safe or unknown platform ---
    return url;
  } catch {
    return url; // fallback (invalid URL etc.)
  }
}

  return (
    <div className={cn("relative", className)}>
      {/* Thumbnail */}
      <button
        type="button"
        aria-label="Play video"
        className="group relative border-0 bg-transparent p-0"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full rounded-xl rounded-b-none transition-all duration-200 group-hover:brightness-[0.8]"
        />

        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300",
            playButtonHidden && "hidden group-hover:flex"
          )}
        >
          <div className="bg-primary/10 flex size-24 items-center justify-center rounded-full backdrop-blur-md">
            <Play className="size-8 text-white" />
          </div>
        </div>
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <Portal>
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-md"
            >
              <motion.div
                {...animation}
                transition={{type: "spring", damping: 30, stiffness: 300}}
                onClick={(e) => e.stopPropagation()}
                className="relative mx-4 aspect-video w-full max-w-4xl"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute -top-14 right-0 rounded-full bg-black/60 p-2 text-white"
                >
                  <XIcon className="size-5" />
                </button>

                <div className="size-full overflow-hidden rounded-2xl border">
                  <iframe
                    src={getEmbedUrl(videoSrc)}
                    title="Project video"
                    className="size-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </div>
  );
}
