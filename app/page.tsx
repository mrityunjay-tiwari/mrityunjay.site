import ContactWebsites from "@/components/contact-websites/contact-websites";
import CurrentlyReading from "@/components/currently-reading/currently-reading";
import Education from "@/components/education/education";
import Footer from "@/components/footer/footer";
import Intro from "@/components/intro/intro";
import IntroCard from "@/components/me/introcard";
import { Navbar } from "@/components/navbar/nav";
import Newsletter from "@/components/newsletter/letterbox";
import Projects from "@/components/projects/projects";
import TechStack from "@/components/tech-stack/tech-stack";
import ThanksMessage from "@/components/thanks/thanksmessage";
import WorkExperience from "@/components/workExperience/work-experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto flex flex-col items-center">
      <Navbar />
      <IntroCard />
      <Intro />
      <ContactWebsites />
      <TechStack />
      <CurrentlyReading />
      <WorkExperience />
      <Education />
      <Projects />
      <Newsletter />
      <ThanksMessage />
      <Footer />
    </main>
  );
}
