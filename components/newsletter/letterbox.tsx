import { Fraunces, Give_You_Glory, Inter } from "next/font/google";
import { Card } from "../ui/card";
import { RiCupLine } from "react-icons/ri";
import { CoffeeIcon } from "../hover-icons/cup";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ParticleButton from "../particle-button/particle";

const marker = Fraunces({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

const sans = Inter({
  variable: "--font-shadow",
  weight: "400",
  style: "normal",
});

export default function Newsletter () {
    return (
        <Card className="justify-self-center text-center bg-neutral-950 flex flex-col items-center gap-3 md:max-w-xl w-full">
            <div className="rounded-full p-2.5 hover:cursor-pointer hover:transition-all hover:duration-300 bg-neutral-800 text-white"><CoffeeIcon /></div>
            <div className={cn(`text-white text-2xl ${marker.className}`)}>Want updates from me?</div>
            <div className={cn(`text-white text-sm justify-self-center text-center px-24 ${sans.className}`)}>I occasionally send out an email with updates about my journey or when I have an interesting story to share.</div>
            <div className={cn(`flex items-center border-b ${sans.className}`)}><Input placeholder="youremail@example.com" className="border-none" /><ParticleButton className="text-white opacity-50 font-thin hover:bg-transparent hover:text-white hover:cursor-pointer" particleClass="bg-white">Join</ParticleButton></div>
        </Card>
    )
}

