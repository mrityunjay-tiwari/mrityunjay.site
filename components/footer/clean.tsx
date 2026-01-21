import {cn} from "@/lib/utils";
import {Caveat, Give_You_Glory, Handlee, Permanent_Marker, Playpen_Sans} from "next/font/google";
import { PiArrowBendLeftUpThin } from "react-icons/pi";
import { PiArrowArcLeftThin } from "react-icons/pi";

const playpen = Playpen_Sans({
  variable: "--font-shadow",
  weight: "300",
  style: "normal",
});

const marker = Give_You_Glory({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

export function Tag() {
  return (
    <div className="relative w-48 h-auto flex items-center justify-center bg-transparent ml-10">
      {/* Curved arrow */}
      <div className="relative w-full h-full text-zinc-400 ">

      {/* <PiArrowBendLeftUpThin className="w-6 h-6 rotate-[-20deg] text-orange-300 -translate-y-6 " /> */}
      {/* <PiArrowArcLeftThin className="w-6 h-6 rotate-[45deg] text-orange-200 -translate-y-5 scale-y-[-1]" /> */}
      </div>
      {/* Rotated Text */}
      <span
        className={cn(
          `absolute rotate-[-4deg] text-sm -translate-x-4 no-underline  text-zinc-400 font-light, ${marker.className}`
        )}
      >
        <span className="text-orange-300">˗`ˎ</span>I write clean code<span className="text-orange-300">ˎˊ˗</span>
      </span>
    </div>
  );
}
