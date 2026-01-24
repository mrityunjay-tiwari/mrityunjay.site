"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";
import PeoplePageDisplaySection from "./peoplePageDisplaySection";

export default function PeoplePage() {
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // material-like easing
      }}
      className="md:max-w-2xl w-full flex flex-col items-center justify-center my-32"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-4xl font-medium text-neutral-500 dark:text-neutral-100  border-b-4 border-orange-100`,
          )}
        >
          -`people.´- 
        </h2>
        <h2
          className={cn(
            `${sans.className}  text-neutral-500 dark:text-neutral-300`,
          )}
        >
          People I admire the most.
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="w-full border-0.5 border-neutral-200" />
      <div className="w-full flex flex-col items-start gap-3.5">
        <PeoplePageDisplaySection />
      </div>
    </motion.div>
  );
}
