// ProgressBar.js
import Image from "next/image";
import React from "react";

const ProgressBar = ({ progress }) => {
  return (
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
  );
};

export default ProgressBar;
