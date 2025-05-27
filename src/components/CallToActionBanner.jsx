import React from "react";
import { motion } from "framer-motion";

const CallToActionBanner = () => {
  return (
    <div
      className="w-full bg-[#DAF0FF] py-8 px-4 flex flex-col md:flex-row items-center font-[poppins] mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-between gap-3 md:gap-8">
        {/* Text Section */}
        <p className="text-sm md:text-3xl font-semibold text-left mb-4 md:mb-0 md:flex-1 ml-3 md:ml-8">
          <span className="text-[#2987D7] font-semibold">Take the First Step!</span> If you use tobacco or  smoke, your mouth is already at risk! <br /> <span className="text-[#2987D7] font-bold">Get Screened Now!</span>
        </p>
        {/* Button Section */}
        <a
          href="appoinment"
          className="bg-[#2987D7] text-xs text-white md:mr-8 font-semibold md:text-3xl px-7 py-1 md:px-12 md:py-4 rounded-lg shadow-lg hover:scale-105 transition-transform text-center"
        >
          Register for the Free Oral Screening Camp
        </a>
      </div>
    </div>
  );
};

export default CallToActionBanner;
