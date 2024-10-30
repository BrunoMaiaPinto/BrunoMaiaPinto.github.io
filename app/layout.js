import Footer from "./components/Footer";
import Header from "./components/Header";

import "@/app/globals.css";

export const metadata = {
  title: {
    template: "Bruno Pinto | %s",
    default: "Bruno Pinto",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid h-screen grid-rows-[auto_1fr_auto] relative">
        <Header />
        <div className=" px-8 py-8 overflow-scroll">
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
