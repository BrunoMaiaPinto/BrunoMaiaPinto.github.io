import Button from "../components/Button";
import Image from "next/image";
import sgpt from "@/public/securepass.png";
import gps from "@/public/codigop.png";
import hedge from "@/public/hedgehog.png";
import radar from "@/public/rad.png";

export const metadata = { title: "Projects" };

const personalProjects = [
  {
    name: "SecurePassGen",
    url: "https://securepassgen-web.netlify.app/",
    thumb: sgpt,
  },
  {
    name: "Pesquisa por Código Postal",
    url: "https://gps-bmmp.netlify.app/",
    thumb: gps,
  },
  { name: "HedgehogPT", url: "https://hedgehogpt.netlify.app/", thumb: hedge },
  {
    name: "Radar Imóvel",
    url: "https://brunomaiapinto.pythonanywhere.com/",
    thumb: radar,
  },
];

const courseProjects = [
  { name: "Ominifood", url: "https://omnifood-bmmp.netlify.app/" },
  { name: "Natours", url: "https://natours-bmmp.netlify.app/" },
  { name: "trillo", url: "https://trillo-bmmp.netlify.app/" },
  { name: "nexter", url: "https://nexter-bmmp.netlify.app/" },
  {
    name: "The Wild Oasis",
    url: "https://the-wild-oasis-website-murex.vercel.app/",
  },
  { name: "Today I Learned", url: "https://today-i-learned-bmmp.netlify.app/" },
];

export default function page() {
  return (
    <div className="max-w-[820px] m-auto">
      <h1 className="text-orange-400 font-bold text-2xl mb-8">
        Personal Projects
      </h1>
      <ul className="md:grid grid-cols-2 gap-6 font-semibold mb-8">
        {personalProjects.map(({ name, url, thumb }) => (
          <li key={name}>
            <Image
              src={thumb}
              alt="SecurePassGen"
              className="object-cover object-top rounded-lg"
              quality={40}
            />
            <div className="flex justify-between items-center mt-2 mb-2 ">
              {name}
              <Button url={url}>Visite site &rarr;</Button>
            </div>
          </li>
        ))}
      </ul>

      <h1 className="text-orange-400 font-bold text-2xl mb-8">
        Course Projects
      </h1>
      <ul className="flex flex-col gap-3 font-semibold">
        {courseProjects.map(({ name, url }) => (
          <li className="flex justify-between items-center" key={name}>
            {name}
            <Button url={url}>Visite site &rarr;</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
<ul className="flex flex-col gap-3 font-semibold mb-8">
        {personalProjects.map(({ name, url }) => (
          <li className="flex justify-between items-center" key={name}>
            {name}
            <Button url={url}>Visite site &rarr;</Button>
          </li>
        ))}
      </ul>
      */
