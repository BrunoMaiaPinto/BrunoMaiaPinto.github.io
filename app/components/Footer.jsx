import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const socialLinks = [
  {
    href: "https://github.com/BrunoMaiaPinto",
    icon: SiGithub,
    title: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/brunommpinto/",
    icon: SiLinkedin,
    title: "LinkedIn",
  },
  {
    href: "mailto:brunommpinto@sapo.pt",
    icon: SiGmail,
    title: "Contact",
  },
];

const SocialLinks = function () {
  return (
    <ul className="flex gap-4">
      {socialLinks.map(({ href, icon: Icon, title }) => (
        <li key={title}>
          <Link href={href} target="_blank" title={title}>
            <Icon className="h-7 w-7 hover:text-slate-400 transition-colors" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default function Footer() {
  return (
    <footer className="sm:grid grid-cols-3 text-center px-10 py-4 items-center border-t border-gray-300 flex flex-col gap-2 z-10 ">
      <SocialLinks />
      <div>
        Copyright &copy; {new Date().getFullYear()} by{" "}
        <Link
          href="https://brunopinto.netlify.app/"
          className=" hover:text-slate-400 transition-colors"
          target="_blank"
        >
          Bruno Pinto
        </Link>
        . All rights reserved.
      </div>
    </footer>
  );
}
