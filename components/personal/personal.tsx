import ReadingList from "./reading-list";
import { IoBookSharp } from "react-icons/io5";
import { IoCamera } from "react-icons/io5";
import { RiUserStarFill } from "react-icons/ri";
import SectionTitle from "../tech-stack/sectionTitle";

export default function PersonalLife() {
  return (
    <div className="flex flex-col items-start justify-start mb-14">
      <SectionTitle subtitle="personal" title="life." />
      <div className="w-full flex flex-col items-start gap-3.5 mt-5">
        <ReadingList href="/reading-list" groupIcon={<IoBookSharp className="size-5 text-orange-200 dark:text-orange-100 hover:text-orange-400 dark:hover:text-orange-200 hover:cursor-pointer" />} title="Reading List" description="Collection of books, articles and research papers." />
        <ReadingList href="/people" groupIcon={<RiUserStarFill className="size-5 text-orange-200 dark:text-orange-100 hover:text-orange-400 dark:hover:text-orange-200 hover:cursor-pointer" />} title="People" description="The people whose story shape my life." />
        <ReadingList href="/photography" groupIcon={<IoCamera className="size-5 text-orange-200 dark:text-orange-100 hover:text-orange-400 dark:hover:text-orange-200 hover:cursor-pointer" />} title="Photography" description="I try to find beauty in mundane." />
      </div>
    </div>
  );
}
