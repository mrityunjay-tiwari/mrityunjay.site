"use client";

import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {IoBookSharp} from "react-icons/io5";
import {ArrowRight} from "lucide-react";
import {useRouter} from "next/navigation";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import Link from "next/link";
import {motion} from "motion/react";

interface ReadingListProps {
  groupIcon: React.ReactNode;
  title: string;
  description: string;
  href: string
}

export default function ReadingList({
  groupIcon,
  title,
  description,
  href
}: ReadingListProps) {
  const router = useRouter();
  return (
    <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.05}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      className="md:max-w-2xl w-full p-3.5 flex flex-col items-start rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.10)] border"
    >
      <>
        <Link
          href={href}
          className="w-full flex items-center justify-between"
        >
          <div className="flex gap-2.5 items-center">
            <div className="rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] p-1 border">
              {/* <IoBookSharp className="size-5 text-orange-300 hover:text-orange-400 hover:cursor-pointer" /> */}
              {groupIcon}
            </div>
            <div className="flex flex-col gap-2 items-start">
              <div className="flex flex-col items-start gap-0">
                <h2
                  className={cn(
                    `${sans.className} text-sm font-medium text-neutral-600 hover:underline hover:text-orange-300 hover:cursor-pointer transition-all duration-200 `,
                  )}
                >
                  {title}
                </h2>

                <h2
                  className={cn(`${sans.className} text-xs text-neutral-400  `)}
                >
                  {/* Collection of books, articles and research papers. */}
                  {description}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                {/* <button
                type="button"
                onClick={() => router.push("/reading-list")}
                className="hover:cursor-pointer hover:bg-neutral-100 rounded px-1"
              > */}
                <ArrowUpRightIcon className="text-neutral-500" size={14} />
                {/* </button> */}
              </TooltipTrigger>

              <TooltipContent>
                <p>See more</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </Link>
      </>
    </motion.div>
  );
}
