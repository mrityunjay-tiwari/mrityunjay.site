"use client"

import {cn} from "@/lib/utils";
import {Fraunces, Inter} from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "../hover-icons/down";
import { useState } from "react";
import { Button } from "../ui/button";
import {motion} from "motion/react";
import SectionTitle from "./sectionTitle";
import { sans } from "@/lib/fonts";

const stack = [
  {
    name: "Next.js",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/nextjs.jpeg?updatedAt=1769859276503",
    link: "https://nextjs.org/",
  },
  {
    name: "ReactJs",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/react2.png",
    link: "https://react.dev/",
  },
  {
    name: "Typescript",
    image: "https://ik.imagekit.io/mrityunjay/Typescript.svg.png",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "NodeJs",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/nodejs.png",
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "Express.js",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/express-js.jpg?updatedAt=1769916138327",
    link: "https://expressjs.com/",
  },
  {
    name: "Python",
    image: "https://ik.imagekit.io/mrityunjay/Python-logo-notext.svg.png",
    link: "https://docs.python.org/3/",
  },
  {
    name: "PostgresSQL",
    image:
      "https://ik.imagekit.io/mrityunjay/TechStack/postgreSQL.png?updatedAt=1769683921093",
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "Prisma",
    image:
      "https://ik.imagekit.io/mrityunjay/TechStack/prisma-square.png",
    link: "https://www.prisma.io/docs",
  },
  {
    name: "MongoDB",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/mongodb.png?updatedAt=1769684316245",
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "Postman",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/postman.png",
    link: "https://sdk.vercel.ai/docs",
  },
  {
    name: "Auth.js",
    image:
      "https://ik.imagekit.io/mrityunjay/TechStack/auth.js.png",
    link: "https://authjs.dev/",
  },
  {
    name: "Docker",
    image:
      "https://ik.imagekit.io/mrityunjay/TechStack/docker.png",
    link: "https://www.docker.com/",
  },
  {
    name: "Bun",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/Bun_JS_logo.png",
    link: "https://sdk.vercel.ai/docs",
  },
  
  {
    name: "QdrantDB",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/qdrant-brandmark-red.png?updatedAt=1769683596014",
    link: "https://qdrant.tech/documentation/",
  },
  {
    name: "LangChain",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/langchain.png?updatedAt=1769859024789",
    link: "https://python.langchain.com/docs/",
  },
  {
    name: "Vercel AI SDK",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/vercel-logo.png",
    link: "https://sdk.vercel.ai/docs",
  },
  
  {
    name: "Git",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/git.png",
    link: "https://sdk.vercel.ai/docs",
  },
  {
    name: "TailwindCSS",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/tailwind.png?updatedAt=1769684239645",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Motion",
    image:
      "https://ik.imagekit.io/mrityunjay/2a38d0a3-269e-45b1-bd76-d95cdc971579.png",
    link: "https://motion.dev/docs/react",
  },
  
  {
    name: "Shadcn UI",
    image: "https://ik.imagekit.io/mrityunjay/TechStack/shadcn.png",
    link: "https://sdk.vercel.ai/docs",
  },
];

export default function TechStack() {
    const INITIAL_COUNT = 16;
    const [expanded, setExpanded] = useState(false);
    const visibleStack = expanded ? stack : stack.slice(0, INITIAL_COUNT);
  return (
    <div className="flex flex-col items-start justify-start mt-2 gap-2 md:pr-[50px]">
      <div className="w-full flex items-center justify-between">
      <SectionTitle title="my tech stack." />
      <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
          onClick={() => setExpanded((v) => !v)}
          className={cn(`text-xs text-neutral-400 flex gap-0.5 items-center cursor-pointer hover:text-neutral-700 dark:hover:text-neutral-300 transition ${sans.className}`)}
        >
          {expanded ? "less" : "more"}
          <ChevronDownIcon
            size={12}
            className={cn(
              "transition-transform duration-300",
              expanded && "rotate-180"
            )}
          />
        </motion.div>
      </div>
      <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.05}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
        className={cn(
          `flex flex-wrap gap-2.5 md:gap-3.5 text-neutral-500 dark:text-neutral-300 ${sans.className}`,
        )}
      >
        {visibleStack.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="border border-dashed border-neutral-300 dark:border-neutral-600 dark:bg-neutral-900 rounded-md px-1.5 md:px-1.5 py-[4px] md:py-[5px] flex items-center gap-1 text-[12.5px] md:text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] font-medium hover:scale-102 transition-all duration-500 hover:cursor-pointer">
              <Image
                src={item.image}
                alt=""
                width={18}
                height={18}
                className="rounded"
              />{" "}
              
              {item.name}
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
