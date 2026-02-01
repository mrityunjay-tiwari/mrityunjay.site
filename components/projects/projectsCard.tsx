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
import {ReceiptText} from "lucide-react";
import {TbNotes} from "react-icons/tb";
import {HeroVideoDialog} from "../magic-ui/video-player";
import {VideoDialogForProjectCard} from "../magic-ui/video-player-projects-card";

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
  optionalMessage?: string
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
  return (
    <div className="md:max-w-2xl w-full flex flex-col items-start rounded-xl shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] dark:bg-neutral-900 outline outline-neutral-100 dark:outline-neutral-900 hover:scale-101 transition-all duration-400">
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
                </h2>
              </div>

              <h2
                className={cn(`${sans.className} text-sm text-neutral-400  `)}
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
              {/* <div className="flex flex-col w-full items-start gap-0.5">
                <hr className="w-full border-neutral-100" />
                <h2 className={cn(`text-[11px] dark:text-neutral-300 text-neutral-400 ${sans.className}`)}>on {whereWritten}</h2>
              </div> */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
