import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from "@/components/kibo-ui/glimpse";
import { marker } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
export const GlimpseText = ({text, image, title, description, href, onClick, target}: {text: string, image: string, title: string, description: string, href?: string, onClick?: () => void, target: string}) => {
  return (
    <div className="inline" onClick={onClick}>
      
      <Glimpse closeDelay={0} openDelay={0}>
        <GlimpseTrigger asChild>
          <Link
            className="font-medium text-primary underline"
            href={href ?? ""}
            target={target}
          >
            <span className={cn(`${marker.className} font-semibold text-neutral-500 dark:text-neutral-200 dark:bg-neutral-900 rounded-md px-1.5 shadow-[inset_0_2px_6px_rgba(0,0,0,0.12)] dark:shadow-[inset_0_2px_6px_rgba(255,255,255,0.15)] hover:text-orange-300 transition-all duration-500 inline-block`)}>{text}</span>
          </Link>
        </GlimpseTrigger>
        <GlimpseContent className="w-80">
          <GlimpseImage src={image ?? ""} />
          <GlimpseTitle>{title}</GlimpseTitle>
          <GlimpseDescription>{description}</GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{" "}
    
    </div>
  );
};
