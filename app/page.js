"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import HomePortfolio from "@/components/home_feed/HomePortfolio";
import HomeGuide from "@/components/home_feed/HomeGuide";
import Socmed from "@/components/home_feed/Socmed";
import ProgressBar from "@/components/LoadingScreen";
const LoadingScreen = () => {
  return (
    <div>
      <p className="text-white font-bold">
        This website is under development, you can view this page only from your
        mobile phone, Also some button not functional yet
      </p>
    </div>
  );
};
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

  // Buat Loading klo data belum ke render Semua
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulatePageLoad = async () => {
      const totalSteps = 100;

      for (let i = 0; i < totalSteps; i++) {
        await new Promise((resolve) => setTimeout(resolve, 10));
        setProgress(((i + 3) / totalSteps) * 100);
      }
      setIsLoading(false);
    };

    simulatePageLoad();
  }, []);
  return (
    <div>
      {isLoading ? (
        <ProgressBar progress={progress} />
      ) : (
        <div className="relative">
          <section>
            <Image
              width={700}
              height={3499}
              alt="banner euy"
              src="/banner.png"
              className="w-full h-auto absolute top-0 left-0 -z-10"
            />
            <div className=" translate-y-[14vh]">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center flex-row"
              >
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
              </motion.div>
              <div className="mt-4">
                <p className="text-white max-w-4 mobile-subtitle text-ellipsis overflow-hidden">
                  {truncatedText}
                  <button
                    onClick={toggleTruncate}
                    className="ml-1 text-purple cursor-pointer"
                  >
                    {truncated ? "More" : "Less"}
                  </button>
                </p>
              </div>
              <Socmed />
              <div className="mt-4">
                <HomePortfolio />
                <HomeGuide />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default page;
