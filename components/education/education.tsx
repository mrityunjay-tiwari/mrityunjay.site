"use client";

import {marker, sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {CiGlobe} from "react-icons/ci";
import {useState} from "react";
import {ChevronDownIcon} from "../hover-icons/down";
import {AnimatePresence, motion} from "motion/react";

export default function Education() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="w-[650px] flex flex-col items-start justify-start mb-14">
      <div>
        <h2 className={cn(`${sans.className} text-sm text-neutral-400`)}>my</h2>
        <h2
          className={cn(
            `${marker.className} text-2xl text-neutral-500 border-b-4 border-orange-100`,
          )}
        >
          education.
        </h2>
      </div>
      <div className="w-full flex items-center justify-between mt-5">
        <div className="flex gap-2.5 items-center">
          <div className="rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] p-1 border">
            <Image
              src={"https://ik.imagekit.io/mrityunjay/IIT-BHU_Logo.svg"}
              alt=""
              width={40}
              height={40}
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center">
              <h2
                className={cn(`${marker.className} text-lg text-neutral-600 `)}
              >
                IIT (BHU), Varanasi
              </h2>
              <div className="flex gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CiGlobe className="size-3.5 text-neutral-500 hover:text-neutral-700 hover:cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Website</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className="rounded-full p-0.5 bg-neutral-100"
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
            <h2 className={cn(`${sans.className} text-xs text-neutral-500  `)}>
              Pre-Final Year Undergraduate
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <h2 className={cn(`${sans.className} text-sm text-neutral-500`)}>
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
              `${sans.className} mt-5 text-neutral-500 text-sm pr-5 overflow-hidden`,
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
