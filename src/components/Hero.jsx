import React, { useEffect, useState } from "react";
import heroImage from "../assets/Screenshot from 2025-04-26 22-44-56.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <section className="font-[poppins] w-full bg-white p-4 flex flex-col items-center text-center">
      {/* Headline */}
      <h1 className="text-[40px] font-bold leading-9 tracking-tighter mt-4 text-[#2987D7]">
        Quit Smoking & Tobacco
        <span className="block text-[#65BA34]">in 3 simple Steps!</span>
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-[14px] text-gray-700 opacity-80">
        Quit comfortably from home with our Proven{" "}
        <strong>12-Week Cessation</strong> Intervention Program.
      </p>

      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero"
        className="w-full max-w-xs mt-5 mb-6 rounded-xl object-cover"
      />

      {/* Buttons */}
      <div className="flex flex-row items-center justify-center gap-3 w-full">
        <a
          href="#quit-now"
          className="bg-[#2987D7] text-white px-5 text-[13px] py-3 rounded-full font-medium hover:bg-[#005fa3] transition text-center"
        >
          Start Your Quit Journey Now
        </a>
        <a
          href="#know-more"
          className="border border-black text-[13px] px-5 py-3 rounded-full font-medium hover:bg-gray-100 transition text-center"
        >
          Know More
        </a>
      </div>
    </section>
  ) : (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      className="font-[poppins] w-full bg-white py-12 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left md:ml-6 max-w-full md:max-w-[700px]">
          <h1 className="text-[40px] md:text-7xl font-bold leading-10 md:leading-16 tracking-tighter text-[#2987D7]">
            Quit Smoking & Tobacco
            <span className="text-[#65BA34]"> in 3 Simple Steps!</span>
          </h1>
          <p className="md:mt-6 mt-3 text-[14px] md:text-xl text-gray-700 opacity-70 leading-4 md:leading-6 tracking-tight">
            Quit comfortably from home with our Proven
            <strong> 12-Week Cessation</strong> Intervention Program
          </p>
          <div className="mt-8 flex gap-2 md:gap-4 justify-center md:justify-start">
            <a
              href="#quit-now"
              className="bg-[#2987D7] text-[13px] md:text-xl text-white px-6 py-3 rounded-full font-medium hover:bg-[#005fa3] transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
              Start Your Quit Journey Now
            </a>

            <a
              href="#know-more"
              className="border border-black md:text-xl text-[13px] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg md:max-w-xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
