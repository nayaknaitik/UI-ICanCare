import React from "react";
import pbmImage from "../assets/Pbmimage.svg";
import { CheckCircle2 } from "lucide-react";

const conditions = [
  "Mouth Ulcers & Oral Lesions",
  "Burning Mouth Syndrome & OSMF",
  "Gum Inflammation & Periodontitis",
  "Leukoplakia & Oral Pre-Cancerous Conditions",
  "Pain Relief After Dental Procedures",
  "Smoker's Palate, Smoker's Lip & Oral Melanosis",
  "Tobacco Quid Keratosis & Nicotinic Stomatitis",
  "All other tobacco induced conditions"
];

const PBMTherapyConditions = () => {
  return (
    <div className="w-full bg-[#DAF0FF] flex items-center justify-center py-6 md:py-16 px-5 md:px-8 mt-4 md:mt-12 font-[Poppins]">
      <div className="max-w-5xl mx-auto flex flex-row md:flex-row items-center justify-center md:gap-12">
        {/* Left Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="leading-5 md:leading-10 md:text-4xl text-[14px] font-bold mb-3 md:mb-8">
            Conditions Treated With
            <span className="text-[#2987D7]"> PBM Therapy</span>
          </h2>
          
          <div className="spcae-y-0 md:space-y-4 leading-3">
            {conditions.map((condition, index) => (
              <div 
                key={index}
                className="flex items-center gap-1 md:gap-3"
              >
                <CheckCircle2 className="md:w-6 md:h-6 w-3 h-3 text-[#65BA34] flex-shrink-0" />
                <span className="text-[8px] tracking-tighter md:text-lg text-gray-800">{condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-70 md:w-1/2">
          <img 
            src={pbmImage} 
            alt="PBM Treatment" 
            className="w-full h-auto md:rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PBMTherapyConditions;
