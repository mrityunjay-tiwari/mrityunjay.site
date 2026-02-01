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
import {IoIosArrowRoundBack} from "react-icons/io";
import {FaArrowLeft} from "react-icons/fa6";
import Link from "next/link";
import {HeroVideoDialog} from "../magic-ui/video-player";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import ProjectNote from "../admin/projectNote";
import {VscGithubAlt} from "react-icons/vsc";
import {CiGlobe} from "react-icons/ci";
import BottomFooterProjectNotesCardCarousel from "./bottom-another-projectNotesCarousel";
import ParticleButton from "../particle-button/particle";
import {CursorClickIcon} from "../hover-icons/click";
import Newsletter from "../newsletter/letterbox";
import ThanksMessage from "../thanks/thanksmessage";
import BlogReadingContentSection from "../blogs/blogReadingSection";
import { JSONContent } from "@tiptap/react";
import { TechStackItem } from "@/types/project";

interface ProjectNoteProps {
  projectTitle: string;
  projectDescription: string;
  sourceCode: string;
  websiteLink: string;
  imagesArray?: TechStackItem[];
  content: JSONContent | string;
  thumbnailImage: string;
  videoLink: string;

}
export default function IndividualProjectNoteForReading({
  projectTitle,
  projectDescription,
  sourceCode,
  websiteLink,
  imagesArray,
  content,
  thumbnailImage,
  videoLink

}: ProjectNoteProps) {

  return (
    <motion.div
      
      className="md:max-w-2xl w-full flex flex-col items-center justify-center mt-28 md:mt-32"
    >
      <div className="flex flex-col items-center justify-center gap-3.5 mb-3.5">
        <Link
          href="/projects"
          className={cn(
            `${sans.className} flex items-center gap-2 text-sm hover:underline text-neutral-500 dark:text-neutral-300`,
          )}
        >
          <FaArrowLeft className="w-3 h-3" /> Projects
        </Link>
        <h2
          className={cn(
            `${sans.className} flex text-center text-2xl md:text-5xl font-semibold text-neutral-700 dark:text-neutral-200 mt-2`,
          )}
        >
          {projectTitle}
        </h2>
        <h2
          className={cn(
            `${sans.className} text-sm md:text-base flex text-center text-neutral-600 dark:text-neutral-300 md:mt-2`,
          )}
        >
          {projectDescription}
        </h2>
        {/* What other aspects exite me - Finance, Product and life in general. */}
      </div>
      <div className="flex flex-col items-center gap-7">
        <div className="flex flex-col items-center">
          {/* <h2 className="text-xs text-neutral-500 mb-1">Working On Version 2.0</h2> */}
          <div className="flex items-center gap-2">
            -`{" "}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={sourceCode} target="_blank">
                  <VscGithubAlt />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Source Code</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={websiteLink} target="_blank">
                  <CiGlobe />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Website</p>
              </TooltipContent>
            </Tooltip>
            ´-
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h2
            className={cn(
              `${sans.className} text-xs text-neutral-500 dark:text-neutral-400 mb-1.5`,
            )}
          >
            - tech<span className="text-neutral-500 dark:text-neutral-400">Stack -</span>
          </h2>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {imagesArray?.map((imghref, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Image
                    src={imghref.image}
                    alt={imghref.name}
                    width={20}
                    height={20}
                    className="rounded"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{imghref.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700" />

      <div className="w-full flex flex-col items-start gap-3.5">
        <div className="w-full flex flex-col items-start gap-3.5 mt-5">
          <div className="relative">
            
            <HeroVideoDialog
              className=""
              animationStyle="from-center"
              videoSrc={videoLink}
              thumbnailSrc={thumbnailImage}
              thumbnailAlt="Hero Video"
              playButtonHidden={false}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-3.5">
        <BlogReadingContentSection previousContent={content} />
      </div>
      <hr className="w-full border-0.5 border-neutral-200 dark:border-neutral-700 my-10" />
      <h2
        className={cn(
          `text-xl w-full items-start font-medium mb-3.5 ${sans.className}`,
        )}
      >
        See Other Project Details
      </h2>
      <div className="max-w-[calc(100%-2.5rem)] md:max-w-2xl">
        <BottomFooterProjectNotesCardCarousel />
      </div>
      <div className="mt-10 flex max-w-xl items-center justify-center gap-5 mb-20">
        <Button className="rounded-full shadow hover:cursor-pointer">
          View All Projects
          <ArrowUpRightIcon />
        </Button>
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
