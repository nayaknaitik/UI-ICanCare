import React from 'react';
import pbmImage from '../assets/howIt.svg';

const HowItWorksComponent = () => {
  const steps = [
    {
      step: "01",
      title: "Low-Level Laser Light Stimulates Cell Regeneration",
    },
    {
      step: "02",
      title: "Improves Blood Circulation & Reduces Inflammation",
    },
    {
      step: "03",
      title: "Promotes Faster Tissue Healing With Collagen Production",
    }
  ];

  return (
    <div className="w-full bg-white py-8 md:py-16 px-4 md:px-8 font-[Poppins]">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-center md:gap-2">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img 
            src={pbmImage} 
            alt="PBM Treatment Process" 
            className="w-40 md:w-130 h-auto mt-10 md:mt-0 rounded-md rmd:ounded-2xl"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2">
          <h2 className="md:text-5xl text-2xl font-bold mb-4 md:mb-14">
            <span className="text-[#2987D7]">How</span> It Works?
          </h2>
          
          <div className="space-y-2 md:space-y-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex items-center bg-[#F8F8F8] rounded-md md:rounded-xl shadow-md overflow-hidden"
              >
                <div className="bg-[#2987D7] text-white text-[12px] md:text-4xl min-w-13 font-bold p-2 md:p-6 flex text-center items-center justify-center md:min-w-[140px]">
                  STEP
                  <br />
                  {step.step}
                </div>
                <h3 className="md:text-xl text-[8px] font-semibold p-2 md:p-6">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksComponent;