"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function BottomBar() {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log("Current Path:", currentPath);
  return (
    <div className="w-full bg-secondary py-2 flex flex-row justify-evenly fixed bottom-0 left-0">
      <p
        className={`mt-1 text-center text-xs ${
          router.pathname === "/portfolio" ? "text-pink" : "text-white"
        }`}
      >
        Dek Reza
      </p>
    </div>
  );
}

export default BottomBar;
