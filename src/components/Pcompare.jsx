import React from "react";
import { motion } from "framer-motion";
import Cross from "../assets/cross.svg";
import Tick from "../assets/tick.svg";

const Pcompare = () => {
  const data = [
    {
      feature: "Pain Free & Non-invasive",
      pbmTherapy: "check",
      traditionalTreatments: "cross",
      isIcon: true,
    },
    {
      feature: "No Drugs or Side Effects",
      pbmTherapy: "check",
      traditionalTreatments: "cross",
      isIcon: true,
    },
    {
      feature: "Faster Healing & No Downtime",
      pbmTherapy: "check",
      traditionalTreatments: "cross",
      isIcon: true,
    },
    {
      feature: "Clinically Proven & Safe",
      pbmTherapy: "check",
      traditionalTreatments: "cross",
      isIcon: true,
    },
  ];

  return (
    <div className="max-w-5xl md:w-full mx-auto font-[poppins] px-2 md:py-8 md:p-8 rounded-3xl py-12 md:mt-12">
      {/* Heading */}
      <div className="text-center mb-4 md:mb-9">
        <h2 className="text-[14px] md:text-2xl lg:text-3xl font-bold tracking-tighter">
          <span className="text-[#2987D7]">Why</span> Choose PBM Therapy Over Traditional Treatments?
        </h2>
        <p className="text-gray-600 mt-1 tracking-tighter text-[8px] md:text-base">
          "Free quitlines don't work for most people. Our structured program gives you real results."
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
                PBM Therapy
              </th>
              <th className="py-2 md:py-4 px-2 md:px-6 text-center text-[10px] md:text-xl font-bold border border-[#2987D7]">
                Traditional Treatments
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

                {/* PBM Therapy Cell */}
                <td className="py-2 md:py-4 px-2 md:px-6 text-center border border-[#2987D7] text-[10px] md:text-base">
                  {item.isIcon ? (
                    <div className="flex justify-center items-center">
                      <img src={Tick} alt="check" className="h-3 md:h-6 w-3 md:w-6" />
                    </div>
                  ) : (
                    item.pbmTherapy
                  )}
                </td>

                {/* Traditional Treatments Cell */}
                <td className="py-2 md:py-4 px-2 md:px-6 text-center border border-[#2987D7] text-[10px] md:text-base">
                  {item.isIcon ? (
                    <div className="flex justify-center items-center">
                      <img src={Cross} alt="cross" className="h-3 md:h-6 w-3 md:w-6" />
                    </div>
                  ) : (
                    item.traditionalTreatments
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

export default Pcompare;
