import React from "react";
import heroImage from "../assets/Advanced.svg";
import { motion } from "framer-motion";

const PhotoHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      className="font-[poppins] w-full bg-white py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 mt-16">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left md:ml-6 max-w-full md:max-w-[700px]">
          <h1 className="text-6xl md:text-7xl font-bold md:leading-18 tracking-tighter text-[#2987D7]">
            Advanced Photo Medicine
            <span className="text-[#65BA34]"> for Oral Treatment</span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-700 opacity-70 tracking-tight">
            Say goodbye to oral pain and diseases with <br />
            <strong>cutting-edge laser therapy.</strong>
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="appoinment"
              className="bg-[#2987D7] md:text-xl px-2 py-3 text-white md:px-6 md:py-3 rounded-md font-medium hover:bg-[#005fa3] transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
              Speak to an Expert
            </a>

            <a
              href="#"
              className="border border-black md:text-xl px-2 py-3 md:px-6 md:py-3 rounded-md font-medium hover:bg-gray-100 transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Advanced Photo Medicine for Oral Treatment"
            className="md:w-200 max-w-lg h-70 md:h-100 md:max-w-xl object-cover "
          />
        </div>
      </div>
    </motion.section>
  );
};

export default PhotoHero;
