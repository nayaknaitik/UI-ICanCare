import React, { useEffect, useState } from "react";
import ShieldIcon from "../assets/shield.svg";
import LightningIcon from "../assets/lightning.svg";
import SyringeIcon from "../assets/syringe.svg";
import CertificateIcon from "../assets/certificate.svg";

const features = [
  {
    icon: ShieldIcon,
    title: "Pain-Free & Non-Invasive Care",
    desc: "Experience relief without drugs, needles, or discomfort."
  },
  {
    icon: LightningIcon,
    title: "Rapid & Effective Relief",
    desc: "Feel the difference instantly with no side effects."
  },
  {
    icon: SyringeIcon,
    title: "Safe & Gentle Treatment",
    desc: "No needle pricking, no vibration, and minimal bleeding."
  },
  {
    icon: CertificateIcon,
    title: "Scientifically Backed & Trusted",
    desc: "Rely on a therapy proven by science and endorsed by experts."
  }
];

const PBMTherapyComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div id="pbm"
      className="w-full md:py-16 px-4 md:px-8 text-center flex flex-col justify-center items-center font-[poppins] py-8 md:mt-12"
    >
      {/* Heading */}
      <h2 className="md:text-4xl text-[14px] font-bold text-[#2987D7] mb-1 md:mb-4">
        What <span className="text-black">is PBM therapy ?</span>
      </h2>
      <p className="md:text-lg text-[8px] text-[#2987D7] font-light mb-4 md:mb-12">
        "Photobiomodulation (PBM) is an advanced, non-invasive light therapy that <br /> accelerates healing, reduces pain, and restores oral health without medications."
      </p>

      {/* ✅ Mobile View */}
      {isMobile ? (
        <div className="grid grid-cols-2 gap-2 max-w-4xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex bg-white rounded-md shadow-sm overflow-hidden"
            >
              <div className="bg-[#A2DAFF] flex items-center justify-center py-1 px- min-w-13">
                <img src={item.icon} alt="" className="h-8" />
              </div>
              <div className="flex flex-col justify-center px-4 py-2 text-left">
                <h3 className="text-[9px] font-bold text-black leading-3 mb-1">{item.title}</h3>
                <p className="text-[7px] text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // ✅ Desktop View
        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-8 md:max-w-[90%]">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg md:rounded-3xl overflow-hidden bg-white shadow-lg md:h-full transition-transform transform"
            >
              <div className="bg-[#A2DAFF] w-full flex items-center justify-center h-20 md:h-56">
                <img className="h-10 md:h-24" src={item.icon} alt={item.title} />
              </div>
              <div className="bg-white md:p-8 py-1 flex flex-col justify-center items-center">
                <h3 className="md:text-2xl font-semibold text-black md:mb-2 mb-1 leading-3 md:leading-7 text-[10px]">{item.title}</h3>
                <p className="md:text-sm text-gray-600 font-extralight text-[7px]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PBMTherapyComponent;
