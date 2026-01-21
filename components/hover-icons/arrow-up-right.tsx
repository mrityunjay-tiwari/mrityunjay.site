"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";
import { easeOut } from "motion/react";

interface ArrowUpRightIconProps extends HTMLMotionProps<"div"> {
  size?: number;
}

const ARROW_VARIANTS = {
  rest: {
    scale: 1,
    x: 0,
    y: 0,
  },
  hover: {
    scale: 0.9,
    x: 4,
    y: -4,
    transition: {
      duration: 0.25,
      ease: easeOut,
    },
  },
};


export function ArrowUpRightIcon({
  className,
  size = 28,
  ...props
}: ArrowUpRightIconProps) {
  return (
    <motion.div
      className={cn("inline-flex", className)}
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={ARROW_VARIANTS}
      {...props}
    >
      <svg
        fill="none"
        width={size}
        height={size}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M7 7H17" />
        <path d="M17 7V17" />
        <path d="M7 17L17 7" />
      </svg>
    </motion.div>
  );
}
