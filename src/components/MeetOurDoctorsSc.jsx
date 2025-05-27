import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import reena from "../assets/reena.jpeg";

import Pawan from "../assets/pawan.png";
import Deeksha from "../assets/Deeksha.png";
import Ankit from '../assets/Ankit.jpeg'
import Sanchit from '../assets/Sanchit.jpeg'
import Anu from '../assets/Anu.jpeg'

const doctors = [
  {
    name: "Dr. Pawan Gupta",
    role: "Founder - ICanCaRe, Director\nH&N Oncology Max Super Speciality Hospital, Vaishali",
    image: Pawan,
  },
  {
      name: "Dr. Reena R. Kumar",
      role: "Academic Director ICanCaRe, Regional Clinical Adviser Special Olympics Asia Pacific",
      image: reena,
    },
  {
    name: "Dr. Ankit Vishwani",
    role: "M.Ch. (HN) ",
    image: Ankit,
  },
  {
    name: "Dr. Deeksha Sharma",
    role: "MDS (OMFS)",
    image: Deeksha,
  },
  {
    name: "Dr. Sanchit Mahajan",
    role: "MDS (OMFS)",
    image: Sanchit,
  },
  {
    name: "Dr. Anu Singh",
    role: "MDS (OMFS)",
    image: Anu,
  },
  
];

const MeetOurDoctorsSc = () => {
  return (
    <section className="w-full md:py-12 px-4 md:px-8 font-[poppins] md:min-h-[90vh]  md:mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className="text-center mb-10"
        >
          <button className="px-6 py-2 bg-white text-[#1377CC] font-semibold border border-[#76ADFF] rounded-full mb-2 md:mb-4">
            MEET OUR DOCTORS
          </button>
          <h2 className="text-[14px] sm:text-4xl font-bold tracking-tighter">
            Meet the <span className="text-[#2987D7">Expert</span> Doctors Conducting The Screening
          </h2>
        </div>

        {/* Swiper Section */}
        <div
          className="md:py-8"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {doctors.map((doctor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-2xl shadow-md flex flex-col items-center text-center min-h-[420px] min-w-[260px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="h-75 w-75 object-cover rounded-t-xl mb-4"
                  />
                  <h3 className="font-bold text-lg tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line mt-1">
                    {doctor.role}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 md:mt-8">
            <button className="prev-btn bg-white p-3 rounded-full shadow-md">
              <svg
                className="h-6 w-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="next-btn bg-[#2987D7] p-3 rounded-full shadow-md">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurDoctorsSc;
