"use client";

import Image from "next/image";
import {ArrowUpRightIcon} from "../hover-icons/arrow-up-right";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {cn} from "@/lib/utils";
import {marker, sans} from "@/lib/fonts";
import {CiGlobe} from "react-icons/ci";
import {IoBookSharp} from "react-icons/io5";
import {IoBookOutline} from "react-icons/io5";
import {SparklesIcon} from "../hover-icons/sparkles";
import {HiSparkles} from "react-icons/hi2";
import {HiOutlineSparkles} from "react-icons/hi2";
import {AnimatePresence, motion} from "motion/react";
import {useState} from "react";
import {ChevronUpIcon} from "lucide-react";
import {useCompletion} from "@ai-sdk/react";
import {Spinner} from "../kibo-ui/spinner";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function CurrentlyReading() {
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
    api: "/api/stream-summary",
  });

  const generateSummary = async () => {
    const prompt =
      "Generate a summary of the book 'The Courage to be Disliked' by Ichiro Kishimi and Fumitake Koga in two lines.";

    setExpanded(true);
    complete(prompt);
  };

  const router = useRouter();
  return (
    <motion.div
      initial={{opacity: 0, y: 25}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.05}}
      transition={{duration: 0.4, ease: [0.4, 0, 0.2, 1]}}
      className=" p-2 md:p-3.5 flex flex-col items-start my-16 rounded-lg shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.18)] dark:bg-neutral-950 border"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2.5 items-center">
          <div className="rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] p-0.5 border dark:bg-neutral-800">
            <Image
              src={"https://ik.imagekit.io/mrityunjay/book.jpg"}
              alt=""
              width={40}
              height={40}
              className="rounded"
            />
          </div>
          <div className="flex flex-col gap-1.5 md:gap-2 items-start">
            <div className="flex gap-1 items-center">
              <div
                className="rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] p-1 bg-orange-50 dark:bg-neutral-800"
                onClick={() => router.push("/reading-list")}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <IoBookSharp className="size-2 md:size-3 text-orange-300 hover:text-orange-400 hover:cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>See my Reading List</p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <h2
                className={cn(
                  `${sans.className} text-xs md:text-sm text-neutral-500 dark:text-neutral-400 `,
                )}
              >
                Currently Reading
              </h2>
            </div>
            <div className="flex flex-col items-start gap-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="https://www.amazon.in/Courage-Be-Disliked-yourself-happiness/dp/1760630721?s=bazaar"
                    target="_blank"
                  >
                    <h2
                      className={cn(
                        `${sans.className} text-[12.5px] md:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:underline hover:text-orange-300 hover:cursor-pointer transition-all duration-200 `,
                      )}
                    >
                      The Courage To be Disliked
                    </h2>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Open on Amazon</p>
                </TooltipContent>
              </Tooltip>

              <h2
                className={cn(`${sans.className} text-xs text-neutral-400  `)}
              >
                by Ichiro Kishimi and Fumitake Koga
              </h2>
            </div>
          </div>
        </div>
        <div onClick={generateSummary}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="rounded-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)] p-2 flex items-center justify-center  hover:cursor-pointer dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)]">
                <SparklesIcon
                  className="text-neutral-500 dark:text-neutral-400 hidden md:inline"
                  size={18}
                />
                <SparklesIcon
                  className="text-neutral-500 dark:text-neutral-400 inline md:hidden"
                  size={14}
                />
                
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{expanded ? "Generate Again" : "Get AI Summary"}</p>
            </TooltipContent>
          </Tooltip>
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
            className={cn(`w-full mt-4 ${sans.className}`)}
          >
            <hr className="w-full border border-neutral-100 dark:border-neutral-700" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-xs mt-2">
                <SparklesIcon
                  className="text-neutral-500 dark:text-neutral-400"
                  size={12}
                />
                This is an AI Generated Summary
              </div>
              <div
                className="rounded-full bg-neutral-100 dark:bg-neutral-800 p-1 hover:cursor-pointer"
                onClick={() => setExpanded(false)}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ChevronUpIcon size={12} />
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
    </motion.div>
  );
}
