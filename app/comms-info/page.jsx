"use client";
import React, { useState, useEffect } from "react";
import Trakteer_CommsPage from "@/components/comms-info/CommsTrakteer/Trakteer_CommsPage";
import YTLC_CommsPage from "@/components/comms-info/CommsYTLC/YTLC_CommsPage";
import CommsTypeDropDown from "@/components/comms-info/CommsTypeDropDown";

const page = () => {
  const options = [
    { value: "TrakteerComms", label: "Trakteer CSS (TBA)" },
    { value: "YTLCComms", label: "Youtube Livechat CSS" },
  ];

  const [selectedOption, setSelectedOption] = useState(options[1]);

  const handleSelect = (value) => {
    setSelectedOption(options.find((option) => option.value === value));
  };

  useEffect(() => {}, [selectedOption]);

  return (
    <div className="mt-6">
      <CommsTypeDropDown
        options={options}
        selectedOption={selectedOption}
        onSelect={handleSelect}
      />

      {selectedOption && (
        <>
          {selectedOption.value === "TrakteerComms" && <Trakteer_CommsPage />}
          {selectedOption.value === "YTLCComms" && <YTLC_CommsPage />}
        </>
      )}
    </div>
  );
};

export default page;
