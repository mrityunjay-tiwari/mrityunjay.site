"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import BlogCard from "./blogCard";
import {Badge} from "../ui/badge";
import {useState} from "react";
import {IoBookSharp} from "react-icons/io5";
import Image from "next/image";
import {Button} from "../ui/button";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import {motion} from "motion/react";

type BlogType = "tech" | "personal";

export default function BlogPage() {
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
      className="md:max-w-2xl w-full flex flex-col items-center justify-center my-32"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-10">
        <h2
          className={cn(
            `${marker.className} text-4xl font-medium text-neutral-500 dark:text-neutral-100  border-b-4 border-orange-100`,
          )}
        >
          {blogType === "tech" ? ">_ logs." : "🗦 thoughts."}
        </h2>
        <h2
          className={cn(
            `${sans.className}  text-neutral-500 dark:text-neutral-300`,
          )}
        >
          {blogType === "tech"
            ? `"My learning and insights on various aspects of programming."`
            : `"Things beyond code that interest me."`}
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="w-full border-0.5 border-neutral-200" />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <div className="flex gap-1">
          <Badge
            className="hover:cursor-pointer"
            variant={blogType === "tech" ? "default" : "outline"}
            onClick={() => setBlogType("tech")}
          >
            Tech Blogs
          </Badge>
          <Badge
            className="hover:cursor-pointer"
            variant={blogType === "personal" ? "default" : "outline"}
            onClick={() => setBlogType("personal")}
          >
            Thoughts
          </Badge>
        </div>
        {blogType === "tech" ? (
          <div className="grid grid-cols-2 w-full gap-12">
            <BlogCard
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
              whereWritten="medium.com"
            />
            <BlogCard
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
              whereWritten="medium.com"
            />
          </div>
        ) : (
          <div className="grid grid-cols-2 w-full gap-12">
            <BlogCard
              blogImage={
                <Image
                  src="https://ik.imagekit.io/mrityunjay/Untitled%20design%20(6).png"
                  alt=""
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-t-xl"
                />
              }
              title="Personal Blog 1"
              description="Collection of books, articles and research papers."
              whereWritten="medium.com"
            />
            <BlogCard
              blogImage={
                <Image
                  src="https://ik.imagekit.io/mrityunjay/Untitled%20design%20(6).png"
                  alt=""
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-t-xl"
                />
              }
              title="Personal Blog 2"
              description="Collection of books, articles and research papers."
              whereWritten="medium.com"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
