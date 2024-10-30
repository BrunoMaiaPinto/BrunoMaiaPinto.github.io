import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-semibold bg-slate-200 py-2 px-4 rounded-full hover:text-gray-400 transition-colors"
    >
      Bruno Pinto
    </Link>
  );
}
