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
import { marker } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export async function GlimpseTextServer({ text }: { text: string }) {
  const data = await glimpse("https://github.com/haydenbleasel/ultracite");

  return (
    <Glimpse closeDelay={0} openDelay={0}>
      <GlimpseTrigger asChild>
        <Link
          href="https://github.com/haydenbleasel/ultracite"
          className="font-medium text-primary underline"
        >
          <span
            className={cn(
              `${marker.className} font-semibold text-neutral-500 rounded-md px-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] hover:text-orange-300 transition-all duration-500 inline-block`
            )}
          >
            {text}
          </span>
        </Link>
      </GlimpseTrigger>

      <GlimpseContent className="w-80">
        <GlimpseImage src={data.image ?? ""} />
        <GlimpseTitle>{data.title}</GlimpseTitle>
        <GlimpseDescription>{data.description}</GlimpseDescription>
      </GlimpseContent>
    </Glimpse>
  );
}
