"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function TermOfServices() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Adjust the threshold based on when you want the animation to trigger
    if (scrollY > 200) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: 50 });
    }
  };
  useEffect(() => {
    // Subscribe to scroll events when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Unsubscribe from scroll events when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-20">
      <p className="text-[10px] text-gray-400 font-bold my-2">
        Updated at : 27 Nov 2023
      </p>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mobile-title-b text-pink">
          BEFORE YOU START{" "}
          <span className="text-red-600 mobile-title-b">*</span>
        </h1>
        <ul className="ml-3 mt-1">
          <li className="mobile-subtitle list-disc text-white">
            I am a friendly and fun person hehe
          </li>
          <li className="mobile-subtitle list-disc text-white">
            By commisioning me, you accept the terms and conditions below.
          </li>
          <li className="mobile-subtitle list-disc text-white">
            There are no refunds when the project is finished.
          </li>

          <li className="mobile-subtitle list-disc text-white">
            Read carefully so there are no misunderstandings, DM is open for any
            questions.
          </li>
          <li className="mobile-subtitle list-disc text-white">
            Contact me via Discord/Twitter.
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="mobile-title-b text-pink mt-4">GENERAL TERMS</h1>
        <ul className="ml-3 mt-1">
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            I do development using OBS software, so please let me know what
            software you use for streaming so I can adjust.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            I do not provide additional assets for livechat (assets from
            clients), i only make simple assets, because i am not artist hehe.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            Work estimates can be known after discussion because it depends on
            the progress currently underway,{" "}
            <span className="font-bold">generally 2-4 weeks.</span>
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            Keep in mind that there are several shapes of Livechat design that
            are quite impossible to code, but i will try my best.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            After the project is complete, you will get a .CSS format file which
            will be sent via Google Drive.
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h1 className="mobile-title-b text-pink mt-4">PROGRESS TERMS</h1>
        <ul className="ml-3 mt-1">
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            The project will be carried out if both parties agree to start.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            I'll tell you the progress update every at least 3 days.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            You have the right to ask for progress updates
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="mobile-title-b text-pink mt-4">PAYMENT TERMS</h1>
        <ul className="ml-3 mt-1">
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            Payment can be made in full at the end of the project completion.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            Payment can be made via Dana (Virtual Account) / Trakteer for
            Infonesian, KO-FI / Paypal for international payment.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            The package price listed above is the initial price and the price
            can increase depending on the difficulty of styling Livechat.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            If there is a price increase, I will let you know when the design is
            complete.
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h1 className="mobile-title-b text-pink mt-4">USAGE TERMS</h1>

        <ul className="ml-3 mt-1">
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            One item can only be used for one person.
          </li>
          <li className="mobile-subtitle mt-[4px] list-disc text-white">
            If there are errors / other faults during use within 1 year after
            the project is completed, no repair costs will be charged.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export default TermOfServices;
