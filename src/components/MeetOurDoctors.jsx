import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Pawan from "../assets/pawan.png";
import Anshika from "../assets/Anshika.png";
import Siddhant from "../assets/Sidhaanth.png";
import Supriya from "../assets/suupriya.jpg";
import Shikha from "../assets/Shikha.png";
import Sujatha from "../assets/Sujatha.png";
import Beena from "../assets/beena.jpg";
import Sonal from "../assets/sonal.png";
import Snehal from "../assets/snehal.png";
import Sarika from "../assets/sarika.png";
import SonalBhatia from "../assets/sonaldt.png";
import Kshipra from "../assets/kshipra.png";
import Mariya from "../assets/Mariya.jpg";
import Varsha from "../assets/varsha.png";
import Richa from "../assets/Richa.png";
import reena from "../assets/reena.jpeg";

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
    name: "Dr. Anshika Pandey",
    role: "Dental Surgeon",
    image: Anshika,
  },
  {
    name: "Dr. Siddhant Singh",
    role: "Dental Surgeon",
    image: Siddhant,
  },
  {
    name: "Dr. Supriya Wadhwa",
    role: "Ayurvedic Doctor & Lifestyle Counsellor",
    image: Supriya,
  },
  {
    name: "Dr. Shikha Jindal",
    role: "Pulmonologist",
    image: Shikha,
  },
  {
    name: "Dr. Sujatha Rajnikanth",
    role: "Breast Cancer Specialist",
    image: Sujatha,
  },
  {
    name: "Dr. Beena Kumari",
    role: "Professor, Amrita School of Dentistry",
    image: Beena,
  },
  {
    name: "Dr. Sonal Sonani",
    role: "Dental Surgeon",
    image: SonalBhatia,
  },
  {
    name: "Dr. Snehal Shah",
    role: "Head & Neck Oncosurgeon",
    image: Snehal,
  },
  {
    name: "Dr. Sarika",
    role: "Nutritionist",
    image: Sarika,
  },
  {
    name: "Dt. Sonal Bhatia",
    role: "Dietician",
    image: Sonal,
  },
  {
    name: "Dr. Kshipra Deshpande",
    role: "Professor and Dental Surgeon",
    image: Kshipra,
  },
  {
    name: "Dr. Mariya Tambawala",
    role: "Dental Surgeon",
    image: Mariya,
  },
  {
    name: "Dr. Varsha BK",
    role: "Dental Surgeon",
    image: Varsha,
  },
  {
    name: "Dr. Richa Singh",
    role: "Dental Surgeon",
    image: Richa,
  },
];

const MeetOurDoctors = () => {
  return (
    <section className="w-full  md:py-12 px-4 md:px-8 font-[poppins] md:min-h-[90vh]  mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className="text-center md:mb-10"
        >
          <button className="px-6 py-2 bg-white md:text-base text-[12px] text-[#1377CC] font-semibold border border-[#76ADFF] rounded-full mb-4">
            MEET OUR DOCTORS
          </button>
          <h2 className="md:text-3xl text-[14px] font-bold tracking-tighter">
            We’re Dedicated To Your Well Being
          </h2>
        </div>

        {/* Swiper Section */}
        <div
          className="py-8"
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
          <div className="flex justify-center items-center gap-4 mt-8">
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

export default MeetOurDoctors;
