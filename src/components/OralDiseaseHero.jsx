import React, { useEffect, useState } from "react";
import heroImageDesktop from "../assets/disHero.svg";
import heroImageMobile from "../assets/disHero.svg";
import { motion } from "framer-motion";

const OralDiseaseHero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <section className="font-[poppins] w-full bg-white p-4 flex flex-col items-center text-center mt-12">
      {/* Heading */}
      <h1 className="text-[40px] font-bold leading-8 tracking-tighter text-[#2987D7]">
        Tobacco Induced{" "}
        <span className="text-[#65BA34]">Oral Diseases –</span>
      </h1>
      <h2 className="text-[#2987D7] text-[16px] font-semibold mt-1 mb-1">
        Understand The Damage & Choose To Heal
      </h2>

      {/* Paragraph */}
      <p className="text-[10px] text-gray-700 px-2 leading-tight opacity-90 mb-5">
        Your Mouth is the First Battleground where tobacco wreaks havoc and induces diseases.{" "}
        <strong>Don’t ignore</strong> the signs, check symptoms, get screened/treated and quit tobacco before it’s too late!
      </p>

      {/* Hero Image */}
      <img
        src={heroImageMobile}
        alt="Oral Disease Hero"
        className="w-full max-w-xs object-contain mb-5"
      />

      {/* Quiz Box */}
      <div className="w-full flex bg-white shadow-lg rounded-xl p-4 mb-5">
        <div><h3 className="text-[18px] font-bold text-left text-black">Are You At Risk?</h3>
        <p className="text-[9px] text-left text-gray-600 mt-1 mb-3 mr-3">
          Take This <strong>60-Seconds Quiz</strong> to Check if you have any early signs of oral diseases caused by tobacco.
        </p></div>
        <a
          href="#quiz"
          className="w-full bg-[#2987D7] text-white text-[14px] mt-6 h-12 py-3 rounded-lg font-semibold text-center hover:bg-[#005fa3] transition"
        >
          Check Now !
        </a>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full">
        <a
          href="appointment"
          className="flex-1 bg-[#2987D7] text-white text-[13px] py-3 rounded-md font-semibold text-center hover:bg-[#005fa3] transition"
        >
          Get Treatment
        </a>
        <a
          href="#know"
          className="flex-1 border border-black text-[13px] py-3 rounded-md font-semibold text-center hover:bg-gray-100 transition"
        >
          Know More
        </a>
      </div>
    </section>
  ) : (
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
          <h1 className="text-[40px] md:text-6xl font-bold leading-8 md:leading-16 tracking-tight text-[#2987D7]">
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
              href="appointment"
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
            src={heroImageDesktop}
            alt="Hero"
            className="w-[90%] max-w-[310px] sm:max-w-[380px] md:max-w-xl object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default OralDiseaseHero;
