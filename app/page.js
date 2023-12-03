"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import HomePortfolio from "@/components/home_feed/HomePortfolio";
import HomeGuide from "@/components/home_feed/HomeGuide";
import Socmed from "@/components/home_feed/Socmed";
import ProgressBar from "@/components/LoadingScreen";
import DesktopSocmed from "@/components/home_feed/DesktopSocmed";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <section>
            <Image
              width={700}
              height={3499}
              alt="banner euy"
              src="/banner.png"
              className="w-full md:hidden h-auto absolute top-0  left-0 -z-10"
            />
            <div className=" translate-y-[14vh] md:translate-y-[5vh] md:m-auto lg:w-[60%]">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="flex items-center flex-row md:flex md:flex-col"
              >
                <Image
                  width={100}
                  height={10}
                  alt="Foto Ku Jir"
                  src="/Profile_pict.png"
                  className="md:w-32 md:h-32"
                />
                <div className="ml-4 md:m-auto md:mt-6 md:flex md:flex-col md:justify-center">
                  <p className="text-white text-2xl md:text-3xl font-bold md:text-center">
                    DEK REZA
                  </p>
                  <div className="flex flex-row md:m-auto md:mt-4">
                    <p class="py-1 px-2 whitespace-nowrap rounded-full bg-purple text-white font-bold text-xs md:text-sm ">
                      Jr. Designer
                    </p>
                    <p class="py-1 px-2 whitespace-nowrap ml-2 bg-pink rounded-full text-white font-bold text-xs md:text-sm ">
                      Jr. Developer
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-4 md:mt-7 md:max-w-4xl md:mx-auto md:text-center"
              >
                <p className="text-white hidden md:flex  text-md">{text}</p>
                <p className="text-white  mobile-subtitle  md:hidden overflow-hidden">
                  {truncatedText}
                  <button
                    onClick={toggleTruncate}
                    className="ml-1 text-purple cursor-pointer"
                  >
                    {truncated ? "More" : "Less"}
                  </button>
                </p>
              </motion.div>
              <Socmed />
              <DesktopSocmed />
              <div className="mt-4">
                <HomePortfolio />
                <HomeGuide />
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </div>
  );
}

export default page;
