"use client";

import {sans} from "@/lib/fonts";
import {cn} from "@/lib/utils";
import {Globe} from "lucide-react";
import {Fraunces} from "next/font/google";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {CiGlobe} from "react-icons/ci";
import {FaXTwitter} from "react-icons/fa6";
import {PiLinkedinLogoLight} from "react-icons/pi";
import {ChevronDownIcon} from "../hover-icons/down";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import SectionTitle from "../tech-stack/sectionTitle";
import Link from "next/link";

const marker = Fraunces({
  variable: "--font-shadow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export default function WorkExperience() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div id="work-experience" className="flex flex-col items-start justify-start mb-14">
      <SectionTitle subtitle="featured" title="experience." />
      <div className="flex w-full items-center justify-between mt-5">
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.05}}
          transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
          className="flex gap-2.5 items-center"
        >
          <div className="rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_4px_rgba(255,255,255,0.10)] p-1 border">
            <Image
              src={"https://ik.imagekit.io/mrityunjay/afi.jpg"}
              alt=""
              width={40}
              height={40}
              className="rounded hidden md:inline"
            />
            <Image
              src={"https://ik.imagekit.io/mrityunjay/afi.jpg"}
              alt=""
              width={35}
              height={35}
              className="rounded inline md:hidden"
            />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex gap-2 items-center">
              <h2
                className={cn(`${marker.className} text-lg text-neutral-600 dark:text-neutral-300`)}
              >
                AFI
              </h2>
              <div className="flex gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://afiprotocol.xyz/" target="_blank">
                      <CiGlobe className="size-3 md:size-3.5 text-neutral-500 hover:text-neutral-700 hover:cursor-pointer dark:text-neutral-300" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Visit Website</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://x.com/afiprotocol_xyz" target="_blank">
                      <FaXTwitter className="size-3 md:size-3.5 text-neutral-500 hover:text-neutral-700 hover:cursor-pointer dark:text-neutral-300" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow on X</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://www.linkedin.com/company/afiprotocol/" target="_blank">
                      <PiLinkedinLogoLight className="size-3 md:size-3.5 text-neutral-500 hover:text-neutral-700 hover:cursor-pointer dark:text-neutral-300" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect on LinkedIn</p>
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
              TechPM Intern
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 25}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true, amount: 0.05}}
          transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
          className="flex flex-col items-end"
        >
          <h2 className={cn(`${sans.className} text-xs md:text-sm text-neutral-500 dark:text-neutral-400`)}>
            May 2025 - July 2025
          </h2>
          <h2 className={cn(`${sans.className} text-xs md:text-sm text-neutral-500 dark:text-neutral-400`)}>
            (Remote)
          </h2>
        </motion.div>
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
              `${sans.className} mt-5 text-neutral-500 text-sm pr-5 overflow-hidden `,
            )}
          >
            <ul className="list-disc pl-4 space-y-2">
              <li>
                Built gamified Web3 features & incentive systems for an
                AI-powered DeFi risk platform with{" "}
                <span className="font-bold">USD 1Bn+ AUM</span> expertise
              </li>
              <li>
                Researched DeFi protocols and retail flows, shaping gamified
                product strategy for{" "}
                <span className="font-bold">USD 30Bn+</span> secondary yield
                market
              </li>
              <li>
                Worked on <span className="font-bold">community</span> feature
                to share & clone real-time DeFi strategies, driving retention &
                open-source adoption
              </li>
              <li>
                Applied Octalysis framework to design speculation cycle, fueling
                <span className="font-bold"> 600+</span> waitlist sign-ups
                pre-launch on Sonic ecosystem
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
