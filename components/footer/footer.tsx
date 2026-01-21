import {FaXTwitter} from "react-icons/fa6";
import {MdMail} from "react-icons/md";
import {FaLinkedinIn} from "react-icons/fa";
import {FaMedium} from "react-icons/fa6";
import {SiPeerlist} from "react-icons/si";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {CircleDot} from "lucide-react";
import Link from "next/link";
import { Tag } from "./clean";
import { VscGithubAlt } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <div className="bg-neutral-300 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <MdMail className="text-white size-3" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Email</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="bg-neutral-300 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <FaLinkedinIn className="text-white size-3" />
            </TooltipTrigger>
            <TooltipContent>
              <p>LinkedIn</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="px-2 ml-2 hover:cursor-pointer border-b-2 py-1 border-transparent hover:border-b-2 hover:border-orange-200 hover:transition-all hover:duration-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1  ">
                <FaXTwitter /> <span className="text-sm">mrityunjay_18</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Twitter</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="px-2 mr-2 hover:cursor-pointer border-b-2 py-1 border-transparent hover:border-b-2 hover:border-orange-200 hover:transition-all hover:duration-200">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-1  ">
                <VscGithubAlt /> <span className="text-sm">mrityunjay-tiwari</span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Github</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="bg-neutral-300 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <FaMedium className="text-white size-3" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Medium</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="bg-neutral-300 hover:bg-gray-700 rounded-full p-1 hover:cursor-pointer hover:transition-all hover:duration-300">
          <Tooltip>
            <TooltipTrigger asChild>
              <SiPeerlist className="text-white size-3" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Peerlist</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Link href="/contacts">
        <div className="flex gap-1 items-center text-neutral-400 border-b-2 border-orange-100">
          <CircleDot className="size-3" absoluteStrokeWidth />
          <span className="">
            I am open to freelance work or full-time roles
          </span>
          <CircleDot className="size-3" absoluteStrokeWidth />
        </div>
      </Link>
      <div className="text-sm text-neutral-400">© 2026 Mrityunjay Tiwari.</div>
      <div className="ml-40">
        <Tag />
      </div>
    </footer>
  );
}
