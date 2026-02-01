"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {CiGlobe} from "react-icons/ci";
import {useState} from "react";
import {ChevronDownIcon} from "../hover-icons/down";
import {AnimatePresence, motion} from "motion/react";
import SectionTitle from "../tech-stack/sectionTitle";
import Link from "next/link";

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col items-start justify-start mb-14">
      <SectionTitle subtitle="my" title="education." />
      <div className="w-full flex items-center justify-between mt-5">
        <div className="flex gap-2.5 items-center">
          <div className="rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.10)] p-1 border">
            <Image
              src={"https://ik.imagekit.io/mrityunjay/iit_logo_original.png"}
              alt=""
              width={40}
              height={40}
              className="hidden md:inline"
            />
            <Image
              src={"https://ik.imagekit.io/mrityunjay/iit_logo_original.png"}
              alt=""
              width={35}
              height={35}
              className="inline md:hidden"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center">
              <h2
                className={cn(`${marker.className} text-sm md:text-lg text-neutral-600 dark:text-neutral-300`)}
              >
                IIT (BHU), Varanasi
              </h2>
              <div className="flex gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://www.iitbhu.ac.in/" target="_blank">
                      <CiGlobe className="size-3 md:size-3.5 text-neutral-500 hover:text-neutral-700 hover:cursor-pointer dark:text-neutral-300" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Website</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="rounded-full p-0.5 bg-neutral-100 dark:bg-neutral-800"
                    onClick={() => setExpanded((e) => !e)}
                  >
                    <ChevronDownIcon
                      size={12}
                      className={cn(
                        "transition-transform duration-300",
                        expanded && "rotate-180",
                      )}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{expanded ? "Collapse" : "Expand"}</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <h2 className={cn(`${sans.className} text-xs text-neutral-500 dark:text-neutral-400 `)}>
              Pre-Final Year Undergraduate
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className={cn(`${sans.className} text-xs md:text-sm text-neutral-500 dark:text-neutral-400`)}>
            2022 - Present
          </h2>
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
            className={cn(
              `${sans.className} mt-5 text-neutral-500 text-sm pr-5`,
            )}
          >
            <ul className="list-disc pl-4 space-y-2">
              <li>
                {`It's all about beautiful memories and great connections.🌻`}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
