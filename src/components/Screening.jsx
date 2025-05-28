import React, { useEffect, useState } from "react";
import desktopImage from "../assets/screen.svg";
import mobileImage from "../assets/screen.svg";

const Screening = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <section className="font-[poppins] w-full bg-white p-4 flex flex-col items-center text-center mt-12">
      <h1 className="text-[40px] font-bold text-[#2987D7] leading-9 tracking-tighter">
        <span className="text-[#65BA34]">Oral Screening Camp</span> –
        <br /> Protect Your Oral Health Today!
      </h1>

      <p className="mt-3 text-[14px] text-gray-700 opacity-90 leading-tight">
        <strong>Don't Ignore</strong> Your Oral Health – Get Screened Before It’s Too Late!
      </p>

      {/* Mobile Image */}
      <img
        src={mobileImage}
        alt="Screening Camp"
        className="w-full max-w-xs my-5 object-contain"
      />

      {/* Banner box */}
      <div className="bg-[#2987D7] -mt-8 w-full  rounded-xl px-4 py-7 text-black text-[11px] font-medium mb-4">
        Upcoming Camp Details:  <span className="font-bold text-white text-[20px] ml-5">   Coming Soon!</span>
      </div>

      {/* Buttons */}
      <div className="flex mt-1 gap-3 w-full">
        <a
          href="appoinment"
          className="flex-1 bg-[#2987D7] text-white text-[13px] py-3 rounded-md font-semibold hover:bg-[#005fa3] transition text-center"
        >
          Book Screening
        </a>
        <a
          href="#know"
          className="flex-1 border border-black text-[13px] py-3 rounded-md font-semibold hover:bg-gray-100 transition text-center"
        >
          Know More
        </a>
      </div>
    </section>
  ) : (
    <div className="w-full h-auto md:h-screen flex items-center font-[Poppins] bg-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Text Left */}
        <div className="w-full md:w-1/2 mb-12 md:mb-60">
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold leading-10 md:leading-15 tracking-tighter text-[#2987D7]">
            <span className="text-[#65BA34]">Oral Screening Camp</span> – Protect Your Oral Health Today!
          </h1>
          <p className="mt-2 text-lg text-center md:text-left md:text-2xl text-gray-800 font-medium">
            <strong>Don't Ignore</strong> Your Oral Health – Get Screened
            <br />
            Before It’s Too Late!
          </p>
          <div className="md:ml-0 ml-4 mt-8 flex gap-2 md:gap-4">
            <a
              href="appointment"
              className="bg-[#2987D7] text-xl text-white md:px-8 md:py-3 px-4 py-2 rounded-md font-medium hover:bg-[#005fa3] transition hover:scale-[105%]"
            >
              Book Screening
            </a>
            <a
              href="#know"
              className="border border-black text-xl md:px-12 md:py-3 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition hover:scale-[105%]"
            >
              Know More
            </a>
          </div>
        </div>

        {/* Image Right */}
        <div className="w-full md:w-1/2 sm:1/3">
          <img
            src={desktopImage}
            alt="Oral Screening"
            className="w-full mb-3 md:mb-48 max-w-xl mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Screening;
