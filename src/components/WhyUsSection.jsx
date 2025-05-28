import React, { useEffect, useState } from "react";
import Support from "../assets/support.svg";
import Clever from "../assets/clever.svg";
import Sci from "../assets/sci.svg";
import Person from "../assets/person.svg";

const features = [
  {
    icon: Clever,
    title: "Clever Quit",
    desc: "A Strategic Exit Is The First Step Toward Smarter Beginnings",
  },
  {
    icon: Support,
    title: "Support",
    desc: "24/7 Guidance Via WhatsApp, And Expert-Led Coaching.",
  },
  {
    icon: Sci,
    title: "Scientific",
    desc: "Evidence Based And Data Driven Methodologies.",
  },
  {
    icon: Person,
    title: "Personalized",
    desc: "Every Quit Journey Is Unique, And So Is Your Plan.",
  },
];

const WhyUsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-[#DAF0FF] py-8 md:py-16 px-2 md:px-8 text-center flex flex-col justify-center items-center font-[poppins]">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="inline-block bg-white text-[#2987D7] text-[12px] font-light md:px-5 md:py-2 px-3 py-2 rounded-full shadow mb-2 md:mb-4 border-[0.49px] border-[#76ADFF]">
          WHY US ?
        </div>

        {/* Heading */}
        <h2 className="text-[14px] md:text-3xl font-bold text-gray-900 mb-4 md:mb-8 tracking-tighter">
          Why our Program works when others Fail
        </h2>

        {/* ✅ Mobile View */}
        {isMobile ? (
          <div className="grid grid-cols-2 gap-2 max-w-4xl mx-auto px-2">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex bg-white rounded-md shadow-sm overflow-hidden"
          >
            <div className="bg-[#A2DAFF] flex items-center justify-center py-3 px-3 w-20">
              <img src={item.icon} alt="" className={`${index === 3 || 2 ? 'h-8' : 'h-8'}`}
 />
            </div>
            <div className="flex flex-col justify-center px-4 py-0 text-left">
              <h3 className="text-[11px] font-bold text-black">{item.title}</h3>
              <p className="text-[7px] text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

        ) : (
          // ✅ Desktop View (UNTOUCHED)
          <>
            {/* Cards Grid */}
            <div className="grid grid-cols-4 gap-2 md:gap-8 mb-8">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl md:rounded-3xl overflow-hidden bg-white shadow-lg h-full transition-transform transform"
                >
                  {/* Top Half - Icon on light blue */}
                  <div className="bg-[#A2DAFF] w-full flex items-center justify-center h-15 md:h-56">
                    <img
                      className="h-8 md:h-24"
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>

                  {/* Bottom Half - Title and Text */}
                  <div className="bg-white p-2 md:p-8 flex flex-col justify-center items-center">
                    <h3 className="text-[10px] md:text-2xl font-bold text-black mb-1 md:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[6px] md:text-sm text-gray-600 font-extralight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-3 md:mt-10">
              <a
                href="#quit-now"
                className="bg-[#2A8CE0] hover:scale-[1.05] hover:bg-[#0061ad] text-white font-semibold text-[14px] md:text-sm px-4 md:px-6 py-2 md:py-3 rounded-md shadow-md transition inline-block text-center"
              >
                ENROLL TODAY & QUIT FOR GOOD
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WhyUsSection;
