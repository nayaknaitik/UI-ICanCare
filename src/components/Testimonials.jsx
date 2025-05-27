import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Trophy from "../assets/trophy.svg";
const diseaseData = [
  {
    title: "Tooth Decay & Gum Disease",
    description: "Bad breath, loose teeth, jaw stiffness, thickening or swelling in the cheeks & gums, and painful infections. Tobacco weakens the gum tissue, leading to receding gums, tooth loss, and bone damage.",
    image: "/api/placeholder/400/320"
  },
  {
    title: "Oral Pre-Cancerous Lesions",
    description: "Persistent small ulcer like structure in your mouth that can turn into cancer if left untreated. These lesions often present as white or red patches (Leukoplakia, Erythroplakia) can be a precursor to oral cancer if not diagnosed early.",
    image: "/api/placeholder/400/320"
  },
  {
    title: "Oral Fibrosis (OSMF)",
    description: "A progressive condition causing loss of mouth opening, burning pain, and difficulty eating. It is considered a potentially malignant disorder with a high risk of transformation to oral cancer if tobacco use continues.",
    image: "/api/placeholder/400/320"
  }
];
const testimonials = [
  {
    name: "Champion 1",
    duration: "Tobacco-Free For 8 Months",
    text: "The personalized approach and constant support made all the difference. I tried quitting 5 times before, but this program finally helped me succeed.",
    image: Trophy,
  },
  {
    name: "Champion 2",
    duration: "Tobacco-Free For 1 Year",
    text: "The personalized approach and constant support made all the difference. I tried quitting 5 times before, but this program finally helped me succeed.",
    image: Trophy,
  },
  {
    name: "Champion 3",
    duration: "Tobacco-Free For 6 Months",
    text: "The personalized approach and constant support made all the difference. I tried quitting 5 times before, but this program finally helped me succeed.",
    image: Trophy,
  },
  {
    name: "Champion 4",
    duration: "Tobacco-Free For 9 Months",
    text: "Finally tobacco free after years! Thanks to the amazing program and coaching support throughout the journey.",
    image: Trophy,
  },
  {
    name: "Champion 5",
    duration: "Tobacco-Free For 1.5 Years",
    text: "I am confident, healthy, and a new person today. Cannot thank enough!",
    image: Trophy,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full md:py-16 py-12 px-4 md:px-8 font-[poppins] md:mt-2">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div
          className="text-center md:mb-12"
        >
          <p className="text-[#2987D7] font-semibold text-[10px] md:text-lg">
            See What Clients Have To Say About Us
          </p>
          <h2 className="tmd:text-3xl text-[18px] font-bold mt-1 md:mt-2">Testimonials</h2>
        </div>

        {/* Swiper Section */}
        <div
          className="overflow-visible"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              const correctedIndex = (realIndex + 1) % testimonials.length;

              setActiveIndex(correctedIndex);
            }}
            className="py-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`group cursor-pointer transition-all duration-500 text-center rounded-xl border-gray-200 shadow border p-8 min-h-[390px] overflow-hidden 
                    ${
                      index === activeIndex
                        ? "bg-[#2987D7] text-white scale-100 shadow-lg rounded-full"
                        : "bg-white text-black scale-95"
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 mx-auto mb-1"
                  />
                  <h3
                    className={`font-bold text-xl ${
                      index === activeIndex ? "text-white" : "text-black"
                    }`}
                  >
                    {item.name}
                  </h3>
                  <p
                    className={`text-sm font-semibold mt-1 mb-4 ${
                      index === activeIndex ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {item.duration}
                  </p>
                  <hr
                    className={`my-4 ${
                      index === activeIndex ? "border-white" : "border-gray-300"
                    }`}
                  />
                  <p
                    className={`text-sm ${
                      index === activeIndex ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-2 md:mt-8">
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

export default Testimonials;
