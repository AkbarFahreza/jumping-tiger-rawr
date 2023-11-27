"use client";
import React from "react";
import { useState } from "react";
import PriceList from "@/components/comms-info/PriceList";
import TermOfServices from "@/components/comms-info/TermOfServices";

function Page() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabButton = (buttonName) => {
    setActiveTab(buttonName);
  };

  return (
    <div className="relative mobile-container">
      <div className="flex flex-row justify-between items-center  my-6">
        <p className="mobile-heading-b text-white">
          Status : <span className="text-yellow-500">WaitList</span>
        </p>
        <div className="flex flex-row space-x-3">
          <button
            className={`py-1 px-3 border-2 border-white text-white mobile-subtitle-b rounded-full ${
              activeTab === 1 ? "bg-pink" : "bg-secondary"
            } text-white`}
            onClick={() => handleTabButton(1)}
          >
            PriceList
          </button>
          <button
            className={`py-1 px-3 border-2 border-white text-white mobile-subtitle-b rounded-full ${
              activeTab === 2 ? "bg-pink" : "bg-secondary"
            } text-white`}
            onClick={() => handleTabButton(2)}
          >
            TOS
          </button>
        </div>
      </div>
      {activeTab === 1 && <PriceList />}
      {activeTab === 2 && <TermOfServices />}
    </div>
  );
}

export default Page;
