import FeaturedBlogs from "@/components/blogs/blogs";
import ChatBotOpenButton from "@/components/chatbot/chatbot-openButton";
import ContactWebsites from "@/components/contact-websites/contact-websites";
import CurrentlyReading from "@/components/currently-reading/currently-reading";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";

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
import {getAllBlogPosts} from "./actions/contents";
import Intro from "@/components/intro/intro";
import {Container} from "@/components/layout/container";
import Rays from "@/components/intro/rays";

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  return (
    <main className="w-full mx-auto flex flex-col items-center">
      <Container>
        <IntroCard />
        <Rays />
        <Intro />
        <ContactWebsites />
        <TechStack />
        <CurrentlyReading />
        <WorkExperience />
        <Education />
        <Projects />
        <FeaturedBlogs blogPosts={blogPosts} />
        <PersonalLife />
      </Container>
    </main>
  );
}
