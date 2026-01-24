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

const stack = [
  {
    name: "Next.js",
    image: "https://ik.imagekit.io/mrityunjay/logo-291886093470.jpeg",
    link: "https://nextjs.org/",
  },
  {
    name: "ReactJs",
    image: "https://ik.imagekit.io/mrityunjay/images.png",
    link: "https://react.dev/",
  },
  {
    name: "Typescript",
    image: "https://ik.imagekit.io/mrityunjay/Typescript.svg.png",
    link: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "NodeJs",
    image: "https://ik.imagekit.io/mrityunjay/images%20(2).png",
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "Express.js",
    image: "https://ik.imagekit.io/mrityunjay/express-js.jpg",
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
      "https://ik.imagekit.io/mrityunjay/OT-integrations-logo-postgre-sql.png",
    link: "https://www.postgresql.org/docs/",
  },
  {
    name: "MongoDB",
    image: "https://ik.imagekit.io/mrityunjay/images%20(1).png",
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "TailwindCSS",
    image: "https://ik.imagekit.io/mrityunjay/images%20(3).png",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Motion",
    image:
      "https://ik.imagekit.io/mrityunjay/2a38d0a3-269e-45b1-bd76-d95cdc971579.png",
    link: "https://motion.dev/docs/react",
  },
  {
    name: "Docker",
    image:
      "https://ik.imagekit.io/mrityunjay/images%20(5).png",
    link: "https://www.docker.com/",
  },
  {
    name: "Auth.js",
    image:
      "https://ik.imagekit.io/mrityunjay/67470890.png",
    link: "https://authjs.dev/",
  },
  {
    name: "Prisma",
    image:
      "https://ik.imagekit.io/mrityunjay/images%20(4).png",
    link: "https://www.prisma.io/docs",
  },
  {
    name: "QdrantDB",
    image: "https://ik.imagekit.io/mrityunjay/qdrant-brandmark-red.png",
    link: "https://qdrant.tech/documentation/",
  },
  {
    name: "LangChain",
    image: "https://ik.imagekit.io/mrityunjay/1_7Zx5IHNiz3U7GZ64wEuESg.png",
    link: "https://python.langchain.com/docs/",
  },
  {
    name: "Vercel AI SDK",
    image: "https://ik.imagekit.io/mrityunjay/Vercel-e1652981744227.jpg",
    link: "https://sdk.vercel.ai/docs",
  },
];

export default function TechStack() {
    const INITIAL_COUNT = 16;
    const [expanded, setExpanded] = useState(false);
    const visibleStack = expanded ? stack : stack.slice(0, INITIAL_COUNT);
  return (
    <div className="md:w-2xl w-full flex flex-col items-start justify-start mt-2 gap-2 md:pr-[50px]">
      <div className="w-full flex items-center justify-between">
        {/* <motion.h2
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
        className={cn(
          `${marker.className} text-2xl text-neutral-500 border-b-4 border-orange-100`,
        )}
      >
        my tech stack.
      </motion.h2> */}
      <SectionTitle title="my tech stack." />
      {/* <div className="text-sm text-neutral-500 flex gap-1 items-center cursor-pointer">more<ChevronDownIcon size={12} /></div> */}
      <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
          onClick={() => setExpanded((v) => !v)}
          className={cn(`text-xs text-neutral-400 flex gap-0.5 items-center cursor-pointer hover:text-neutral-700 transition ${sans.className}`)}
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
          `flex flex-wrap gap-3.5 text-neutral-500 ${sans.className}`,
        )}
      >
        {visibleStack.map((item, index) => (
          <Link key={index} href={item.link} target="_blank">
            <div className="border border-dashed border-neutral-300 rounded-md px-1.5 py-[5px] flex items-center gap-1 text-sm shadow-[inset_0_2px_6px_rgba(0,0,0,0.15)] font-medium hover:scale-102 transition-all duration-500 hover:cursor-pointer">
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
