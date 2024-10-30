import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="flex justify-between items-center sm:px-6 px-3 py-4 border-b border-gray-300 z-10 text-xl">
      <Logo />
      <Navigation />
    </div>
  );
}
