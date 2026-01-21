import { CiMail } from "react-icons/ci";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoLight, PiMediumLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { SiPeerlist } from "react-icons/si";

export default function ContactWebsites() {
    return (
        <div className="flex mb-5 items-start justify-start w-[650px] mx-auto">
             <div className="flex gap-3 mt-4 text-neutral-500">
            <Tooltip>
              <TooltipTrigger asChild>
                <CiMail className="size-5 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaXTwitter className="size-5 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <PiLinkedinLogoLight className="size-5 scale-110 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <VscGithubAlt className="size-5 scale-110 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <PiMediumLogoLight className="size-5 scale-110 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Medium</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <SiPeerlist className="size-5 hover:text-neutral-700 hover:cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Peerlist</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
    )
}