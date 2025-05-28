import React from "react";
import { motion } from "framer-motion"; // ✨ Add motion
import { PhoneCall } from "lucide-react";
import CallIcon from "../assets/callicon.svg";

const CallToAction = () => {
  return (
    <div className="bg-[#DFF0FF] py-12 px-4 text-center font-[poppins] mt-12">
      {/* Top Button */}
      <div className="inline-block bg-white text-[#2987D7] font-semibold py-2 px-6 rounded-full shadow-md mb-6 md:text-base text-[8px]">
        HAVE MORE QUESTIONS OR LOOKING FOR SELF-QUITTING?
      </div>

      {/* Main Text */}
      <h2 className="text-[14px] sm:text-3xl font-bold mb-6 tracking-tight">
        Get a <span className="text-[#2987D7]">FREE 15 minutes</span>{" "}
        Consultation with our Expert{" "}
        <span className="text-[#2987D7]">Quit Coaches Now!</span>
      </h2>

      {/* Call Button */}
      <div className="flex justify-center">
        <a
          href="tel:9773856664"
          className="bg-[#2987D7] hover:scale-[105%] transition ease-in-out duration-300 cursor-pointer text-white font-bold md:py-4 md:px-8 px-3 py-4 rounded-lg flex items-center gap-3 shadow-lg text-lg no-underline"
        >
          <img src={CallIcon} className="w-7 h-7" alt="Call" />
          <span className="text-[24px] md:text-2xl">
            9773856664{" "}
            <span className="text-sm font-light">(Select Option 2)</span>
          </span>
        </a>
      </div>

      {/* Sub Text */}
    </div>
  );
};

export default CallToAction;
