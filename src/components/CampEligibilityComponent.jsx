import React from "react";
import tickIcon from "../assets/tickdark.svg";
import photo from "../assets/family.svg";

const CampEligibilityComponent = () => {
  const points = [
    "Tobacco Users (Smoking or Chewing Gutkha, Paan, Khaini, etc.)",
    "People with Chronic Mouth Ulcers, Red or White Patches",
    "Individuals with Difficulty in Mouth Opening (Possible OSMF)",
    "Anyone Experiencing Gum Bleeding, Loose Teeth, or Bad Breath",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto md:py-12 font-[poppins] mt-6 md:mt-12 flex gap-4 flex-row px-2 md:flex-row items-center">
      {/* Left Image Section */}
      <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
        <img
          src={photo}
          alt="Family"
          className=" ml-3 md:rounded-2xl md:ml-16 md:w-auto md:mt-12 h-55 md:h-130 object-cover"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full md:w-1/2 md:mt-16">
        <h2 className="text-[14px] md:text-4xl font-bold mb-6 tracking-tighter">
          <span className="text-[#2987D7]">Who</span> Should Attend This Camp?
        </h2>
        <ul className="space-y-2 md:space-y-4 md:mb-8 mb-4">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={tickIcon} alt="Tick" className="h-3 w-3 md:w-6 md:h-6 mt-1" />
              <p className="text-gray-800 text-[8px] md:text-lg leading-snug">{point}</p>
            </li>
          ))}
        </ul>
        <a href="appointment">
          {" "}
          <button className="bg-[#2987D7] text-white font-semibold md:px-6 md:py-3 md:w-120 w-45 md:ml-0 ml-2 rounded-md md:rounded-xl px-2 py-1 text-[10px] md:text-lg">
            Register for the Free Oral Screening Camp
          </button>
        </a>
      </div>
    </div>
  );
};

export default CampEligibilityComponent;
