import React from "react";
import { motion } from "framer-motion";
import Cross from "../assets/cross.svg";
import Tick from "../assets/tick.svg";

const ComparisonSection = () => {
  const data = [
    {
      feature: "Success Rate",
      freeQuitlines: "~38.5%",
      ourProgram: "82%",
      isIcon: false,
    },
    {
      feature: "Personalized Support",
      freeQuitlines: "cross",
      ourProgram: "check",
      isIcon: true,
    },
    {
      feature: "Quit Coach",
      freeQuitlines: "cross",
      ourProgram: "check",
      isIcon: true,
    },
    {
      feature: "Data Track & Progress Monitor",
      freeQuitlines: "cross",
      ourProgram: "check",
      isIcon: true,
    },
    {
      feature: "Medication",
      freeQuitlines: "cross",
      ourProgram: "check",
      isIcon: true,
    },
  ];

  return (
   
      <div className="max-w-5xl mx-auto font-[poppins] p-2 md:p-8 rounded-3xl mt-6 md:mt-12">
        {/* Heading */}
        <div className="text-center mb-4 md:mb-9">
          <h2 className="text-[14px] md:text-2xl lg:text-3xl font-bold tracking-tighter">
            <span className="text-[#2987D7]">Why</span> Choose Us Over Free
            Quitlines?
          </h2>
          <p className="text-gray-600 mt-1 tracking-tighter text-[8px] md:text-base">
            "Free quitlines don't work for most people. Our structured program
            gives you real results."
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#2987D7]">
            <thead>
              <tr className="bg-[#A2DAFF] text-black">
                <th className="py-2 md:py-4 px-2 md:px-6 text-left text-[10px] md:text-xl font-bold border border-[#2987D7]">
                  Features
                </th>
                <th className="py-2 md:py-4 px-2 md:px-6 text-center text-[10px] md:text-xl font-bold border border-[#2987D7]">
                  Free Quitlines
                </th>
                <th className="py-2 md:py-4 px-2 md:px-6 text-center text-[10px] md:text-xl font-bold border border-[#2987D7]">
                  Our Program
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-[#F2F5F8]">
                  {/* Feature Name */}
                  <td className="py-2 md:py-4 px-2 md:px-6 font-semibold text-[10px] md:text-xl border border-[#2987D7] bg-[#A2DAFF]">
                    {item.feature}
                  </td>

                  {/* Free Quitlines Cell */}
                  <td className="py-2 md:py-4 px-2 md:px-6 text-center border border-[#2987D7] text-[10px] md:text-base">
                    {item.isIcon ? (
                      <div className="flex justify-center items-center">
                        <img src={Cross} alt="cross" className="h-3 md:h-6 w-3 md:w-6" />
                      </div>
                    ) : item.feature === "Success Rate" ? (
                      <span>
                        ~38.5% <sup>
                          <a
                            href="https://ecancer.org/en/journal/article/1777-factors-influencing-tobacco-quitting-findings-from-national-tobacco-quitline-services-mumbai-india#:~:text=Of%20these%2C%20127%2C163%20(28.3%25),important%20role%20in%20tobacco%20control.&text=Publication%20costs%20for%20this%20article,(UK%20Charity%20number%201176307)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline text-[8px] md:text-sm"
                          >
                            [1]
                          </a>
                        </sup>
                      </span>
                    ) : (
                      item.freeQuitlines
                    )}
                  </td>

                  {/* Our Program Cell */}
                  <td className="py-2 md:py-4 px-2 md:px-6 text-center border border-[#2987D7] text-[10px] md:text-base">
                    {item.isIcon ? (
                      <div className="flex justify-center items-center">
                        <img src={Tick} alt="check" className="h-3 md:h-6 w-3 md:w-6" />
                      </div>
                    ) : (
                      item.ourProgram
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    
  );
};

export default ComparisonSection;
