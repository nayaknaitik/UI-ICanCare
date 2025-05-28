import React from "react";
import { motion } from "framer-motion";
import mouth from "../assets/mouth.svg";

const RealStory = () => {
  return (
    <div
      className="bg-white md:py-16 flex flex-col items-center relative font-[poppins] mt-8"
    >
      <h2 className="text-[14px] md:text-3xl font-bold text-black text-center w-full tracking-tighter">
        Why Continued Tobacco Use Worsens Oral Conditions?
      </h2>
      <p className="text-[#2897D7]/60 text-[8px] md:text-lg text-center mb-6 leading-tight md:mt-4 tracking-tight">
        Even after treatment, continued tobacco use significantly increases the <br /> chances of recurrence, disease progression, and malignant transformation.
      </p>
      <div
        className="flex flex-row md:flex-row items-center max-w-6xl w-full h-35 md:h-full rounded-xl overflow-hidden shadow-lg bg-[#F0F9FF]"
      >
        <div className=" md:h-95 w-80 md:w-5/12">
          <img
            src={mouth}
            alt="Oral Condition"
            className="md:h-96 md:w-128 h-36 object-cover"
          />
        </div>
        <div className="w-full md:w-7/12 bg-[#F0F9FF] py-0 md:py-10 h-full">
          <div className=" text-[#161515] text-[7px] md:text-xl rounded-lg md:p-6 md:mt-0 mt-3 mb-6">
            <ul className="list-disc pl-8 pr-8 leading-relaxed">
              <li>
                For conditions like <strong>Leukoplakia & Erythroplakia</strong>, the transformation rate to cancer can reach 30% if tobacco use persists.
              </li>
              <li>
                <strong>OSMF</strong> patients who continue using tobacco have a higher chance of mouth cancer.
              </li>
              <li>
                <strong>Gum disease & periodontitis</strong> lead to tooth loss and bone deterioration in tobacco users.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="text-white px-6 py-3 rounded-lg font-semibold md:mt-8"
      >
        
      
      <div className="md:mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="/"
              className="bg-[#2987D7] text-xs md:text-xl text-white px-3 py-3 md:px-6 md:py-3 rounded-md font-medium hover:bg-[#005fa3] transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
              Quit Tobacco Now
            </a>

            <a
              href="appoinment"
              className="border border-black text-xs md:text-xl px-3 py-3 md:px-6 md:py-3 rounded-md text-black font-medium hover:bg-gray-100 transition hover:scale-[105%] cursor-pointer inline-block text-center"
            >
             Get Treated
            </a>
          </div></div>
    </div>
  );
};

export default RealStory;
