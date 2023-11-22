import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./globals.css";

import BottomBar from "@/components/BottomBar";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "DekReza Portfolio Page",
  description: "i still thinking what kinda good description is",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" bg-main">
      <meta property="og:title" content="DekReza Portfolio Page" />
      <meta
        property="og:description"
        content="i still thinking what kinda good description is"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dxcmt3zoc/image/upload/v1700500680/Group_35_2_wiftx7.png"
      />
      <link rel="icon" href="/Profile_pict.png" />
      {/* <meta property="og:url" content="https://yourwebsite.com" /> */}
      <body className={`${inter.className} relative min-h-[100vh]`}>
        <div className="block md:hidden ">
          {children} <BottomBar />
        </div>
        <div className="hidden md:flex min-h-[100vh]">
          <p className="py-5 px-10 text-center bg-white text-main rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 font-bold text-3xl -translate-y-1/2">
            Nooo This Website is under construction for the desktop view, please
            change into mobile view
          </p>
        </div>
      </body>
    </html>
  );
}
