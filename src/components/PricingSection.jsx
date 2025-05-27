import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CheckIcon from "../assets/tick.svg";
import CrossIcon from "../assets/cross.svg";
import { useNavigate } from "react-router-dom";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const plans = [
  {
    title: "Mild Plan",
    price: "8500",
    duration: "4 weeks",
    features: [
      { name: "2 Cessation Specialist Consultations", available: true },
      { name: "4-6 Follow-ups", available: true },
      { name: "Support Group for Engagement", available: true },
      { name: "Personalized Quit Coach", available: true },
      { name: "Withdrawals & Cravings Management", available: true },
      { name: "Triggers & Cues Management", available: true },
      { name: "Weight Management", available: false },
      { name: "Lifestyle Modification", available: false },
      { name: "Stress Management", available: false },
      { name: "Relapse Prevention", available: false },
      { name: "Lung Cleaning Exercises", available: false },
    ],
  },
  {
    title: "Severe Plan",
    price: "12000",
    duration: "12 weeks",
    features: [
      { name: "2 Cessation Specialist Consultations", available: true },
      { name: "4-6 Follow-ups", available: true },
      { name: "Support Group for Engagement", available: true },
      { name: "Personalized Quit Coach", available: true },
      { name: "Withdrawals & Cravings Management", available: true },
      { name: "Triggers & Cues Management", available: true },
      { name: "Weight Management", available: true },
      { name: "Lifestyle Modification", available: true },
      { name: "Stress Management", available: true },
      { name: "Relapse Prevention", available: true },
      { name: "Lung Cleaning Exercises", available: true },
    ],
  },
  {
    title: "Moderate Plan",
    price: "10000",
    duration: "8 weeks",
    features: [
      { name: "2 Cessation Specialist Consultations", available: true },
      { name: "4-6 Follow-ups", available: true },
      { name: "Support Group for Engagement", available: true },
      { name: "Personalized Quit Coach", available: true },
      { name: "Withdrawals & Cravings Management", available: true },
      { name: "Triggers & Cues Management", available: true },
      { name: "Weight Management", available: true },
      { name: "Lifestyle Modification", available: true },
      { name: "Stress Management", available: false },
      { name: "Relapse Prevention", available: false },
      { name: "Lung Cleaning Exercises", available: false },
    ],
  },
];

const PricingSection = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const navigate = useNavigate();

  const handleStarted = (plan) => {
    navigate("/payments", {
      state: {
        amount: plan.price,
        planTitle: plan.title,
        duration: plan.duration,
      },
    });
  };

  return (
    <section
      className="w-full bg-[#DAF0FF] py-12 px-4 md:px-8 font-[poppins] mt-12"
      id="quit-now"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <button className="px-6 py-2 bg-[#EFF8FF] md:text-base text-[12px] shadow-md text-[#2987D7] font-semibold rounded-full mb-4">
            PLANS & PRICING
          </button>
          <h2 className="text-[16px] md:text-3xl lg:text-4xl font-bold tracking-tighter">
            Support Plans - Affordable, Effective & Life-Changing
          </h2>
          <p className="md:mt-2 text-gray-600 text-[12px] md:text-lg">
            Choose Your Plan
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan}
              index={index}
              onStarted={() => handleStarted(plan)}
            />
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden" >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
            centeredSlides={true}
            onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
            className="pb-8"
          >
            {plans.map((plan, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`rounded-xl h-120 p-6 mx-4 flex flex-col ${
                    plan.title === "Severe Plan"
                      ? "bg-[#2A8CE0] text-white scale-105 rounded-2xl"
                      : "bg-white"
                  } shadow-2xl`}
                >
                  <h3 className="text-lg font-medium mb-2">{plan.title}</h3>
                  <div className="flex items-baseline">
                    <p className="text-3xl font-bold tracking-tighter">
                      ₹{plan.price}
                    </p>
                    <p className="text-xs opacity-80 ml-2">{plan.duration}</p>
                  </div>
                  <button
                    onClick={() => handleStarted(plan)}
                    className={`py-2 mt-2 mb-4 rounded-full font-semibold text-sm ${
                      plan.title === "Severe Plan"
                        ? "bg-[#0E409B] rounded-2xl hover:bg-[#2A8CE0]"
                        : "bg-[#006CC8]"
                    } text-white`}
                  >
                    Get Started
                  </button>

                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-xs"
                      >
                        <img
                          src={feature.available ? CheckIcon : CrossIcon}
                          alt={feature.available ? "check" : "cross"}
                          className="h-4 w-4"
                        />
                        <span className="opacity-60">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, index, onStarted }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "start 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, y }}
      className={`rounded-xl p-8 flex flex-col ${
        plan.title === "Severe Plan"
          ? "bg-[#2A8CE0] text-white scale-105 hover:scale-[110%]"
          : "bg-white scale-100 hover:scale-[102%]"
      } shadow-2xl transition ease-in-out duration-300 cursor-pointer`}
    >
      <h3 className="text-xl font-medium mb-2">{plan.title}</h3>
      <div className="flex">
        <p className="text-4xl font-bold tracking-tighter">₹{plan.price}</p>
        <p className="text-sm mb-6 opacity-80 mt-3 ml-2">{plan.duration}</p>
      </div>
      <button
        className={`cursor-pointer py-3 mt-2 mb-6 rounded-full font-semibold ${
          plan.title === "Severe Plan" ? "bg-[#0E409B]" : "bg-[#006CC8]"
        } text-white hover:bg-[#2A8CE0] hover:shadow-2xl`}
        onClick={() => onStarted(plan)}
      >
        Get Started
      </button>

      <ul className="space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm">
            <img
              src={feature.available ? CheckIcon : CrossIcon}
              alt={feature.available ? "check" : "cross"}
              className="h-5 w-5"
            />
            <span className="opacity-60">{feature.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingSection;
