"use client"
import {cn} from "@/lib/utils";
import {Fraunces, Inter} from "next/font/google";
import {Highlighter} from "../magic-ui/highlighter";
import {motion} from "motion/react";
import { GlimpseText } from "./glimpse";

const marker = Fraunces({
  variable: "--font-shadow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});


const sans = Inter({
  variable: "--font-shadow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export default function Intro() {
  return (
    <motion.div
      
      className={cn(
        `${sans.className} mb-5 md:max-w-2xl w-full text-neutral-500 text-lg leading-8`,
      )}
    >
      I build <GlimpseText text="interactive web apps" /> with a focus on <GlimpseText text="UX" /> , and contribute to open
      source. I love building products that solve real-world problems with an eye on both engineering and <GlimpseText text="product thinking" />
      
        <div className="flex items-center gap-1">Currently, learning and building  <GlimpseText text="AI Native applications" /></div>
     
    </motion.div>
  );
}


