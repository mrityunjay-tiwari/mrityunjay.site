import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import IndividualProjectNoteCarousel from "./Individual-project-note-carousel"
import { usePathname } from "next/navigation"

const CardsData = [
    {
        projectTitle: "Your Brain",
        description: "Bookmark Effeciently",
        badgesArray: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui"],
        projectNoteLink : "/projects/your-brain"
    },
    {
        projectTitle: "Summarize",
        description: "Summarize Articles",
        badgesArray: ["Next.js", "Tailwind CSS", "TypeScript", "shadcn/ui", "Prisma"],
        projectNoteLink : "/projects/summarize"
    },
    {
        projectTitle: "medium-info-api",
        description: "An api to get all the info about any medium article",
        badgesArray: ["TypeScript", "nodeJS"],
        projectNoteLink : "/projects/medium-info-api"
    },
    {
        projectTitle: "Medium Embed UI Library",
        description: "An api to get all the info about any medium article",
        badgesArray: ["TypeScript", "nodeJS"],
        projectNoteLink : "/projects/medium-embed-ui-library"
    },
    {
        projectTitle: "Portfolio",
        description: "An api to get all the info about any medium article",
        badgesArray: ["TypeScript", "nodeJS"],
        projectNoteLink : "/projects/portfolio"
    },
    {
        projectTitle: "Somi Conveyor Beltings",
        description: "An api to get all the info about any medium article",
        badgesArray: ["TypeScript", "nodeJS"],
        projectNoteLink : "/projects/somi-conveyor-beltings"
    },
    {
        projectTitle: "Cultural Council IIT BHU",
        description: "An api to get all the info about any medium article",
        badgesArray: ["TypeScript", "nodeJS"],
        projectNoteLink : "/projects/cultural-council-iit-bhu"
    },
    
]
export default function BottomFooterProjectNotesCardCarousel() {
    const pathanme = usePathname();
    console.log(pathanme);

    const filteredCards = CardsData.filter((card) => pathanme !== card.projectNoteLink);
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full md:max-w-2xl"
    >
      <CarouselContent>
        {filteredCards.map((card, index) => (
          <CarouselItem key={index} className="basis-72 lg:basis-1/2 flex flex-wrap">
            <IndividualProjectNoteCarousel
              projectTitle={card.projectTitle}
              description={card.description}
              badgesArray={card.badgesArray}
              projectNoteLink={card.projectNoteLink}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
