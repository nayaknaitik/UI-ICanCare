import React from "react";
import heroImage from "../assets/disHero.svg";
import { motion } from "framer-motion";

const OralDiseaseHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      className="font-[poppins] w-full bg-white py-8 px-4 md:py-12 md:px-8 relative"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left md:ml-8 md:min-w-[500px]">
          <h1 className="text-[40px] md:text-6xl font-bold leading-8 md:leading-16  tracking-tight text-[#2987D7]">
            Tobacco Induced{" "}
            <span className="text-[#65BA34]">Oral Diseases</span> 
            <span className="text-[16px] sm:text-xl md:text-3xl block text-[#2987D7]">
              Understand the Damage & Choose to Heal
            </span>
          </h1>

          <p className="mt-2 sm:mt-6 text-[10px] sm:text-base md:text-xl text-gray-700 opacity-80 tracking-tight px-2 sm:px-0">
            Your mouth is the first battleground where tobacco wreaks havoc and induces diseases.{" "}
            <strong>Don’t ignore</strong> the signs — check symptoms, get screened, and quit tobacco before it’s too late!
          </p>

          <div className="mt-6 sm:mt-8 flex flex-row sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="appoinment"
              className="bg-[#2987D7] text-white text-lg sm:text-xl px-6 py-3 rounded-md font-medium hover:bg-[#005fa3] transition hover:scale-[105%] text-center"
            >
              Book Screening
            </a>

            <a
              href="#know"
              className="border border-black text-lg sm:text-xl px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition hover:scale-[105%] text-center"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end w-full">
          <img
            src={heroImage}
            alt="Hero"
            className="w-[90%] max-w-[310px] sm:max-w-[380px] md:max-w-xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OralDiseaseHero;
