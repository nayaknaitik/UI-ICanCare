import React from "react";
import { motion } from "framer-motion";

const Overlapping = () => {
  return (
    <div
      className="font-[poppins] relative max-w-7xl mx-auto bg-white rounded-3xl md:-mt-20 shadow-lg p-8 z-10 flex"
    >
      <div className="max-w-2xl text-left">
        <h2 className="md:text-4xl text-2xl font-bold text-black md:mb-4 mt-2 tracking-tighter">
          Are You at Risk?
        </h2>
        <p className="md:text-xl text-[10px] font-medium text-gray-500 md:mb-6">
          Take This 60-Seconds Quiz to Check if you have any early signs of oral diseases caused by tobacco.
        </p>
      </div>
      <a
        href="/"
        className="bg-[#2987D7] text-sm md:text-4xl text-white px-10 py-2 md:px-16 md:py-6 rounded-lg items-center font-semibold hover:bg-[#005fa3] transition hover:scale-[105%] cursor-pointer text-center my-auto ml-auto"
      >
        Check Now !
      </a>
    </div>
  );
};

export default Overlapping;
