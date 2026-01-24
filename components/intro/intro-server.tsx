import {GlimpseTextServer} from "./glimpse-text-server";
import IntroClient from "./intro-client";

export default async function Intro() {
  return (
    <IntroClient>
      I build <GlimpseTextServer text="interactive web apps" /> with a focus on{" "}
      <GlimpseTextServer text="UX" /> , and contribute to open source. I love
      building products that solve real-world problems with an eye on both
      engineering and <GlimpseTextServer text="product thinking" />
      <div className="flex items-center gap-1">
        Currently, learning and building{" "}
        <GlimpseTextServer text="AI Native applications" />
      </div>
    </IntroClient>
  );
}
