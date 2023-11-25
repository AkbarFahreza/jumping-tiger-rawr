import React from "react";

function PriceList() {
  return (
    <div className=" flex flex-col space-y-5 pb-[10vh] ">
      <div className="w-full min-h-[300px] overflow-hidden  rounded-xl shadow-xl bg-secondary">
        <div className="w-full h-[70px] bg-purple flex flex-row justify-between px-6 items-center">
          <h1 className="mobile-price text-white">Basic</h1>
          <div className=" text-white leading-4">
            <p className="mobile-title">
              IDR <span className="mobile-title-b"> 100K</span>
            </p>
            <p className="mobile-title">
              USD
              <span className="mobile-title-b"> 25</span>
            </p>
          </div>
        </div>
        <div className="px-6 py-3 w-full justify-center flex flex-col">
          <ul className="list-disc text-white leading-5 space-y-2">
            <li className="">
              <span className="mobile-title-b">Chat only </span>
              <span className="mobile-subtitle">
                (Supperchat Etc. default style from YouTube).
              </span>
            </li>
            <li>
              <span className="mobile-title-b">
                Support for different colors/designs between
              </span>
              <span className="mobile-subtitle">
                {" "}
                : Owner, Moderator, General Viewer, and membership.
              </span>
            </li>
            <li>
              <span className="mobile-title-b">
                {" "}
                Shapes and colors can be adjusted{" "}
              </span>
              <span className="mobile-subtitle">
                {" "}
                upon request (if possible).
              </span>
            </li>
          </ul>
          <button className="bg-secondary border-2 mobile-subtitle-b border-white rounded-full my-4  py-1 px-4 text-white hover:bg-pink transition-all duration-200">
            Detail
          </button>
        </div>
      </div>
      <div className="w-full min-h-[300px] overflow-hidden  rounded-xl shadow-xl bg-secondary">
        <div className="w-full h-[70px] bg-purple flex flex-row justify-between px-6 items-center">
          <h1 className="mobile-price text-white">Full</h1>
          <div className=" text-white leading-4">
            <p className="mobile-title">
              IDR <span className="mobile-title-b"> 200K</span>
            </p>
            <p className="mobile-title">
              USD
              <span className="mobile-title-b"> 35</span>
            </p>
          </div>
        </div>
        <div className="px-6 py-3 w-full justify-center flex flex-col">
          <ul className="list-disc text-white leading-5 space-y-2">
            <li className="">
              <span className="mobile-title-b">All Chat and Events </span>
              <span className="mobile-subtitle">
                (include Supperchat, Member Join, Member Gift, etc. ).
              </span>
            </li>
            <li>
              <span className="mobile-title-b">
                Get everything in the BASIC package
              </span>
            </li>
            <li>
              <span className="mobile-title-b">
                The superchat design can be adjusted based on Tier{" "}
              </span>
              <span className="mobile-subtitle">
                (If possible and an additional fee will be charged).
              </span>
            </li>
          </ul>
          <button className="bg-secondary border-2 mobile-subtitle-b border-white rounded-full my-4  py-1 px-4 text-white hover:bg-pink transition-all duration-200">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
