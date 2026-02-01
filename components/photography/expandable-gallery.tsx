"use client";

import {motion, AnimatePresence, LayoutGroup} from "motion/react";
import React, {useState, useId, useRef} from "react";
// import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {ArrowLeft, ArrowRight, Info} from "lucide-react";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import { sans } from "@/lib/fonts";

// Change Here
const PHOTOS = [
  {
    id: "photo-1",

    src: "https://ik.imagekit.io/mrityunjay/Images/Kashi%20Boat%202.JPG?updatedAt=1769247483570",
    alt: "she.",
    rotation: -15,
    x: -90,
    y: 10,
    zIndex: 10,
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: "photo-2",
    src: "https://ik.imagekit.io/mrityunjay/Images/PrayagRaj%20Mahakumbh.jpg?updatedAt=1769247659197",
    alt: "prayagraj.",
    rotation: -3,
    x: -10,
    y: -15,
    zIndex: 20,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "photo-3",
    src: "https://ik.imagekit.io/mrityunjay/Images/Kashi%20-%20Assi%20Ghat%20Aarti.png",
    alt: "pray.",
    rotation: 12,
    x: 75,
    y: 5,
    zIndex: 30,
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "photo-4",
    src: "https://ik.imagekit.io/mrityunjay/Images/I%20live%20here.jpg?updatedAt=1769247522504",
    alt: "to live here.",
    colSpan: "col-span-3",
    rowSpan: "row-span-2",
  },
  {
    id: "photo-5",
    src: "https://ik.imagekit.io/mrityunjay/Images/Streets%20Of%20Kashi%20-%20People%201.JPG?updatedAt=1769247518413",
    alt: "flow.",
  },
  {
    id: "photo-6",
    src: "https://ik.imagekit.io/mrityunjay/Images/It%20belongs%20to%20them%201.JPG?updatedAt=1769247503542",
    alt: "wait.",
  },
  {
    id: "photo-8",
    src: "https://ik.imagekit.io/mrityunjay/Images/Kedarkantha%20-%20Juda%20Ka%20Taal.jpg?updatedAt=1769247487441",
    alt: "juda ka taal.",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },
  {
    id: "photo-7",
    src: "https://ik.imagekit.io/mrityunjay/Images/Streets%20Of%20Kashi%20-%20People%206.JPG?updatedAt=1769247499334",
    alt: "happy.",
  },
  {
    id: "photo-13",
    src: "https://ik.imagekit.io/mrityunjay/Images/It%20is%20love.jpg?updatedAt=1769247461485",
    alt: "love.",
  },
  {
    id: "photo-10",
    src: "https://ik.imagekit.io/mrityunjay/Images/see%20out%20of%20the%20window.JPG?updatedAt=1769247474282",
    alt: "see out of window.",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "photo-11",
    src: "https://ik.imagekit.io/mrityunjay/Images/Kedarkantha%20_%20Unihabited.JPG?updatedAt=1769247471524",
    alt: "serene.",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },

  {
    id: "photo-23",
    src: "https://ik.imagekit.io/mrityunjay/Images/Rajasthan%20Aesthetic%204.jpg?updatedAt=1769247658987",
    alt: "golden hues.",
  },
  {
    id: "photo-15",
    src: "https://ik.imagekit.io/mrityunjay/Images/Rajasthan%20Aesthetic%207.jpg?updatedAt=1769247453206",
    alt: "they rule.",
  },
  {
    id: "photo-16",
    src: "https://ik.imagekit.io/mrityunjay/Images/Between%20the%20woods%20-%20they%20had%20a%20villa.jpg?updatedAt=1769247450665",
    alt: "villa.",
  },

  {
    id: "photo-17",
    src: "https://ik.imagekit.io/mrityunjay/Images/Rajasthan%20Aesthetic%2011.jpg?updatedAt=1769247452142",
    alt: "light.",
  },
  {
    id: "photo-12",
    src: "https://ik.imagekit.io/mrityunjay/Images/Kedarkantha%201.JPG?updatedAt=1769247467253",
    alt: "shiv kailash.",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "photo-18",
    src: "https://ik.imagekit.io/mrityunjay/Images/Got%20a%20friend%20to%20shoot%2011.jpg?updatedAt=1769247449043",
    alt: "friend.",
    colSpan: "col-span-2",
    rowSpan: "row-span-1",
  },
  {
    id: "photo-19",
    src: "https://ik.imagekit.io/mrityunjay/Images/It%20belongs%20to%20them%204.jpg?updatedAt=1769247448445",
    alt: "it's theirs.",
  },
  {
    id: "photo-20",
    src: "https://ik.imagekit.io/mrityunjay/Images/That%20Idea.jpg?updatedAt=1769247448068",
    alt: "that idea.",
  },
  {
    id: "photo-21",
    src: "https://ik.imagekit.io/mrityunjay/Images/Minimalism%204%20-%20sky%20high.jpg?updatedAt=1769247445119",
    alt: "fly high.",
  },
  {
    id: "photo-14",
    src: "https://ik.imagekit.io/mrityunjay/Images/IIT%20BHU%20Blossoming.jpg?updatedAt=1769247458735",
    alt: "iitbhu blossoming.",
    colSpan: "col-span-3",
    rowSpan: "row-span-2",
  },
  {
    id: "photo-22",
    src: "https://ik.imagekit.io/mrityunjay/Images/Untitled%20design%20(8).png",
    alt: "my lens.",
  },
];

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export default function ExpandableGallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  //   useOutsideClick(containerRef, () => {
  //     if (isExpanded) {
  //       setIsExpanded(false);
  //     }
  //   });

  return (
    <section className="relative w-full  px-4 md:px-8 bg-background flex flex-col items-center justify-start overflow-hidden">
      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-2">
          <div className="w-full flex items-center justify-between px-4">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  initial={{opacity: 0, x: -10}}
                  animate={{opacity: 1, x: 0}}
                  exit={{opacity: 0, x: -10}}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center mt-2 justify-between w-full gap-2 text-muted-foreground hover:text-foreground transition-all group z-50"
                >
                  <div className="flex gap-1.5">
                    <div className="p-0.5 rounded-full bg-muted group-hover:bg-accent transition-colors ">
                      <ArrowLeft className="w-3 h-3" />
                    </div>
                    <span className="text-xs">Back</span>
                  </div>
                  <div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-3 h-3" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Gears used : </p>
                        <p>- Camera : Nikon D3300 | 50 / 200 mm,</p>
                        <p>- Phone : Google Pixel 6, Redmi 10</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] gap-3 px-4 mb-4"
                : "flex flex-col items-center justify-start pt-0 md:pt-4",
            )}
            transition={transition}
          >
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[350px] w-full flex items-center justify-center mb-0 md:mb-5",
              )}
            >
              {PHOTOS.map((photo, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${photo.id}`}
                    layoutId={`card-container-${photo.id}`}
                    layout
                    initial={{opacity: 0, scale: 0.9}}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? photo.rotation || 0 : 0,
                      x: !isExpanded ? photo.x || 0 : 0,
                      y: !isExpanded ? photo.y || 0 : 0,
                      zIndex: !isExpanded ? photo.zIndex || index : 10,
                    }}
                    onMouseEnter={() => isExpanded && setHoveredIndex(index)}
                    onMouseLeave={() => isExpanded && setHoveredIndex(null)}
                    transition={transition}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (photo.y || 0) - 15,
                            rotate: (photo.rotation || 0) * 0.8,
                            zIndex: 50,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            },
                          }
                        : {scale: 1.02}
                    }
                    className={cn(
                      "cursor-pointer overflow-hidden bg-muted",
                      isExpanded
                        ? cn(
                            "relative rounded-xl overflow-hidden border border-background shadow-sm",
                            photo.colSpan,
                            photo.rowSpan,
                            hoveredIndex !== null &&
                              hoveredIndex !== index &&
                              "blur-xs scale-[0.99] transition-all duration-300",
                          )
                        : "absolute w-36 h-36 md:w-60 md:h-60 rounded-xl dark:border-0 border-2 border-background shadow-[0_2px_4px_rgba(0,0,0,0.25)]",
                    )}
                    onClick={() => !isExpanded && setIsExpanded(true)}
                  >
                    <motion.div
                      layoutId={`image-inner-${photo.id}`}
                      layout="position"
                      className="w-full h-full relative"
                      transition={transition}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className=" object-cover aspect-square select-none pointer-events-none"
                        sizes={
                          isExpanded
                            ? "(max-width: 1024px) 50vw, 33vw"
                            : "240px"
                        }
                        priority={isPrimary}
                      />
                      <div
                        className={cn(
                          "absolute inset-0 flex items-end py-2 px-2  transition-opacity duration-300",
                          hoveredIndex === index ? "opacity-100" : "opacity-0",
                        )}
                      >
                        <div className={(`text-xs md:text-xs font-medium bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-200 ${sans.className}`)}>
                          {photo.alt}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{opacity: 1}}
                  exit={{opacity: 0}}
                  className="text-center max-w-2xl"
                >
                  <div className="flex justify-center">
                    <Button
                      variant="link"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-lg cursor-pointer px-8 border-border/40 font-normal group "
                    >
                      See All
                      <ArrowRight
                        className="transition-transform group-hover:translate-x-1"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}
