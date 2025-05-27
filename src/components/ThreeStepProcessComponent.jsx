import React from "react";
import { motion } from "framer-motion";
import BuildingIcon from "../assets/building.svg";
import ClipboardIcon from "../assets/clipboard.svg";
import SmileIcon from "../assets/smile.svg";

const steps = [
  {
    number: "01",
    icon: BuildingIcon,
    title: "Book Visit",
    desc: "Book an initial PBM Consultation"
  },
  {
    number: "02", 
    icon: ClipboardIcon,
    title: "Get Plan",
    desc: "Visit the centre and Get a Customized PBM Treatment Plan"
  },
  {
    number: "03",
    icon: SmileIcon,
    title: "Heal Well",
    desc: "Experience Pain-Free Healing"
  }
];

const ThreeStepProcessComponent = () => {
  return (
    <div
      className="w-full  py-16 px-4 md:px-8 text-center flex flex-col justify-center items-center font-[poppins]"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#2987D7] mb-2 tracking-tight">How <span className="text-black">to Get Started?</span></h2>
      <p className="text-lg text-[#2987D7] font-light mb-12">Simple 3 Step Process</p>
      
      {/* Steps Grid with Centered Connecting Lines */}
      <div className="flex flex-row sm:flex-row items-start justify-center w-88 md:w-full relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            {/* Step */}
            <div className="flex flex-col items-center relative z-10 md:max-w-[15%]">
              <div className="relative mb-2 md:mb-4">
                <span className="absolute md:-top-4 md:-left-4 bg-black text-white rounded-full md:w-10 md:h-10 w-5 h-5 flex items-center justify-center text-[13px] md:text-lg font-bold">{step.number}</span>
                <div className="bg-[#2987D7] w-15 h-15 md:w-24 md:h-24 rounded-full flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="h-9 md:h-14" />
                </div>
              </div>
              <h3 className="md:text-2xl text-md font-bold text-black mb-2 md:mb-4 leading-4 tracking-tighter">{step.title}</h3>
              <p className="text-gray-600 font-light text-[8px] md:text-lg leading-3  md:leading-5  text-center tracking-tighter">{step.desc}</p>
            </div>
            
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div className="sm:block  h-1 rounded-2xl bg-[#2987D7] w-40 md:w-32 mt-8 md:mt-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ThreeStepProcessComponent;