import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import { ChevronRight } from "lucide-react";
import Addiction from "../assets/addic.svg";
import Oralhealth from "../assets/oral.svg";
import Depend from "../assets/depend.svg";
import Fourfinger from "../assets/4finger.svg";
import Ready from "../assets/ready.svg";
import Symptoms from "../assets/symptoms.svg";

const quizCards = [
  {
    id: "a",
    title: "Addiction Test",
    desc: "Understand the severity of your nicotine addiction",
    image: Addiction,
  },
  {
    id: "dependence-test-001",
    title: "Dependence Test",
    desc: "Measure your physical, social and psychological dependence",
    image: Depend,
  },
  {
    id: "four-finger-test-001",
    title: "Four Finger Test",
    desc: "Measure your current mouth opening",
    image: Fourfinger,
  },
  {
    id: "oral-health-test-001",
    title: "Oral Health Test",
    desc: "Identify your oral health risks due to smoking/tobacco use",
    image: Oralhealth,
  },
  {
    id: "symptoms-test-001",
    title: "Symptoms Test",
    desc: "Identify potential health risks based on your symptoms",
    image: Symptoms,
  },
  {
    id: "readiness-test-001",
    title: "Readiness Test",
    desc: "Gauge your readiness and motivation to quit",
    image: Ready,
  },
  
  
  
];

// Simple fade + rise animation
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ReadinessSection = () => {
  const navigate = useNavigate(); // <-- Hook to navigate

  const handleCardClick = (id) => {
    if(id === "A") {
      navigate("/quizA");
    }
    if(id==="dependence-test-001"){
      navigate("/quizD");
    }
    else{navigate(`/quiz/${id}`)};
  };
  const navigatef = ()=>{
    navigate("/appoinment");
  }

  return (
    <div
      viewport={{ once: true, amount: 0.2 }}
      className="px-10 py-5 md:px-16 md:py-12 bg-white text-center max-w-6xl mx-auto md:mt-8 font-[poppins]"
    >
      {/* Heading */}
      <div>
        <p className="text-[10px] md:text-xl text-[#2987D7] font-bold tracking-wide uppercase">
          Test Yourself
        </p>
      </div>

      <h2 className="text-[14px] md:text-4xl font-bold text-black mt-1 mb-4 md:mb-8 tracking-tighter">
        Assess Your Readiness To Quit
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-12 mt-4 md:mt-12 relative z-10">
        {quizCards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(card.id)}
            className="relative rounded-lg md:rounded-xl overflow-hidden shadow-md md:shadow-xl bg-white flex flex-col hover:scale-[1.03] transition-transform cursor-pointer h-50 md:h-110"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-32 md:h-80 object-cover"
            />
            <div className="p-2 md:p-4 text-left">
              <h3 className="text-[14px] md:text-lg font-bold text-black line-clamp-1">{card.title}</h3>
              <p className="text-[8px] md:text-sm text-gray-600  md:mt-1 pr-4 md:pr-14 ">{card.desc}</p>
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-2 md:bottom-4 right-1 md:right-4 w-5 h-5 md:w-10 md:h-10 bg-[#2987D7] hover:bg-blue-400 flex items-center justify-center rounded-full">
              <ChevronRight className="text-white w-3 h-3 md:w-6 md:h-6" strokeWidth={4} />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-row md:flex-row gap-2 md:gap-4 justify-center items-center mt-6 md:mt-12">
        <a href="#quit-now">
          <button className="bg-[#2A8CE0] hover:bg-[#0061ad] hover:scale-[105%] transition ease-in-out duration-300 cursor-pointer text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-base font-semibold shadow">
            Join our Program
          </button>
        </a>
        <button 
          onClick={navigatef} 
          className="border md:w-1/5 items-center justify-center border-gray-400 text-gray-800 hover:scale-[105%] transition ease-in-out duration-300 cursor-pointer px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs md:text-base font-semibold shadow hover:bg-gray-100"
        >
          Talk to an Expert
        </button>
      </div>
    </div>
  );
};

export default ReadinessSection;
