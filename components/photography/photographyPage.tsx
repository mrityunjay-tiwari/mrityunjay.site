"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import ExpandableGallery from "./expandable-gallery";

export default function PhotographyPage() {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // material-like easing
      }}
      className="md:min-w-2xl w-full flex flex-col items-center justify-center my-32"
    >
      <div className="flex max-w-[calc(100%-2.5rem)] md:max-w-2xl flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-3xl md:text-4xl font-medium text-neutral-500 dark:text-neutral-100  border-b-4 border-orange-100`,
          )}
        >
          𑣲 lens.
        </h2>
        <h2
          className={cn(
            `${sans.className} flex text-center text-neutral-500 dark:text-neutral-300`,
          )}
        >
          My lens trying to find beauty in mundane.
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="max-w-[calc(100%-2.5rem)] md:max-w-2xl w-full border-0.5 border-neutral-200 dark:border-neutral-700" />
      <div className="w-full flex flex-col items-start gap-3.5">
        
        <ExpandableGallery />
      </div>
    </motion.div>
  );
}
