import {cn} from "@/lib/utils";
import {Fraunces, Inter} from "next/font/google";
import Image from "next/image";
import {Button} from "../ui/button";
import {MailCheck, MousePointerClick} from "lucide-react";
import {CursorClickIcon} from "../hover-icons/click";
import ParticleButton from "../particle-button/particle";
import {Tooltip, TooltipContent, TooltipTrigger} from "../ui/tooltip";
import {MdMail} from "react-icons/md";
import {MailCheckIcon} from "../hover-icons/mail";
import {CiMail} from "react-icons/ci";
import {FaXTwitter} from "react-icons/fa6";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import { PiMediumLogoLight } from "react-icons/pi";
import {SiPeerlist} from "react-icons/si";

const marker = Fraunces({
  variable: "--font-shadow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

const sans = Inter({
  variable: "--font-shadow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: "normal",
});

export default function IntroCard() {
  return (
    <div className="p-10 px-14 flex gap-5 items-end border border-neutral-100 shadow-xs w-[650px] rounded-xl justify-between my-10 mt-[66px]">
      <div className="text-3xl">
        <div className={cn(`${sans.className}`)}>Hi there,</div>
        <div className={cn(`${sans.className} flex items-center gap-1`)}>
          {`I'm`}{" "}
          <span
            className={cn(
              `hover:text-orange-300 font-medium hover:transition-all hover:duration-300 ${marker.className}`,
            )}
          >
            Mrityunjay.
          </span>
        </div>
        <div
          className={cn(
            `${sans.className} text-neutral-400 text-lg md:whitespace-nowrap`,
          )}
        >{`I'm a full-stack web developer.`}</div>
        <div className="mt-2">
          {/* <Button className="rounded-full shadow" variant={"ghost"}>
            Get in Touch
            <CursorClickIcon />
          </Button> */}
          <ParticleButton
            className="rounded-full shadow hover:cursor-pointer"
            particleClass="bg-black dark:bg-white"
          >
            Get in touch
            <CursorClickIcon />
          </ParticleButton>
          {/* <div className="flex gap-2 mt-4 text-neutral-500">
            <Tooltip>
              <TooltipTrigger asChild>
                <CiMail className="size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <FaXTwitter className="size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Twitter</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <PiLinkedinLogoLight className="size-5 scale-110" />
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <VscGithubAlt className="size-5 scale-110" />
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <PiMediumLogoLight className="size-5 scale-110" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Medium</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <SiPeerlist className="size-5" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Peerlist</p>
              </TooltipContent>
            </Tooltip>
          </div> */}
        </div>
      </div>
      <div className="relative inline-block">
        <Image
          src={"https://ik.imagekit.io/mrityunjay/profile.jpg"}
          alt="myImage"
          width={180}
          height={180}
          className="grayscale-75 brightness-110 hover:grayscale-0 hover:transition-all hover:duration-500"
        />
        <div className="z-10 absolute p-1.5 -bottom-2 -right-2 bg-white shadow-lg rounded-full hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="relative w-3 h-3 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-in z-10 absolute justify-self-center"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-300 animate-[ping_1.5s_ease-in-out_infinite] absolute justify-self-center"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex gap-1">
                <span className="text-orange-300">˗`ˎ</span>
                {` Available for freelance work or full-time roles `}
                <span className="text-orange-300">ˎˊ˗</span>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
