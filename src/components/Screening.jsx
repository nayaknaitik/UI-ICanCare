import React from "react";
import heroImage from "../assets/screen.svg";
import { motion } from "framer-motion";

const Screening = () => {
  return (
    <div
      className="w-full h-auto md:h-screen flex items-center font-[Poppins] bg-white overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Text Left */}
        <div className="w-full md:w-1/2 mb-12 md:mb-60 ">
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold leading-10 md:leading-15 tracking-tighter text-[#2987D7]">
            <span className="text-[#65BA34]">Oral Screening
            Camp</span> – Protect Your Oral Health Today!
          </h1>
          <p className="mt-2 text-lg text-center md:text-left  md:text-2xl text-gray-800 font-medium">
            <strong>Don't Ignore</strong> Your Oral Health – Get Screened<br />
            Before It’s Too Late!
          </p>
          <div className="md:ml-0 ml-4 mt-8 flex gap-2 md:gap-4">
            <a
              href="appoinment"
              className="bg-[#2987D7] text-xl text-white md:px-8 md:py-3 px-4 py-2 rounded-md font-medium hover:bg-[#005fa3] transition hover:scale-[105%]"
            >
              Book Screening
            </a>
            <a
              href="#know"
              className="border border-black text-xl md:px-12 md:py-3 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition hover:scale-[105%]"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 sm:1/3">
          <img src={heroImage} alt="Oral Screening" className="w-full mb-3 md:mb-48 max-w-xl mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Screening;
