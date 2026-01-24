"use client";

import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {IoBookSharp} from "react-icons/io5";
import Link from "next/link";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {GoArrowUpRight} from "react-icons/go";

interface ReadingListProps {
  blogImage: React.ReactNode;
  title: string;
  description?: string;
 
  websiteName? : string
}

export default function PeopleCard({
  blogImage,
  title,
  description,

}: ReadingListProps) {
  return (
    <div className="md:max-w-2xl w-full flex flex-col items-start rounded-xl shadow-[inset_0_1px_1px_rgba(0,0,0,0.08)] border hover:scale-101 transition-all duration-400">
      <>
        <div
          className="w-full flex items-center justify-between rounded-lg"
        >
          <div className="flex flex-col items-start">
            <div className="overflow-hidden min-w-full flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              {/* <IoBookSharp className="size-5 text-orange-300 hover:text-orange-400 hover:cursor-pointer" /> */}
              {blogImage}
            </div>

            <div className="flex w-full items-center justify-between gap-2 p-7 dark:bg-neutral-900 overflow-hidden rounded-b-xl">
              <div className="flex flex-col items-start gap-1">
                <h2
                  className={cn(
                    `${marker.className} font-medium dark:text-inherit text-neutral-700`,
                  )}
                >
                  {title}
                </h2>

                <h2
                  className={cn(`${sans.className} text-sm text-neutral-400  `)}
                >
                  {/* Collection of books, articles and research papers. */}
                  {description}
                </h2>
          
              </div>
              
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
