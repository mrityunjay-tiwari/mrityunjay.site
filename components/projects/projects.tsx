"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {motion} from "motion/react";
import SectionTitle from "../tech-stack/sectionTitle";
import {Button} from "../ui/button";
import {useRouter} from "next/navigation";
import ProjectsCard from "./projectsCard";
import Image from "next/image";

const PROJECT_DETAILS = [
  {
    index: 1,
    title: "Your Brain",
    description: "Smart bookmark store for your web scroll.",
    optionalMessage: "(Working on it's Version 2.0)",
    sourceCode: "https://github.com/mrityunjay-tiwari/your-brain-fe",
    liveDemo: "https://yourbrain.vercel.app/",
    imagesArray: [
      {
        name: "Node.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nodejs.png?updatedAt=1769760522055",
      },
      {
        name: "MongoDB",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/mongodb.png?updatedAt=1769684316245",
      },
      {
        name: "Express.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/express-js.jpg?updatedAt=1769916138327",
      },
      {
        name: "React.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/react2.png?updatedAt=1769759925029",
      },
      {
        name: "Typescript",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/Typescript.svg.png?updatedAt=1769859234226",
      },
    ],
    slug: "your-brain",
    videoLink: "https://www.youtube.com/watch?v=2xSFMNGq_5Q",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/yourbrain.png"
  },
  {
    index: 2,

    slug: "summarize",
    videoLink: "https://www.youtube.com/watch?v=QAZbZ2S7hFw",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/summarize.vercel.com.png?updatedAt=1769864052675",
    title: "Summarize",
    description: "Generate instant flash cards from your PDF !",
    sourceCode: "https://github.com/mrityunjay-tiwari/summarize",
    liveDemo: "https://summarize-omega.vercel.app/",
    imagesArray: [
      {
        name: "Next.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nextjs.jpeg?updatedAt=1769859276503",
      },
      {
        name: "PostgreSQL",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/postgreSQL.png?updatedAt=1769683921093",
      },
      {
        name: "Auth.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/auth.js.png?updatedAt=1769758909591",
      },
      {
        name: "Prisma",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/prisma-square.png?updatedAt=1769760876751",
      },
      {
        name: "Langchain",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/langchain.png?updatedAt=1769859024789",
      },
      {
        name: "Typescript",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/Typescript.svg.png?updatedAt=1769859234226",
      },
    ],
  },
  {
    index: 3,
    slug: "medium-info-api",
    videoLink: "https://www.youtube.com/watch?v=QWyRladhs7U",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/npm%20package.png",

    title: "Medium Info API",
    description: "Easy to use npm package that scrapes all the info about any medium article.",
    sourceCode: "https://github.com/mrityunjay-tiwari/medium-info-api",
    liveDemo: "https://www.npmjs.com/package/medium-info-api",
    imagesArray: [
      {
        name: "Node.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nodejs.png?updatedAt=1769760522055",
      },
      {
        name: "Typescript",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/Typescript.svg.png?updatedAt=1769859234226",
      },
    ],
  },
  {
    index: 4,

    title: "Embed Medium UI Library",
    description: "UI library to embed medium articles in your website using npm package.",
    sourceCode: "https://github.com/mrityunjay-tiwari/embed-medium",
    liveDemo: "https://embed-medium.vercel.app/",
    imagesArray: [
      {
        name: "Next.js",
        image: "https://ik.imagekit.io/mrityunjay/TechStack/nextjs.jpeg?updatedAt=1769859276503"
      },
      {
        name: "Shadcn/UI",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/shadcn.png?updatedAt=1769684949468",
      },
      {
        name: "Typescript",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/Typescript.svg.png?updatedAt=1769859234226",
      },      
    ],
    slug: "medium-embed-ui-library",
    videoLink: "https://www.youtube.com/watch?v=d8hvIdqWvqM",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/medium-embed-ui-library.png",
  },
];

export default function Projects() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start justify-start mb-14">
      <SectionTitle subtitle="featured" title="projects." />
      <motion.div
        className="w-full flex flex-col items-start gap-3.5 mt-5"
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12">
          {PROJECT_DETAILS.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              sourceCode={project.sourceCode}
              liveDemo={project.liveDemo}
              imagesArray={project.imagesArray}
              slug={project.slug}
              videoLink={project.videoLink}
              thumbnailImage={project.thumbnailImage}
              optionalMessage={project.optionalMessage}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.05}}
        transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
        className={cn(
          `w-full mt-10 flex items-center justify-center ${sans.className}`,
        )}
      >
        <Button
          variant={"outline"}
          className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.08)] rounded-lg flex gap-1 hover:cursor-pointer text-neutral-700 dark:text-neutral-200"
          onClick={() => router.push("/projects")}
        >
          See All Projects
          <ArrowUpRightIcon className="text-neutral-500" size={10} />
        </Button>
      </motion.div>
    </div>
  );
}
