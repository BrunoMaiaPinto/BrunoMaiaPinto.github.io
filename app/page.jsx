import bg from "@/public/bg.jpg";
import Image from "next/image";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { icon: SiHtml5, title: "HTML" },
  { icon: SiCss3, title: "CSS" },
  { icon: SiSass, title: "SASS" },
  { icon: SiTailwindcss, title: "Tailwind CSS" },
  { icon: SiJavascript, title: "JavaScript" },
  { icon: SiReact, title: "React" },
  // { icon: SiPython, title: "Python" },
  // { icon: SiNodedotjs, title: "Node.js" },
];

const Skills = function () {
  return (
    <div className="flex justify-center gap-6 mt-4">
      {skills.map(({ icon: Icon, title }) => (
        <Icon key={title} className="h-10 w-10" title={title} />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main>
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={40}
        className="object-cover object-top opacity-20 grayscale blur-[2px]"
        alt="Laptop coding desk"
      />

      <div className="relative z-10 text-center">
        <h1 className="sm:text-8xl text-6xl mb-10 tracking-tight font-normal">
          Hello there, I&apos;m Bruno!
        </h1>
        <p className="sm:text-4xl text-3xl mb-5">
          Junior Front-End Web Developer
        </p>
        <h2 className="text-2xl">Technical Skills:</h2>
        <Skills />
      </div>
    </main>
  );
}