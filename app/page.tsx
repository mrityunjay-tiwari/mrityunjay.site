import FeaturedBlogs from "@/components/blogs/blogs";
import ChatBotOpenButton from "@/components/chatbot/chatbot-openButton";
import ContactWebsites from "@/components/contact-websites/contact-websites";
import CurrentlyReading from "@/components/currently-reading/currently-reading";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro-server";
// import Intro from "@/components/intro/intro";
import IntroCard from "@/components/me/introcard";
import {Navbar} from "@/components/navbar/nav";
import Newsletter from "@/components/newsletter/letterbox";
import PersonalLife from "@/components/personal/personal";
import BentoGrid from "@/components/photography/bento";
import ExpandableGallery from "@/components/photography/expandable-gallery";
import Projects from "@/components/projects/projects";
import TechStack from "@/components/tech-stack/tech-stack";
import ThanksMessage from "@/components/thanks/thanksmessage";
import WorkExperience from "@/components/workExperience/work-experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full mx-auto flex flex-col items-center">
      <IntroCard />
      <Intro />
      <ContactWebsites />
      <TechStack />
      <CurrentlyReading />
      <WorkExperience />
      <Education />
      <Projects />
      <FeaturedBlogs />
      <PersonalLife />
      <Newsletter />
      <ThanksMessage />

      <ChatBotOpenButton />
    </main>
  );
}
