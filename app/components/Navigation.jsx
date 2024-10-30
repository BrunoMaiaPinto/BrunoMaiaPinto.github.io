import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex sm:gap-8 gap-4 items-center">
      <li>
        <Link href="/resume" className="hover:text-gray-400 transition-colors">
          Resume
        </Link>
      </li>

      <li>
        <Link
          href="/projects"
          className="hover:text-gray-400 transition-colors"
        >
          Projects
        </Link>
      </li>
    </ul>
  );
}
