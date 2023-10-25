"use client";
import { Inter } from "next/font/google";
import Header from "./header/Header.js";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });
export const siteTitle = "https://brandonhart.dev/";

function RootLayout({ children }) {
  return (
    <main
      className={`${inter.className} grid grid-rows-12 md:h-auto lg:h-screen lg:grid-cols-4`}
    >
      <Header />
      <div className="flex flex-col row-span-3 lg:col-span-3 lg:overflow-x-hidden lg:overflow-y-scroll">
        {children}
      </div>
    </main>
  );
}

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });
