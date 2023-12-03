"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function DesktopNavBar() {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
      <div className="w-12 flex flex-col gap-1 justify-center h-12 bg-pink rounded-full fixed bottom-11 right-11">
        <span className="w-5 h-[4px] bg-white mx-auto"></span>
        <span className="w-5 h-[4px] bg-white mx-auto"></span>
        <span className="w-5 h-[4px] bg-white mx-auto"></span>
      </div>
      <div className="bg-secondary">
        <Link href="/">
          <div className="flex flex-row justify-center">
            <Image
              width={24}
              height={24}
              alt="Image"
              src="/Profile_pict.png"
              className={`m-auto border-2  rounded-full transition-all duration-300 ${
                pathname === "/" ? "border-pink" : "border-white"
              }`}
            />

            <p
              className={`mt-1 text-center text-xs transition-all duration-300 ${
                pathname === "/"
                  ? "text-pink font-medium"
                  : "text-white font-medium"
              }`}
            >
              Dek Reza
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default DesktopNavBar;
