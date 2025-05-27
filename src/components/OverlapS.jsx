import React from "react";
import { motion } from "framer-motion";

const OverlapS = () => {
  return (
    <div
      className="font-[poppins] relative max-w-7xl mx-auto bg-[#2987D7] md:rounded-3xl rounded-xl -mt-16 md:-mt-67 shadow-lg md:p-8 z-10 flex"
    >
      <div className="max-w-2xl text-left">
        <h2 className="text-xl md:text-4xl font-bold mt-5 text-black md:mt-10 ml-12 tracking-tighter">
          Upcoming Camp Details:
        </h2>
        <p className="text-xl font-medium text-gray-500 mb-6">
          
        </p>
      </div>
      <a
        href="#check-now"
        className="bg-[#2987D7] text-2xl md:text-7xl text-white md:px-16 md:py-6 rounded-lg items-center font-semibold transition text-center my-auto ml-auto"
      >
        Coming Soon!
      </a>
    </div>
  );
};

export default OverlapS;
