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
            <IoBookSharp className="bg-neutral-200 dark:bg-gray-700 p-1 rounded w-4.5 h-4.5" />
            Books
        </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 w-full md:gap-12 gap-8">
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/books/pathless-path.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="The Pathless Path"
          description="by Paul Millerd"
          linkRef="https://www.amazon.in/Pathless-Path-Imagining-Story-Work-ebook/dp/B09QF1ZCT2"
        />
        
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/books/hell-yeah-or-no.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Hell Yeah or No"
          description="by Derek Sivers"
          linkRef="https://www.amazon.in/Hell-Yeah-No-whats-worth-ebook/dp/B09YY9W9B3"
        />
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/books/limitless%202.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Limitless"
          description="by Jim Kwik"
          linkRef="https://www.amazon.in/Limitless-Upgrade-Anything-Faster-Exceptional/dp/1401958230"
        />
        <BooksCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/books/the-first-and-last-freedom.jpg"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="The First and Last Freedom"
          description="by Jiddu Krishnamurti"
          linkRef="https://www.amazon.in/First-Last-Freedom-J-Krishnamurti/dp/1846043751"
        />
      </div>
      <div className={cn(` font-medium text-neutral-500 mb-3.5 mt-7 dark:text-neutral-100 ${sans.className} flex gap-2 items-center`) }>
            <MdArticle className="bg-neutral-200 dark:bg-gray-700 p-1 rounded w-4.5 h-4.5" />
            Articles
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-12">
        <ArticlesCard
          blogImage={
            <Image
              src="https://ik.imagekit.io/mrityunjay/books/lenny's-newsletter.png"
              alt=""
              width={400}
              height={400}
              className="overflow-hidden rounded-t-xl"
            />
          }
          title="Lessons on building a viral consumer app."
          description="by Lenny Rachitsky"
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
            <GiArchiveResearch className="bg-neutral-200 dark:bg-gray-700 p-1   rounded w-4.5 h-4.5" />
            Research Papers
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-12">
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
