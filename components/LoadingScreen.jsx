// ProgressBar.js
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const ProgressBar = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[100vh] relative w-full bg-secondary ">
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%]">
          <Image
            src="/logo.png"
            className="mx-auto"
            width={200}
            height={127}
            alt="logo"
          />
          <p className="text-[10px] font-bold my-4 mb-2 text-white text-center">
            Render Commponents...
          </p>
          <div className="w-[30vh] mx-auto h-2 rounded-full overflow-hidden bg-gray-300">
            <div
              className="h-full bg-gradient-to-r from-pink to-purple transition-all duration-[0.3]"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
