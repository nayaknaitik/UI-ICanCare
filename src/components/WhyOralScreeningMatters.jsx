import React from "react";
import photo from "../assets/rplaceholder.svg";
const WhyOralScreeningMatters = () => {
  const steps = [
    {
      number: "01",
      title: "Prevents Cancer Before It Starts",
      description:
        "Early detection through regular oral screenings can help identify precancerous conditions. Studies show that 90% of oral cancers are preventable with timely intervention.",
    },
    {
      number: "02",
      title: "Reverse Early Damage",
      description:
        "Conditions like leukoplakia, OSMF, and smoker’s palate can be managed and treated if caught early through photo-medicine (PBM) and tobacco cessation.",
    },
    {
      number: "03",
      title: "Protect Your Smile & Quality of Life",
      description:
        "Early detection prevents irreversible damage, including gum disease and tooth loss, ensuring a healthy smile and better overall well-being.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 px-6 bg-white mx-auto font-[poppins] mt-12">
      {/* Image Section */}
      <img
        src={photo}
        alt="Oral Screening"
        className="w-full md:w-1/3 rounded-lg items-center mt-16 "
      />

      {/* Steps Section */}
      <div className="flex flex-col items-start md:items-start md:w-1/2">
        <h2 className="md:text-4xl text-2xl font-bold mb-16 text-black">
         <span className="text-[#2987D7]"> Why </span>Oral Screening Matters?
        </h2>
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-25 h-25">
                  <div className="absolute w-full h-full bg-white border border-[#2987D7] rounded-full"></div>
                  <div className="absolute w-20 h-20 bg-[#9BC7E4] rounded-full"></div>
                  <div className="flex items-center justify-center w-15 h-15 bg-[#2987D7] text-white font-bold text-3xl rounded-full z-10">
                    {step.number}
                  </div>
                </div>
                {index < steps.length - 1 && <div className="w-1 bg-[#2987D7] h-20"></div>}
              </div>
              <div>
                <h3 className="md:text-2xl text-md font-bold text-[#2987D7] mb-2">{step.title}</h3>
                <p className="text-gray-600/80 md:text-base text-[13px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyOralScreeningMatters;
