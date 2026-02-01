"use client";

import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {VscGithubAlt} from "react-icons/vsc";
import {CiGlobe} from "react-icons/ci";
import Image from "next/image";
import {MdNotes} from "react-icons/md";
import {ChevronUpIcon, ReceiptText} from "lucide-react";
import {TbNotes} from "react-icons/tb";
import {HeroVideoDialog} from "../magic-ui/video-player";
import {VideoDialogForProjectCard} from "../magic-ui/video-player-projects-card";
import {SparklesIcon} from "../hover-icons/sparkles";
import {useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import { Spinner } from "../kibo-ui/spinner";
import { useCompletion } from "@ai-sdk/react";

interface ProjectsCardProps {
  // blogImage: React.ReactNode;
  title: string;
  description?: string;
  imagesArray?: {name: string; image: string}[];
  sourceCode: string;
  liveDemo: string;

  slug: string;
  videoLink: string;
  thumbnailImage: string;
  optionalMessage?: string;
}

export default function ProjectsCard({
  // blogImage,
  title,
  description,
  imagesArray,
  sourceCode,
  liveDemo,

  slug,
  videoLink,
  thumbnailImage,
  optionalMessage,
}: ProjectsCardProps) {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);

    const {
    input,
    handleInputChange,
    handleSubmit,
    completion,
    isLoading,
    error,
    setInput,
    stop,
    complete,
  } = useCompletion({
    api: "/api/stream-project-summary",
  });

  const generateSummary = async () => {
    const prompt =
      `Generate a summary of the project ${title} in two lines.`;

    setExpanded(true);
    complete(prompt);
  };

  return (
    <div className=" w-full flex flex-col items-start rounded-xl shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] dark:bg-neutral-900 outline outline-neutral-100 dark:outline-neutral-900 hover:scale-101 transition-all duration-400">
      <>
        <div className="w-full flex items-center justify-between rounded-lg">
          <div className="flex flex-col items-center">
            {/* <div className="overflow-hidden min-w-full flex justify-center"> */}
            {/* <IoBookSharp className="size-5 text-orange-300 hover:text-orange-400 hover:cursor-pointer" /> */}
            {/* {blogImage} */}
            {/* </div> */}

            <div className="">
              <div className="">
                <div className="">
                  <VideoDialogForProjectCard
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc={videoLink}
                    thumbnailSrc={thumbnailImage}
                    thumbnailAlt="Hero Video"
                    playButtonHidden={true}
                  />
                  <VideoDialogForProjectCard
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc={videoLink}
                    thumbnailSrc={thumbnailImage}
                    thumbnailAlt="Hero Video"
                    playButtonHidden={true}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-3 p-7 py-4 overflow-hidden rounded-b-xl">
              <div className="flex items-baseline w-full justify-between">
                <h2
                  className={cn(
                    `${marker.className} text-lg font-medium  text-neutral-700 dark:text-inherit hover:underline hover:text-orange-300 hover:cursor-pointer transition-all duration-200 `,
                  )}
                >
                  {title}
                </h2>

                <h2 className=" flex items-center gap-2 hover:underline dark:text-neutral-300 text-neutral-500">
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
                      <Link href={liveDemo} target="_blank">
                        <CiGlobe />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Website</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={`/projects/${slug}`}>
                        <TbNotes className="text-neutral-400 h-4 w-4" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>See Details</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div onClick={generateSummary}>
                        <SparklesIcon
                          className="text-neutral-400  hidden md:inline"
                          size={16}
                        />
                        <SparklesIcon
                          className="text-neutral-400  inline md:hidden"
                          size={12}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{expanded ? "Generate Again" : "Get AI Summary"}</p>
                    </TooltipContent>
                  </Tooltip>
                </h2>
              </div>

              <h2
                className={cn(`${sans.className} text-sm text-neutral-500 dark:text-neutral-400  `)}
              >
                {/* Collection of books, articles and research papers. */}
                {description}
              </h2>
              <h2
                className={cn(
                  `${sans.className} text-xs dark:text-neutral-300 text-neutral-400`,
                )}
              >
                {optionalMessage}
              </h2>
              <div className="flex flex-col w-full items-start">
                <h2
                  className={`text-sm dark:text-neutral-300 font-medium text-neutral-400 ${sans.className}`}
                >
                  Stack:
                </h2>
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-wrap items-center gap-2 mt-2">
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
            </div>
          </div>
        </div>
           <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{opacity: 0, height: 0}}
                      animate={{opacity: 1, height: "auto"}}
                      exit={{opacity: 0, height: 0}}
                      transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1], // material-like easing
                      }}
                      className={cn("w-full px-4 pb-4", sans.className)}
                    >
                      <hr className="w-full border border-neutral-100 dark:border-neutral-700" />
                      <div className="flex items-baseline justify-between">
                        <div className="flex items-center gap-1 text-[11px] mt-2">
                          <SparklesIcon
                            className="text-neutral-500 dark:text-neutral-400"
                            size={10}
                          />
                          This is Gemini Generated Summary
                        </div>
                        <div
                          className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-0.5 hover:cursor-pointer"
                          onClick={() => setExpanded(false)}
                        >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <ChevronUpIcon size={10} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Collapse Summary</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                      <div className="text-neutral-500 dark:text-neutral-400 text-sm mt-1 ">
                        {error && (
                          <div className="text-red-500 mb-4">{error.message}</div>
                        )}
                        {isLoading && !completion && (
                          <div className="flex items-center gap-1 text-xs">
                            <Spinner variant="throbber" size={12} />
                            <span className="animate-pulse">Thinking...</span>
                          </div>
                        )}
                        {completion && (
                          <div className="whitespace-pre-wrap">{completion}</div>
                        )}
                        
                        {/* The Courage to Be Disliked explores how our happiness depends less
                        on past experiences and more on the choices we make in the
                        present. Through Adlerian psychology, it argues that freedom comes
                        from letting go of the need for approval and taking responsibility
                        for our own life goals. */}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
      </>
    </div>
  );
}
