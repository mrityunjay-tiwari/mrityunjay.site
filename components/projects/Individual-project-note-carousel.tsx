import { cn } from "@/lib/utils";
import {Card, CardContent, CardTitle} from "../ui/card";
import { sans } from "@/lib/fonts";
import { Badge } from "../ui/badge";
import Link from "next/link";

interface IndividualProjectNoteCarouselProps {
    projectTitle: string;
    description: string;
    badgesArray: string[];
    projectNoteLink: string;
}
export default function IndividualProjectNoteCarousel({projectTitle, description, badgesArray, projectNoteLink}: IndividualProjectNoteCarouselProps) {
  return (
    <Link href={projectNoteLink}>
    <Card className="max-w-full flex flex-col items-start gap-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-center px-5">
        <h2 className={cn(`${sans.className} font-medium text-neutral-700 dark:text-neutral-200`)}>
          {projectTitle}
        </h2>
      </div>
      <h2 className="flex items-center justify-center text-sm px-5 text-neutral-500 dark:text-neutral-300 mb-2">
        {description}
      </h2>
      <div className="flex items-center justify-start mx-5 gap-2 flex-wrap">{badgesArray.map((badgesText, index) => (
        <Badge variant={"outline"} className="text-[11px]" key={index}>{badgesText}</Badge>
      ))}</div>
    </Card>
    </Link>
  );
}
