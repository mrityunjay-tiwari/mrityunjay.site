"use client";

import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {IoBookSharp} from "react-icons/io5";
import {ArrowRight, CalendarDays} from "lucide-react";
import {useRouter} from "next/navigation";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import Link from "next/link";
import {GoArrowUpRight} from "react-icons/go";
import {VscGithubAlt} from "react-icons/vsc";
import {CiGlobe} from "react-icons/ci";

interface ReadingListProps {
  blogImage: React.ReactNode;
  title: string;
  description?: string;
  whereWritten?: string;
}

export default function ProjectsCard({
  blogImage,
  title,
  description,
  whereWritten,
}: ReadingListProps) {
  const router = useRouter();
  return (
    <div className="md:max-w-2xl w-full flex flex-col items-start rounded-xl shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)] border hover:scale-101 transition-all duration-400">
      <>
        <Link
          href="/reading-list"
          className="w-full flex items-center justify-between rounded-lg"
        >
          <div className="flex flex-col items-center">
            <div className="overflow-hidden min-w-full flex justify-center">
              {/* <IoBookSharp className="size-5 text-orange-300 hover:text-orange-400 hover:cursor-pointer" /> */}
              {blogImage}
            </div>

            <div className="flex flex-col items-start gap-3 p-7 pb-4 dark:bg-neutral-900 overflow-hidden rounded-b-xl">
              <div className="flex items-baseline w-full justify-between">
                <h2
                  className={cn(
                    `${marker.className} font-medium dark:text-inherit text-neutral-700 hover:underline hover:text-orange-300 hover:cursor-pointer transition-all duration-200 `,
                  )}
                >
                  {title}
                </h2>
                <h2 className="text-sm flex gap-2 items-baseline hover:underline dark:text-neutral-300 text-neutral-500">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <VscGithubAlt />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Source Code</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <CiGlobe />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Website</p>
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
              <div className="flex flex-col w-full items-start">
                
                <h2 className={(`text-sm dark:text-neutral-300 font-medium text-neutral-400 ${sans.className}`)}>
                  Stack:
                </h2>
                
              <div className="flex flex-wrap items-center gap-2">
                
              </div>
              </div>
              {/* <div className="flex flex-col w-full items-start gap-0.5">
                <hr className="w-full border-neutral-100" />
                <h2 className={cn(`text-[11px] dark:text-neutral-300 text-neutral-400 ${sans.className}`)}>on {whereWritten}</h2>
              </div> */}
            </div>
          </div>
        </Link>
      </>
    </div>
  );
}
