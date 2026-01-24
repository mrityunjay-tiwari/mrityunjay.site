"use client"

import { marker, sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {motion} from "motion/react";

interface SectionTitleProps {
    subtitle?: string;
    title: string;
}

export default function SectionTitle({subtitle, title} : SectionTitleProps) {
    return (
        <motion.div
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      >
        <h2 className={cn(`${sans.className} text-sm text-neutral-400`)}>
          {subtitle}
        </h2>

        <h2
          className={cn(
            `${marker.className} text-2xl text-neutral-500 border-b-4 border-orange-100`,
          )}
        >
          {title}
        </h2>
      </motion.div>
    )
}