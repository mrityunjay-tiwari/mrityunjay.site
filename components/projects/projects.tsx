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
    title: "DocuMind",
    description: "AI-powered PDF documents study workspace for chat, flashcards, quizzes, and mind maps.",
    sourceCode: "https://github.com/mrityunjay-tiwari/summarize",
    liveDemo: "https://documind.fun/",
    imagesArray: [
      {
        name: "NextJs",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nodejs.png?updatedAt=1769760522055",
      },
      {
        name: "TypeScript",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/typescript.svg?updatedAt=1778095120275",
      },
      {
        name: "Shadcn/UI",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/shadcn.png?updatedAt=1769684949468",
      },
      {
        name: "Vercel AI SDK",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/vercel-logo.png?updatedAt=1769763813364",
      },
      {
        name: "FastAPI",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/fastapi%20logo.webp",
      },
      {
        name: "Docling",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/docling",
      },
      {
        name: "PostgreSQL + pgvector",
        image:
          "https://ik.imagekit.io/mrityunjay/OT-integrations-logo-postgre-sql.png?updatedAt=1768855375158",
      },
      {
        name: "Prisma",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/prisma-square.png?updatedAt=1769760876751",
      },
      {
        name: "NextAuth",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/auth.js.png?updatedAt=1769758909591",
      },
    ],
    slug: "documind",
    videoLink: "https://www.youtube.com/watch?v=2xSFMNGq_5Q",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/portfolio/documind.fun"
  },
  {
    index: 2,

    slug: "prepnova",
    videoLink: "https://www.youtube.com/watch?v=QAZbZ2S7hFw",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/portfolio/prepnova.site?updatedAt=1778377471499",
    title: "PrepNova",
    description: "AI-powered mock interviews with adaptive questioning, live feedback, structured reports, and long-term progress tracking.",
    sourceCode: "https://github.com/mrityunjay-tiwari/interview-tool",
    liveDemo: "https://prepnova.site/",
    imagesArray: [
      {
        name: "NextJs",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nodejs.png?updatedAt=1769760522055",
      },
      {
        name: "TypeScript",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/typescript.svg?updatedAt=1778095120275",
      },
      {
        name: "FastAPI",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/fastapi%20logo.webp",
      },
      {
        name: "Stream",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/stream%20logo.png",
      },
      {
        name: "PostgreSQL + pgvector",
        image:
          "https://ik.imagekit.io/mrityunjay/OT-integrations-logo-postgre-sql.png?updatedAt=1768855375158",
      },
      {
        name: "Prisma",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/prisma-square.png?updatedAt=1769760876751",
      },
      {
        name: "MediaPipe",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/mediapipe%20logo.png",
      },
      {
        name: "NextAuth",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/auth.js.png?updatedAt=1769758909591",
      }
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
      <SectionTitle subtitle="featured" title="products." />
      <motion.div
        className="w-full flex flex-col items-start gap-3.5 mt-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:gap-12 gap-8">
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
              // optionalMessage={project.optionalMessage}
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
