"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";

import {Badge} from "../ui/badge";
import {useEffect, useState} from "react";
import {IoBookSharp} from "react-icons/io5";
import Image from "next/image";
import {Button} from "../ui/button";
import {motion} from "motion/react";
import {FaArrowLeft} from "react-icons/fa6";
import Link from "next/link";
import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";
import {TbClockHour4} from "react-icons/tb";
import {AiOutlineLink} from "react-icons/ai";
import {PiHandsClappingLight} from "react-icons/pi";
import {MessageCircle} from "lucide-react";
import {LuDot} from "react-icons/lu";
import {ConfettiButton} from "../magic-ui/confetti";
import {JSONContent} from "@tiptap/react";
import BlogReadingContentSection from "./blogReadingSection";
import {clapBlogPost} from "@/app/actions/contents";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import {useRouter} from "next/navigation";

interface ProjectNoteProps {
  projectTitle: string;
  wordCount: number;
  clapCount: number;
  publishedDate: Date;
  content: JSONContent | string;
  slug: string;
}
export default function IndividualBlogPage({
  projectTitle,
  wordCount,
  clapCount,
  publishedDate,
  content,
  slug,
}: ProjectNoteProps) {
  const MAX_CLAPS_PER_VIEW = 10;

  const [localClaps, setLocalClaps] = useState(clapCount);
  const [viewClaps, setViewClaps] = useState(0);
  const [isClapping, setIsClapping] = useState(false);
  const isLimitReached = viewClaps >= MAX_CLAPS_PER_VIEW;

  const handleClap = async () => {
    if (isClapping) return;
    if (viewClaps >= MAX_CLAPS_PER_VIEW) return;

    setIsClapping(true);

    setLocalClaps((prev) => prev + 1);
    setViewClaps((prev) => prev + 1);

    try {
      const updatedCount = await clapBlogPost(slug);
      setLocalClaps(updatedCount);
    } catch {
      setLocalClaps((prev) => prev - 1);
      setViewClaps((prev) => prev - 1);
    } finally {
      setIsClapping(false);
    }
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const router = useRouter();
  return (
    <motion.div
      
      className="md:max-w-2xl w-full flex flex-col items-center justify-center mt-28 md:mt-32 mb-20"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-5">
        <Link
          href="/blogs"
          className={cn(
            `${sans.className} flex items-center gap-2 text-sm hover:underline text-neutral-500 dark:text-neutral-300`,
          )}
        >
          <FaArrowLeft className="w-3 h-3" /> Blog
        </Link>
        <h2
          className={cn(
            `${sans.className} flex text-center text-2xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-200 mt-0 md:mt-2`,
          )}
        >
          {projectTitle}
        </h2>
        <h2
          className={cn(
            `${sans.className}  text-neutral-600 dark:text-neutral-300 mt-0 md:mt-2 flex gap-1 items-center`,
          )}
        >
          <Avatar className="h-5 w-5 overflow-hidden ">
            <AvatarImage
              src="https://ik.imagekit.io/mrityunjay/profile-sq.jpg"
              className="h-full w-full object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className={cn(`text-xs text-neutral-500 dark:text-neutral-300 ${sans.className}`)}>
            Mrityunjay Tiwari
          </span>
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      {/* <h2 className="text-xs text-neutral-500 mb-1">Tech Stack :</h2> */}

      <div
        className={cn(
          `flex items-center justify-between w-full mb-0 md:mb-2 mt-5 md:mt-10 ${sans.className}`,
        )}
      >
        <div className="flex items-center gap-1">
          <TbClockHour4 className="w-3 h-3 text-neutral-500 dark:text-neutral-400" />
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {Math.ceil(wordCount / 200)} min read
          </span>
          <div className="hidden md:inline">
            <Button
              variant={"link"}
              className="text-xs text-blue-500 p-0 flex gap-0.5 "
              onClick={handleCopy}
            >
              <AiOutlineLink className="w-2 h-2" />
              {copied ? "Copied!" : "Copy URL"}
            </Button>
          </div>
        </div>
        <div className="text-xs flex items-center gap-0 md:gap-1.5 text-neutral-400">
          <div className="flex items-baseline gap-0 md:gap-3.5">
            <ConfettiButton
              onConfetti={handleClap}
              className={cn(`flex gap-0.5 text-xs ${sans.className}`)}
              style={
                isLimitReached ? {pointerEvents: "visibleStroke"} : undefined
              }
            >
              <PiHandsClappingLight className="w-4 h-4 dark:text-neutral-400" />
              {localClaps}
            </ConfettiButton>
            {/* <Button variant={"confettiVariant"} size={"icon"} className="flex gap-0.5 text-xs">
              <MessageCircle className="w-3 h-3" /> 10
            </Button> */}
          </div>
          <div className="flex gap-0 md:gap-0.5 items-center">
            <LuDot className="text-neutral-400" />
            {new Date(publishedDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700" />

      <div className="w-full flex flex-col items-start gap-3.5">
        <BlogReadingContentSection previousContent={content} />
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700" />
      <div className="w-full flex items-center justify-center mt-10 max-w-2xl">
        <Button
          onClick={() => router.push("/blogs")}
          variant={"outline"}
          className="rounded-full shadow hover:cursor-pointer"
        >
          Read More Blogs
          <ArrowUpRightIcon />
        </Button>
      </div>
    </motion.div>
  );
}
