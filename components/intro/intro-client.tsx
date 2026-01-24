"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const sans = Inter({ subsets: ["latin"] });

export default function IntroClient({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        `${sans.className} mb-5 md:max-w-2xl w-full text-neutral-500 text-lg leading-8`
      )}
    >
      {children}
    </motion.div>
  );
}
