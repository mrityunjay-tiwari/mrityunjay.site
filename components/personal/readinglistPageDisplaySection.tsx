import Image from "next/image";
import BlogCard from "../blogs/blogCard";
import { cn } from "@/lib/utils";
import { sans } from "@/lib/fonts";
import { IoBookSharp } from "react-icons/io5";
import BooksCard from "./bookCards";
import ArticlesCard from "./articlesCard";
import { MdArticle } from "react-icons/md";
import { GiArchiveResearch } from "react-icons/gi";

export default function ReadingListPageDisplaySection() {
  return (
    <div className="mt-5">
        <div className={cn(` font-medium text-neutral-500 mb-3.5 dark:text-neutral-100 ${sans.className} flex gap-2 items-center`) }>
            <IoBookSharp className="bg-neutral-200 p-1" />
            Books
        </div>
      <div className="grid grid-cols-2 w-full gap-12">
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/61PIpidSThL%20(1).jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Diary of a CEO"
          description="by Steven Bartlet"
          linkRef="https://www.amazon.com/Diary-CEO-Steve-Bartlet/dp/145164854X"
        />
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/limitless.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Limitless"
          description="by Jim Kwik"
          linkRef="https://www.amazon.com/Limitless-Jim-Kwik/dp/145164854X"
        />
      </div>
      <div className={cn(` font-medium text-neutral-500 mb-3.5 mt-7 dark:text-neutral-100 ${sans.className} flex gap-2 items-center`) }>
            <MdArticle className="bg-neutral-200 p-1" />
            Articles
        </div>
        <div className="grid grid-cols-2 w-full gap-12">
        <ArticlesCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20112051.png"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Lessons on building a viral consumer app"
          description="by Lenny"
          linkRef="https://www.lennysnewsletter.com/p/lessons-on-building-a-viral-consumer"
          websiteName="substack.com"
        />
        <ArticlesCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20112051.png"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="The art of viral"
          description="by Lenny"
          linkRef="https://www.lennysnewsletter.com/p/lessons-on-building-a-viral-consumer"
          websiteName="substack.com"
        />
      </div>
      <div className={cn(` font-medium text-neutral-500 mb-3.5 mt-7 dark:text-neutral-100 ${sans.className} flex gap-2 items-center`) }>
            <GiArchiveResearch className="bg-neutral-200 p-1" />
            Research Papers
        </div>
        <div className="grid grid-cols-2 w-full gap-12">
        <ArticlesCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20113154.png"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Why Do Large Language Models (LLMs) Struggle to Count Letters?"
          linkRef="https://arxiv.org/html/2412.18626v1"
          websiteName="arxiv.org"
        />
        <ArticlesCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/Screenshot%202026-01-24%20112051.png"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="The art of viral"
          linkRef="https://www.lennysnewsletter.com/p/lessons-on-building-a-viral-consumer"
        />
      </div>
    </div>
  );
}
