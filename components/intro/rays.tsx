"use client";
import { sans } from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {motion} from "motion/react";

export default function Rays() {
  return (
    <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      className={cn(
        `${sans.className} mb-2 -mt-8 flex justify-self-center text-neutral-500 dark:text-neutral-300 md:text-lg leading-8 md:hidden`,
      )}
    >
    -` ´-
    </motion.div>
  );
}
