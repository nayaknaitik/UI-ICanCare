import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import lung from "../assets/lungsymp.svg";
import heart from "../assets/heartsymp.svg";
import ear from "../assets/earsymp.svg";
import eye from "../assets/eyesymp.svg";
import medic from "../assets/medisymp.svg";
import meter from "../assets/metersymp.svg";

const testCards = [
  {
    id: "respiratory-test-001",
    title: "Respiratory Issues",
    icon: <img src={lung} alt="" />,
  },
  {
    id: "cardiovascular-test-001",
    title: "Cardiovascular Issues",
    icon: <img src={heart} alt="" />,
  },
  { id: "hearing-test-001", title: "Auditory Issues", icon: <img src={ear} alt="" /> },
  { id: "vision-test-001", title: "Vision Issues", icon: <img src={eye} alt="" /> },
  {
    id: "vitamin-deficiency-test-001",
    title: "Nutritional Deficiency",
    icon: <img src={medic} alt="" />,
  },
  {
    id: "metabolic-disorder-test-001",
    title: "Metabolic Disorder",
    icon: <img src={meter} alt="" />,
  },
];

const SymptomsTestComponent = () => {
  const [selectedTest, setSelectedTest] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    setSelectedTest(id);
  };

  const handleStartTest = () => {
    if (selectedTest) {
      navigate(`/quiz/${selectedTest}`);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-12 rounded-xl  max-w-[95%] mx-auto mt-16 font-[poppins]">
      {/* Left Section */}
      <div className="flex-1 mb-8 md:mb-0">
        <h2 className="text-7xl font-bold text-[#2987D7] mb-4">
          Symptoms Test
        </h2>
        <p className="text-2xl text-gray-600/70 font-light mb-6">
          Take this <strong className="font-bold">quick six tests</strong> to
          find out which health risks you may already have and get expert
          recommendations to quit before it’s too late!
        </p>
        <h3 className="text-2xl text-[#2987D7] font-bold ">Instructions:</h3>
        <div className="bg-[#2987D7]/60 h-1 rounded-full w-36 mb-4"></div>
        <ul className=" text-gray-600/80 list-disc ml-6 text-base">
          <li>Complete any or all of the six tests.</li>
          <li>Answer honestly for accurate insights.</li>
          <li>Get personalized health recommendations.</li>
          <li>Skip any section if not relevant.</li>
        </ul>
        <button
          onClick={handleStartTest}
          disabled={!selectedTest}
          className={`mt-8 px-8 py-4 rounded-lg font-semibold text-white text-xl bg-[#2987D7] transition-transform transform hover:scale-105 ${
            !selectedTest ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Start the Test
        </button>
      </div>

      {/* Right Section (Cards) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
        {testCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`flex flex-col items-center justify-center p-6 rounded-xl cursor-pointer transition-transform transform hover:scale-105 border-2 ${
              selectedTest === card.id
                ? "border-[#2987D7] bg-[#f0f9ff]"
                : "border-transparent bg-[#f0f9ff]"
            }`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h4 className="text-lg font-semibold text-center text-gray-800">
              {card.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomsTestComponent;
