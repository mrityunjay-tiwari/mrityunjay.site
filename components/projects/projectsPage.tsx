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
    slug: "your-brain",
    videoLink: "https://www.youtube.com/watch?v=2xSFMNGq_5Q",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/yourbrain.png",
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
    index: 5,
    slug: "somi-conveyor-beltings-website",
    videoLink: "https://www.youtube.com/watch?v=irCFZNTd28o",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/sommaire.png?updatedAt=1769851058061",
    title: "Somi Conveyor Beltings",
    description: "Website Revamp for Somi Conveyor Beltings.",
    sourceCode: "https://github.com/mrityunjay-tiwari/somiinvestor",
    liveDemo: "https://somiinvestor.vercel.app/",
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
    index: 6,
    slug: "cult-council-iit-bhu",
    videoLink: "https://www.youtube.com/watch?v=xiSfVten77g",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/cultcouncil.png?updatedAt=1769851057203",
    title: "Cultural Council, IIT BHU",
    description: "Official website of the Cultural Council, IIT BHU",
    sourceCode: "https://github.com/mrityunjay-tiwari/cult-council",
    liveDemo: "https://cult-council-mhwi.vercel.app/",
    imagesArray: [
      {
        name: "React.js",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/react2.png?updatedAt=1769759925029",
      },
      {
        name: "TailwindCSS",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/tailwind.png?updatedAt=1769684239645",
      },
      {
        name: "Motion",
        image:
          "https://ik.imagekit.io/mrityunjay/TechStack/2a38d0a3-269e-45b1-bd76-d95cdc971579.png?updatedAt=1769683561610",
      },
    ],
  },
  {
    index: 7,
    slug: "fondo-landing-page",
    videoLink: "https://www.youtube.com/watch?v=PEDThweTMoM",
    thumbnailImage:
      "https://ik.imagekit.io/mrityunjay/projects%20thumbnail/fondo.png?updatedAt=1769851057367",
    title: "Fondo Landing Page",
    description: "Developed the landing page for Fondo",
    optionalMessage: "This is only developed, not designed by me",
    sourceCode: "https://github.com/mrityunjay-tiwari/fondo",
    liveDemo: "https://fondo-omega.vercel.app/",
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
          my projects.
        </h2>
        <h2
          className={cn(
            `${sans.className} flex text-center text-neutral-500 dark:text-neutral-300`,
          )}
        >
          all my works - my projects.
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
