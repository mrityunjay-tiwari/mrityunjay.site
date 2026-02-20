import {FaXTwitter} from "react-icons/fa6";
import {MdMail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa";
import {FaMedium} from "react-icons/fa6";
import {SiPeerlist} from "react-icons/si";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {CircleDot} from "lucide-react";
import Link from "next/link";
import {Tag} from "./clean";
import {VscGithubAlt} from "react-icons/vsc";
import { redirect } from "next/navigation";

export default function Footer() {
  return (
    <footer className="my-10 mx-2 md:mx-0 flex flex-col items-center gap-6">
      <div className="flex items-center gap-2 md:gap-4">
        <Link href="mailto:mrityunjaytiwari1873@gmail.com" target="_blank" className="bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <MdMail className="text-white md:size-3 size-2" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="https://www.linkedin.com/in/mrityunjay-tiwari-a81275190/" target="_blank" className="bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <FaLinkedinIn className="text-white md:size-3 size-2" />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="https://twitter.com/mrityunjay_18" target="_blank" className="md:px-2 ml-1 md:ml-2 hover:cursor-pointer border rounded-md border-neutral-100 dark:border-neutral-900 md:rounded-none px-1 md:border-r-0 md:border-l-0 md:border-t-0  md:border-b-2 py-1 md:border-transparent hover:border-b-2 hover:border-orange-200 hover:transition-all hover:duration-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-0.5 md:gap-1  ">
                <FaXTwitter className="md:size-4 size-3" />{" "}
                <span className="text-[11px] md:text-sm">mrityunjay_18</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="https://github.com/mrityunjay-tiwari" target="_blank" className="md:px-2 mr-1 md:mr-2 hover:cursor-pointer border rounded-md border-neutral-100 dark:border-neutral-900 md:rounded-none px-1 md:border-r-0 md:border-l-0 md:border-t-0  md:border-b-2 py-1 md:border-transparent hover:border-b-2 hover:border-orange-200 hover:transition-all hover:duration-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-0.5 md:gap-1  ">
                <VscGithubAlt className="md:size-4 size-3" />{" "}
                <span className="text-[11px] md:text-sm">mrityunjay-tiwari</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="https://medium.com/@mrityunjaytiwari1873" target="_blank" className="bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <FaMedium className="text-white md:size-3 size-2" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Medium</p>
            </TooltipContent>
          </Tooltip>
        </Link>
        <Link href="https://peerlist.io/mrityunjay18" target="_blank" className="bg-neutral-300 dark:bg-neutral-700 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <SiPeerlist className="text-white md:size-3 size-2" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Peerlist</p>
            </TooltipContent>
          </Tooltip>
        </Link>
      </div>
      <Link href="/contact">
        <div className="flex gap-1 items-center text-neutral-400 border-b-2 border-orange-100">
          <CircleDot className="md:size-3 size-2" absoluteStrokeWidth />
          <span className="text-xs md:text-base">
            I am open to freelance work or full-time roles
          </span>
          <CircleDot className="md:size-3 size-2" absoluteStrokeWidth />
        </div>
      </Link>
      <div className="text-xs md:text-sm text-neutral-400">
        © 2026 Mrityunjay Tiwari.
      </div>
    </footer>
  );
}
