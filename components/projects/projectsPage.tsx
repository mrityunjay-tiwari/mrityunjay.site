"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";

import {Badge} from "../ui/badge";
import {useState} from "react";
import {IoBookSharp} from "react-icons/io5";
import Image from "next/image";
import {Button} from "../ui/button";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import ProjectsCard from "./projectsCard";
import {motion} from "motion/react";

type BlogType = "tech" | "personal";

export default function ProjectsPage() {
  const [blogType, setBlogType] = useState<BlogType>("tech");
  return (
    <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.3}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      className="md:max-w-2xl w-full flex flex-col items-center justify-center my-32"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-4xl font-medium text-neutral-500 dark:text-neutral-100 border-b-4 border-orange-100`,
          )}
        >
          my projects.
        </h2>
        <h2
          className={cn(
            `${sans.className}  text-neutral-500 dark:text-neutral-300`,
          )}
        >
          all my works - my projects.
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="w-full border-0.5 border-neutral-200" />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <div className="w-full flex flex-col items-start gap-3.5 mt-5">
          <div className="grid grid-cols-2 w-full gap-12">
            <ProjectsCard
              blogImage={
                <Image
                  src="https://ik.imagekit.io/mrityunjay/Untitled%20design%20(7).png"
                  alt=""
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-t-xl"
                />
              }
              title="Tech Blog 1"
              description="Collection of books, articles and research papers."
            />
            <ProjectsCard
              blogImage={
                <Image
                  src="https://ik.imagekit.io/mrityunjay/Untitled%20design%20(6).png"
                  alt=""
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-t-xl"
                />
              }
              title="Tech Blog 2"
              description="Collection of books, articles and research papers."
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
