import {cn} from "@/lib/utils";
import {Fraunces, Inter} from "next/font/google";
import {Highlighter} from "../magic-ui/highlighter";

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

export default function Intro() {
  return (
    <div
      className={cn(
        `${sans.className} mb-5 w-[650px] text-neutral-500 text-lg leading-8`,
      )}
    >
      I build <GlimpseText text="interactive web apps" /> with a focus on <GlimpseText text="UX" /> , and contribute to open
      source. I love building products that solve real-world problems with an eye on both engineering and <GlimpseText text="product thinking" />
      
        <div className="flex items-center gap-1">Currently, learning and building  <GlimpseText text="AI Native applications" /></div>
     
    </div>
  );
}

import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@/components/kibo-ui/glimpse";
import { glimpse } from "@/components/kibo-ui/glimpse/server";
import Link from "next/link";
const GlimpseText = async ({text}: {text: string}) => {
  const data = await glimpse("https://github.com/haydenbleasel/ultracite");
  return (
    <span className="inline">
      
      <Glimpse closeDelay={0} openDelay={0}>
        <GlimpseTrigger asChild>
          <Link
            className="font-medium text-primary underline"
            href="https://github.com/haydenbleasel/ultracite"
          >
            <span className={cn(`${marker.className} font-semibold text-neutral-500 rounded-md px-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover:text-orange-300 transition-all duration-500 inline-block`)}>{text}</span>
          </Link>
        </GlimpseTrigger>
        <GlimpseContent className="w-80">
          <GlimpseImage src={data.image ?? ""} />
          <GlimpseTitle>{data.title}</GlimpseTitle>
          <GlimpseDescription>{data.description}</GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{" "}
    
    </span>
  );
};

