import React from "react";
import { motion } from "framer-motion";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";

function Steps() {
  return (
    <section
      className="w-full py-10 md:py-12 px-2 md:px-6 font-[poppins]"
      id="know-more"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-[14px] md:text-4xl !font-extrabold text-center text-black mb-2 md:mb-4 tracking-tight">
          The Science Behind our <span className="text-[#2987D7]">12-Week</span>{" "}
          Program
        </h2>

        {/* Subtext */}
        <p className="text-center text-[7px] md:text-base mb-12 md:mb-28 text-gray-600 px-2 md:px-4">
          Backed by research, our three-step program ensures a{" "}
          <strong className="text-[#2987D7]">82% success rate</strong> than
          quitting cold turkey. <br className="hidden md:block" />A dedicated quit coach and tobacco
          cessation specialist handholds you in your journey tailoring your quit
          plan to your needs.
        </p>

        {/* Step Cards */}
        <div className="flex flex-row justify-center gap-1 md:gap-6 mb-8">
          {[1, 2, 3].map((step, index) => (
            <div
              key={index}
              className="relative bg-[#F8F8F8] shadow-lg md:min-h-110 rounded-xl px-1 md:px-2 pt-12 md:pt-16 pb-4 md:pb-6 w-33 md:w-80 text-center overflow-visible"
            >
              {/* Step Circle */}
              <div className="absolute -top-6 md:-top-10 leading-5 left-1/2 transform -translate-x-1/2 bg-[#2987D7] text-white w-16 h-16 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center font-semibold shadow-md">
                <span className="text-[10px] md:text-2xl tracking-widest -mt-2 md:-mt-0">STEP</span>
                <span className="text-[28px] md:text-6xl font-extrabold">
                  {step === 1 ? "01" : step === 2 ? "02" : "03"}
                </span>
              </div>

              {/* Step Content */}
              {step === 1 && (
                <>
                  <h3 className="text-[10px] md:text-2xl leading-3 md:leading-7 font-semibold text-gray-800 md:mb-2 mt-2 md:mt-8">
                    Cravings & Withdrawals Management
                  </h3>
                  <p className="text-[10px] md:text-base font-semibold mb-5 md:mb-0">(4 Weeks)</p>
                  <div className="w-[90%] h-[1px] md:h-[2px] bg-[#2987D7] mx-auto my-2 md:my-4"></div>
                  <p className="text-[6px] md:text-sm text-gray-600 mb-2 md:mb-4 mt-1 md:mt-2 font-light px-1 md:px-0">
                    Learn to cope with intense cravings and manage withdrawal
                    symptoms through evidence-based techniques. This step builds
                    the foundation for long-term success.
                  </p>
                  
                </>
              )}
              {step === 2 && (
                <>
                  <h3 className="text-[10px] md:text-2xl leading-3 md:leading-7 font-semibold text-gray-800 mb-1 md:mb-2 mt-2 md:mt-8">
                    Triggers & Cues Management
                  </h3>
                  <p className="text-[10px] md:text-base font-semibold mb-4">(4 Weeks)</p>
                  <div className="w-[90%] h-[1px] md:h-[2px] bg-[#2987D7] mx-auto my-2 md:my-4"></div>
                  <p className="text-[6px] md:text-sm text-gray-600 mb-2 md:mb-4 mt-1 md:mt-2 font-light px-1 md:px-0">
                    Identify personal triggers, such as stress, social
                    situations, or habits and develop powerful coping strategies
                    to overcome them. You'll gain tools to stay in control when
                    faced with temptations!
                  </p>
                 
                </>
              )}
              {step === 3 && (
                <>
                  <h3 className="text-[10px] md:text-2xl leading-3 md:leading-7 font-semibold text-gray-800 md:mb-2 mt-2 md:mt-8">
                    Relapse Prevention & Control
                  </h3>
                  <p className="text-[8px] md:text-base font-semibold md:mb-3 mb-5">(4 Weeks)</p>
                  <div className="w-[90%] h-[1px] md:h-[2px] bg-[#2987D7] mx-auto my-2 md:my-4"></div>
                  <p className="text-[6px] md:text-sm text-gray-600 mb-2 md:mb-4 mt-1 md:mt-2 font-light px-1 md:px-0">
                    Equip yourself with relapse prevention toolkit, including
                    strategies to handle setbacks, stay motivated, and rebuild
                    momentum. Stay tobacco-free long-term and detox with lung-cleansing
                    exercises and lifestyle changes!
                  </p>
                  
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <a href="#quit-now">
            <button className="bg-[#2987D7] text-white px-4 md:px-8 py-2 md:py-3 rounded-md text-[14px] md:text-lg font-semibold hover:bg-blue-700 transition duration-300">
              ENROLL TODAY & QUIT FOR GOOD
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Steps;
