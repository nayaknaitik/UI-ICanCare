import React from "react";
import { motion } from "framer-motion";

const PhotoMedicineBanner = () => {
  return (
    <div
      className="w-full bg-[#DAF0FF] md:py-12 px-8 flex flex-row md:flex-row items-center font-[poppins] mt-12 md:mt-24"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <p className="text-[12px] md:text-3xl md:leading-8 leading-3 font-semibold text-left mt-4 mb-4 md:mb-0 md:flex-1 md:ml-8">
          <span className="text-[#2987D7] font-semibold">The Good News!</span> All the conditions can be <br />treated  with  <span className="text-[#2987D7] font-bold">Photo-Medicine and Tobacco Cessation.</span>
        </p>
        {/* Button Section */}
        <a
          href="oral-treatment"
          className="bg-[#2987D7] text-white md:mr-8 text-[10px] font-semibold md:text-xl px-5 py-1 md:px-8 md:py-4 rounded-lg shadow-lg hover:scale-105 transition-transform text-center"
        >
          Learn More about Photo-Medicine
        </a>
      </div>
    </div>
  );
};

export default PhotoMedicineBanner;
