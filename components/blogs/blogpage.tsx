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
import {BlogType} from "@/lib/generated/prisma/enums";
import { useRouter } from "next/navigation";

interface BlogsProps {
  blogPosts: {
    link: string;
    image: string;
    id: string;
    description: string;
    slug: string;
    createdAt: Date;
    blogTitle: string;
    type: BlogType;
    websiteOn: string;
    wordCount: number
  }[];
}

export default function BlogPage({blogPosts}: BlogsProps) {
  const [blogType, setBlogType] = useState<BlogType>(BlogType.TECH);

  const filteredBlogs = blogPosts.filter((blog) => blog.type === blogType);

  const router = useRouter()
  
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
            `${marker.className} text-3xl md:text-4xl font-medium text-neutral-500 dark:text-neutral-200  border-b-4 border-orange-100 dark:border-orange-200`,
          )}
        >
          {blogType === BlogType.TECH ? ">_ logs." : "˗ˏˋthoughts."}
        </h2>
        <h2
          className={cn(
            `${sans.className} flex text-center text-neutral-500 dark:text-neutral-300`,
          )}
        >
          {blogType === BlogType.TECH
            ? `"My learning and insights on various aspects of programming."`
            : `"Things beyond code that interest me."`}
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700" />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <div className="flex gap-1">
          <Badge
            className="hover:cursor-pointer"
            variant={blogType === BlogType.TECH ? "default" : "outline"}
            onClick={() => setBlogType(BlogType.TECH)}
          >
            Tech Blogs
          </Badge>
          <Badge
            className="hover:cursor-pointer"
            variant={blogType === BlogType.THOUGHTS ? "default" : "outline"}
            onClick={() => setBlogType(BlogType.THOUGHTS)}
          >
            Thoughts
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full md:gap-12 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard
              slug={blog.slug}
              link={blog.link}
              key={blog.id}
              blogImage={
                <Image
                  src={blog.image}
                  alt={blog.blogTitle}
                  width={400}
                  height={400}
                  className="overflow-hidden rounded-t-xl"
                />
              }
              title={blog.blogTitle}
              description={blog.description}
              whereWritten={blog.websiteOn}
              createdAt={new Date(blog.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
              readingTime={`${Math.ceil(blog.wordCount / 200)} min read`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
