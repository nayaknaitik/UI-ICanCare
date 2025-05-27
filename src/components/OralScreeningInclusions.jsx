import React from "react";
import tick from "../assets/tickdark.svg";

const OralScreeningInclusions = () => {
  return (
    <div className="w-full max-w-6xl mx-auto md:py-12 py-8 md:mt-20 px-4 font-[poppins]">
      <h2 className="text-[14px] md:text-4xl font-bold text-center mb-2">
        What’s Included in the{" "}
        <span className="text-[#2987D7]">Free Oral Screening</span>?
      </h2>
      <p className="text-center text-gray-500 text-[7px] md:text-xl max-w-3xl mx-auto mb-4 md:mb-10">
        This screening camp offers{" "}
        <span className="font-semibold">comprehensive oral Examination</span> by
        specialists, valuable insights, and affordable solutions—all in one
        convenient visit
      </p>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
        {/* Discounts Card */}
        <div className="bg-[#DAF0FF] rounded-xl shadow-lg border-1 border-gray-100">
          <div className="bg-[#f8f8f8] px-2 py-3 md:px-6 md:py-4 rounded-t-xl shadow-md">
            <h3 className="text-[10px] md:text-3xl font-bold text-center">
              Exclusive Discounts & Offers
            </h3>
          </div>
          <div className="md:p-6 p-3 space-y-2 md:space-y-4">
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900 text-[8px] md:text-2xl font-light">
                Up to{" "}
                <span className="text-[#2987D7] font-bold text-[10px] md:text-3xl">40%</span>{" "}
                Discount on LAB Tests
                <br />
                <span className="text-[8px] md:text-2xl">
                  (Free home collection available)
                </span>
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                Up to{" "}
                <span className="text-[#2987D7] text-[10px] md:text-3xl font-bold">20%</span>{" "}
                Discount on Quit <br /> Tobacco Products
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                <span className="text-[#2987D7] text-[10px] md:text-3xl font-bold">10%</span>{" "}
                Discount on Quit Tobacco Consultation
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                Oral Lesion Procedures Available at{" "}
                <span className="text-[#2987D7] font-bold">Special Rates</span>
              </p>
            </div>
          </div>
        </div>

        {/* Services Card */}
        <div className="bg-[#DAF0FF] rounded-xl shadow-md">
          <div className="bg-[#f8f8f8] md:px-6 py-3 md:py-4 rounded-t-xl  shadow-lg border-1 border-gray-100">
            <h3 className="text-[10px] md:text-3xl font-bold text-center">
              Oral & Health Care Services
            </h3>
          </div>
          <div className="md:p-6 p-3 space-y-2 md:space-y-4">
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                <span className="text-[#2987D7] font-semibold text-[10px] md:text-3xl">Advanced</span>{" "}
                Spectroscopy Examination by IIT Delhi
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                <span className="text-[#2987D7] font-semibold text-[10px] md:text-3xl">Expert</span>{" "}
                Consultation on Oral Hygiene & Care
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                <span className="text-[#2987D7] font-semibold text-[10px] md:text-3xl">Free</span> BP, Blood
                Sugar, Spirometry & CO Level Test for Smokers
              </p>
            </div>
            <div className="flex items-start gap-3">
              <img src={tick} alt="" className="h-5 md:h-10"/>
              <p className="text-gray-900  text-[8px] md:text-2xl font-light">
                <span className="text-[#2987D7] font-semibold text-[10px] md:text-3xl">Free</span> Oral
                Hygiene Kit by Colgate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralScreeningInclusions;
