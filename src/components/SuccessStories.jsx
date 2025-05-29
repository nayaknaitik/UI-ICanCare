import React, { useState } from "react";
import { motion } from "framer-motion";
import danger from "../assets/danger.svg";
import ex from "../assets/exclaim.svg";
import dis1 from "../assets/dis1.jpg";
import dis2 from "../assets/dis2.jpg";
import dis3 from "../assets/dis3.jpg";
import dis4 from "../assets/dis4.jpg";
import dis5 from "../assets/dis5.jpg";
import dis6 from "../assets/dis6.png";
import dis7 from "../assets/dis7.jpg";
import dis8 from "../assets/dis8.jpg";

const diseases = [
  {
    title: "Oral Pre-Cancerous",
    desc: "Persistent small ulcer-like structures in your mouth that can turn into cancer if left untreated. These lesions often present as white or red patches or a non-healing ulcer. It is mostly painless — often ignored. 8 out of 10 oral cancers start as PML. If detected early, it is 100% treatable and reversible and can prevent cancer.",
    image: dis1,
    icon: <img src={danger} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Oral Fibrosis (OSMF) ",
    desc: "A progressive condition causing loss of mouth opening, burning pain, and difficulty eating. It is considered a potentially malignant disorder with a high risk of transformation to oral cancer",
    image: dis2,
    icon: <img src={danger} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Leukoplakia & Erythroplakia ",
    desc: "White, red, or black patches inside your mouth that are early warning signs of deadly oral cancer.",
    image: dis3,
    icon: <img src={danger} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Tooth Decay & Gum Disease",
    desc: "Bad breath, loose teeth, jaw stiffness, thickening or swelling in the cheeks & gums, and painful infections. Tobacco weakens the gum tissue, leading to receding gums, tooth loss, and bone damage.",
    image: dis4,
    icon: <img src={danger} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Lip, Mouth & Throat Cancer",
    desc: "Can be anywhere inside the mouth, lip, and throat. Often deadly if not detected early. Persistent sores, lumps, difficulty swallowing, or a change in voice are critical warning signs.",
    image: dis5,
    icon: <img src={danger} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Smoker’s Keratosis & Smoker’s Lip ",
    desc: "Thickening of the skin or mucous membranes and darkening of the lips due to prolonged tobacco exposure. These can lead to pre-cancerous changes if not addressed.",
    image: "https://www.royalclinicsaudia.com/wp-content/uploads/2023/03/Smokers-Lips-Treatment-in-Riyadh-Jeddah-Saudi-Arabia-Cost.jpg",
    icon: <img src={ex} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Smoker’s Palate",
    desc: "White, cobblestone-like patches on the roof of the mouth caused by chronic exposure to heat and smoke. While not directly cancerous, it indicates long-term tissue damage.",
    image: dis6,
    icon: <img src={ex} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Periodontal Disease",
    desc: "Inflammation and infection of the gums and bone surrounding the teeth. It leads to tooth loss and increases the risk of systemic diseases like heart disease and diabetes.",
    image: dis7,
    icon: <img src={ex} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
  {
    title: "Tooth Discoloration",
    desc: "Smoking and chewing tobacco lead to stubborn stains, excessive plaque, and tartar buildup, increasing the risk of tooth decay and gum disease.",
    image: dis8,
    icon: <img src={ex} alt="" className="h-6 md:h-12 md:mr-4" />,
  },
];

const OralDiseasesGrid = () => {
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  return (
    <div id="know" className="max-w-7xl mx-auto font-[poppins] md:mt-16 my-auto">
      <div className="text-center py-12">
        <h1 className="text-2xl md:text-5xl font-bold text-black md:mb-4 tracking-tighter">
          Tobacco-Induced Oral Diseases
        </h1>
        <h2 className="md:text-3xl text-sm font-semibold text-[#2987D7]/65 tracking-tighter md:mb-4">
          You Can’t Afford to Ignore Tobacco-Induced Oral Diseases!
        </h2>
        <p className="md:text-xl text-[10px] text-gray-600 font-light">
          Tobacco and smoking don’t just stain your teeth—they slowly destroy
          your oral health, leading to some of the irreversible conditions given below:
        </p>
        <div className="flex justify-end md:gap-8 gap-4 items-center px-8 mt-5 md:mt-12">
          <div className="flex items-center">
            <img src={ex} alt="" className="mr-4 md:h-8 h-4" />
            <h4 className="md:text-xl text-[7px] font-medium text-gray-800">Moderate Risk</h4>
          </div>
          <div className="flex items-center">
            <img src={danger} alt="" className="mr-4 h-4 md:h-8" />
            <h4 className="md:text-xl text-[7px] font-medium text-gray-800">High Risk</h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-6 px-8 font-[poppins] md:max-w-[6xl]">
        {diseases.map((disease, index) => (
          <div
            key={index}
            onClick={() =>
              window.innerWidth < 768
                ? setFlippedCardIndex(flippedCardIndex === index ? null : index)
                : null
            }
            className="relative w-full h-42 md:h-72 lg:h-80 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer group perspective-1000 group-hover:p-0 p-4 sm:p-6"
          >
            {/* Front Side */}
            <div
              className={`absolute inset-0 flex flex-col px-2 py-1 md:p-4 backface-hidden rounded-xl bg-white z-10 transition-transform duration-700 ease-in-out ${
                flippedCardIndex === index ? "rotate-y-180" : ""
              } md:group-hover:rotate-y-180`}
            >
              <div className="flex items-center md:mb-2 h-10 sm:h-12">
                {disease.icon}
                <h3 className="text-[12px] md:text-xl lg:text-2xl font-bold text-[#2987D7] tracking-tighter ml-2 mt-1 leading-snug">
                  {disease.title}
                </h3>
              </div>
              <p className="text-gray-600 text-[8px] md:text-sm md:text-left text-center leading-2.5 md:leading-relaxed mt-1 md:mt-6">
                {disease.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#2987D7]"></div>
            </div>

            {/* Back Side */}
            <div
              className={`absolute inset-0 flex items-center justify-center bg-center rounded-xl transition-transform duration-700 ease-in-out ${
                flippedCardIndex === index ? "rotate-y-0" : "rotate-y-180"
              } md:rotate-y-180`}
              style={{
                backgroundImage: `url(${disease.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OralDiseasesGrid;
