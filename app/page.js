"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";

import HomePortfolio from "@/components/home_feed/HomePortfolio";
import HomeGuide from "@/components/home_feed/HomeGuide";

function page() {
  const text = `Hi!, I'm a junior graphic designer and programmer, i specialize in crafting custom CSS for YouTube Livechat to elevate your livestreams. Open for commissions—let's team up for personalized CSS magic on your livestreams!`;
  const maxCharacters = 99;

  const [truncated, setTruncated] = useState(true);

  const truncateText = (text, maxCharacters) => {
    if (text.length <= maxCharacters || !truncated) {
      return text;
    }
    return text.substring(0, maxCharacters) + "...";
  };

  const toggleTruncate = () => {
    setTruncated(!truncated);
  };

  const truncatedText = truncateText(text, maxCharacters);

  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Set a timeout to add the 'hidden' class after 5 seconds
    const timeoutId = setTimeout(() => {
      setIsHidden(true);
    }, 1000);

    // Clear the timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="relative">
      <p
        className={`${
          isHidden ? "hidden" : ""
        } text-center  top-3 left-1/2 -translate-x-1/2 absolute w-[90vw] bg-white text-main font-bold z-10`}
      >
        This website is under development, you can view this page only from your
        mobile phone, Also some button not functional yet
      </p>
      <section>
        <Image
          width={700}
          height={3499}
          alt="banner euy"
          src="/banner.png"
          className="w-full h-auto absolute top-0 left-0 -z-10"
        />
        <div className=" translate-y-[14vh]">
          <div className="flex items-center flex-row">
            <Image
              width={100}
              height={10}
              alt="Foto Ku Jir"
              src="/Profile_pict.png"
            />
            <div className="ml-4 ">
              <p className="text-white text-2xl font-bold">DEK REZA</p>
              <div className="flex flex-row">
                <p class="py-1 px-2 whitespace-nowrap rounded-full bg-purple text-white font-bold text-xs">
                  Jr. Designer
                </p>
                <p class="py-1 px-2 whitespace-nowrap ml-2 bg-pink rounded-full text-white font-bold text-xs">
                  Jr. Developer
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-white max-w-4 text-ellipsis overflow-hidden">
              {truncatedText}
              <button
                onClick={toggleTruncate}
                className="ml-1 text-purple cursor-pointer"
              >
                {truncated ? "More" : "Less"}
              </button>
            </p>
          </div>
          <div className="mt-4">
            <HomePortfolio />
            <div className="flex flex-row justify-between mt-6">
              <p className="text-2xl font-bold text-pink">Might Help You</p>
              <button className="bg-secondary border-2 text-xs border-white rounded-full py-1 px-3 text-white">
                More
              </button>
            </div>
            <HomeGuide />
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
