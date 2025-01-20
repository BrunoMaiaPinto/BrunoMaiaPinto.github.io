import Button from "../components/Button";

export const metadata = { title: "Projects" };

const projects = [
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
        Course Projects
      </h1>
      <ul className="flex flex-col gap-3 font-semibold">
        {projects.map(({ name, url }) => (
          <li className="flex justify-between items-center" key={name}>
            {name}
            <Button url={url}>Visite site &rarr;</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
