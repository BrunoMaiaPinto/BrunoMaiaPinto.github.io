import Button from "../components/Button";

export const metadata = { title: "Projects" };

export default function page() {
  return (
    <div className="max-w-[820px] m-auto">
      <h1 className="text-orange-400 font-bold text-2xl mb-8">
        Course Projects
      </h1>
      <ul className="flex flex-col gap-3 font-semibold">
        <li className="flex justify-between items-center">
          Ominifood
          <Button url="https://omnifood-bmmp.netlify.app/">
            Visite site &rarr;
          </Button>
        </li>

        <li className="flex justify-between items-center">
          Natours
          <Button url="https://natours-bmmp.netlify.app/">
            Visite site &rarr;
          </Button>
        </li>

        <li className="flex justify-between items-center">
          trillo
          <Button url="https://trillo-bmmp.netlify.app/">
            Visite site &rarr;
          </Button>
        </li>

        <li className="flex justify-between items-center">
          nexter
          <Button url="https://nexter-bmmp.netlify.app/">
            Visite site &rarr;
          </Button>
        </li>

        <li className="flex justify-between items-center">
          The Wild Oasis
          <Button url="https://the-wild-oasis-website-murex.vercel.app/">
            Visite site &rarr;
          </Button>
        </li>
      </ul>
    </div>
  );
}
