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
import SectionTitle from "../tech-stack/sectionTitle";
import { useRouter } from "next/navigation";

type BlogType = "tech" | "personal";

export default function FeaturedBlogs() {
  const [blogType, setBlogType] = useState<BlogType>("tech");
  const router = useRouter();
  return (
    <div className="md:max-w-2xl w-full flex flex-col items-start justify-start mb-14">
      <SectionTitle subtitle="featured" title="blogs." />
      <motion.div
        className="w-full flex flex-col items-start gap-3.5 mt-5"
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.3}}
        transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      >
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
            />
          </div>
        )}
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
          onClick={() => router.push("/blogs")}
        >
          Read All Blogs
          <ArrowUpRightIcon className="text-neutral-500" size={10} />
        </Button>
      </motion.div>
    </div>
  );
}
