"use client";

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
import {PiLinkedinLogoLight} from "react-icons/pi";
import {VscGithubAlt} from "react-icons/vsc";
import {PiMediumLogoLight} from "react-icons/pi";
import {SiPeerlist} from "react-icons/si";
import {motion} from "motion/react";
import {useRouter} from "next/navigation";
import {marker, sans} from "@/lib/fonts";
import {useRef, useState} from "react";

export default function IntroCard() {
  const router = useRouter();
  const [availability, setAvailability] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="flex items-end justify-between p-5 md:p-10 md:px-14 border border-neutral-100 dark:bg-neutral-900 dark:border-neutral-900 rounded-xl shadow-none md:shadow-2xs my-10 mt-[66px]">
      <div className="text-xl md:text-3xl">
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
            `${sans.className} text-neutral-400 md:text-lg text-[12px] md:whitespace-nowrap`,
          )}
        >{`I'm a full-stack web developer.`}</div>
        <div className="mt-0 md:mt-2">
          <ParticleButton
            className="rounded-full shadow hover:cursor-pointer dark:bg-neutral-700 scale-70 md:scale-100 origin-left"
            particleClass="bg-black dark:bg-white"
            onClick={() => router.push("/contact")}
          >
            Get in touch
            <CursorClickIcon />
          </ParticleButton>
        </div>
      </div>
      <div className="relative inline-block">
        <Image
          src={"https://ik.imagekit.io/mrityunjay/profile.jpg"}
          alt="myImage"
          width={180}
          height={180}
          className="grayscale-75 brightness-110 hover:grayscale-0 hover:transition-all hover:duration-500 hidden md:inline "
        />
        <Image
          src={"https://ik.imagekit.io/mrityunjay/profile.jpg"}
          alt="myImage"
          width={140}
          height={140}
          className="grayscale-75 brightness-110 hover:grayscale-0 hover:transition-all hover:duration-500 inline md:hidden "
        />
        <div className="z-10 absolute p-1.5 -bottom-2 -right-2 bg-white shadow-lg rounded-full hover:cursor-pointer">
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className="relative md:w-3 md:h-3 w-2 h-2 flex items-center justify-center"
                onClick={() => setAvailability(!availability)}
              >
                <div className="md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-green-400 animate-in z-10 absolute justify-self-center"></div>
                <div className="md:w-2.5 md:h-2.5 w-2 h-2 rounded-full bg-green-300 animate-[ping_1.5s_ease-in-out_infinite] absolute justify-self-center"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="flex gap-1" ref={ref}>
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
