"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {useState} from "react";
import ProjectsCard from "./projectsCard";
import {motion} from "motion/react";
import ParticleButton from "../particle-button/particle";
import {CursorClickIcon} from "../hover-icons/click";

const PROJECT_DETAILS = [
  {
    index: 1,
    title: "DocuMind",
    description: "Structured PDF intelligence platform for messy documents with semantic retrieval, flashcards, quizzes, and mind maps.",
    sourceCode: "https://github.com/mrityunjay-tiwari/summarize",
    liveDemo: "https://documind.fun/",
    imagesArray: [
      {
        name: "Next.js",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/nextjs.png",
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
    videoLink: "https://youtu.be/WX8QpJborDU",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/portfolio/documind.fun"
  },
  {
    index: 2,

    slug: "prepnova",
    videoLink: "https://youtu.be/WX8QpJborDU",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/portfolio/prepnova.site?updatedAt=1778377471499",
    title: "PrepNova",
    description: "AI-powered mock interviews with adaptive questioning, live feedback, structured reports, and long-term progress tracking.",
    sourceCode: "https://github.com/mrityunjay-tiwari/interview-tool",
    liveDemo: "https://prepnova.site/",
    imagesArray: [
      {
        name: "Next.js",
        image:
          "https://ik.imagekit.io/mrityunjay/portfolio/nextjs.png",
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
        name: "PostgreSQL",
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
    description:
      "Easy to use npm package that scrapes all the info about any medium article.",
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
    slug: "medium-embed-ui-library",
    videoLink: "https://www.youtube.com/watch?v=d8hvIdqWvqM",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/medium-embed-ui-library.png",
    title: "Embed Medium UI Library",
    description:
      "UI library to embed medium articles in your website using npm package.",
    sourceCode: "https://github.com/mrityunjay-tiwari/embed-medium",
    liveDemo: "https://embed-medium.vercel.app/",
    imagesArray: [
      {
        name: "Next.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nextjs.jpeg?updatedAt=1769859276503",
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
  },
  {
    index: 8,
    slug: "portfolio",
    videoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/portfolio.png?updatedAt=1769851057369",
    title: "Portfolio",
    description: "This is the website you are currently on !",
    optionalMessage: "This is only developed, not designed by me",
    sourceCode: "https://github.com/mrityunjay-tiwari/mrityunjay.site",
    liveDemo: "/",
    imagesArray: [
      {
        name: "Next.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/nextjs.jpeg?updatedAt=1769859276503",
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
      {
        name: "PostgreSQL",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/postgreSQL.png?updatedAt=1769683921093",
      },
      {
        name: "Prisma",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/prisma-square.png?updatedAt=1769760876751",
      },
      {
        name: "Vercel",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/vercel-logo.png?updatedAt=1769763813364",
      },
      {
        name: "Gemini",
        image:
          "https://ik.imagekit.io/mrityunjay/gemini.webp?updatedAt=1768973332165",
      },
    ],
  },
];
type BlogType = "tech" | "personal";

export default function ProjectsPage() {
  const [blogType, setBlogType] = useState<BlogType>("tech");
  return (
    <motion.div
      initial={{opacity: 0, y: 40}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 20}}
      transition={{
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // material-like easing
      }}
      className="md:max-w-2xl w-full flex flex-col items-center justify-center mt-32 mb-20"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-3xl md:text-4xl font-medium text-neutral-500 dark:text-neutral-200 border-b-4 border-orange-100 dark:border-orange-200`,
          )}
        >
          products.
        </h2>
        <h2
          className={cn(
            `${sans.className} flex text-center text-neutral-500 dark:text-neutral-300`,
          )}
        >
          all my works.
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700" />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <div className="w-full flex flex-col items-start gap-0 mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:gap-12 gap-8">
            {PROJECT_DETAILS.map((project, index) => (
              <ProjectsCard
                key={index}
                // blogImage={project.blogImage}
                videoLink={project.videoLink}
                thumbnailImage={project.thumbnailImage}
                title={project.title}
                description={project.description}
                sourceCode={project.sourceCode}
                liveDemo={project.liveDemo}
                imagesArray={project.imagesArray}
                slug={project.slug}
                optionalMessage={project.optionalMessage}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700 mt-10" />
      <div className="mt-10">
        <ParticleButton
          className="rounded-full shadow hover:cursor-pointer dark:bg-neutral-700"
          particleClass="bg-black dark:bg-white"
        >
          Get in touch
          <CursorClickIcon />
        </ParticleButton>
      </div>
    </motion.div>
  );
}
