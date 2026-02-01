"use client";
import {cn} from "@/lib/utils";
import {Fraunces, Inter} from "next/font/google";
import {Highlighter} from "../magic-ui/highlighter";
import {motion} from "motion/react";
import {GlimpseText} from "./glimpse";

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
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      className={cn(
        `${sans.className} mb-5 text-neutral-500 dark:text-neutral-300 md:text-lg leading-8`,
      )}
    >
      I build{" "}
      <GlimpseText
        text="interactive web apps"
        image="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20113154.png?updatedAt=1769234575715"
        title="My Projects"
        description="A collection of projects I've worked on."
        href="/projects"
        target="_parent"
      />{" "}
      with a focus on{" "}
      <GlimpseText text="UX" image="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20113154.png?updatedAt=1769234575715" title="What is UX?" description="In this blog I go one level deeper talking about UX, being much more than just design." href="https://vercel.com/blog/spring25-oss-program#kokonutui" target="_parent" /> , and
      contribute to open source. I love building products that solve real-world
      problems with an eye on both engineering and{" "}
      <GlimpseText
        text="product thinking."
        image="https://ik.imagekit.io/mrityunjay/product-thinking.png"
        title="My Intern as TechPM"
        description="I worked on building a gamified DeFi risk platform with USD 1Bn+ AUM expertise."
        href="#work-experience"
        target="_parent"
      />
      <div className="flex flex-col md:flex-row md:items-center gap-1">
        Currently, learning and building{" "}
     
          <GlimpseText
          text="AI Native applications."
          image="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20113154.png?updatedAt=1769234575715"
          title="Summarize"
          description="In this project of mine, I did setup a RAG pipeline to create flash cards from any pdf."
          href="https://summarize-omega.vercel.app/"
          target="_blank"
        />
        
      </div>
    </motion.div>
  );
}
