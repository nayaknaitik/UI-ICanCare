import React, { useEffect } from "react";
import photo from "../assets/addcitiontestcam.png";
import { useNavigate } from "react-router-dom";

const AddictionTestComponent = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-8 md:px-16 font-[poppins]">
      {/* Image Section */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16">
        <div className="rounded-full p-2 ">
          <img
            src={photo}
            alt="Addiction Test"
            className="rounded-full md:w-108 md:h-108 object-cover"
          />
        </div>
      </div>
      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-bold text-[#2987D7] mb-4 tracking-tighter">
          Addiction Test
        </h2>
        <p className="text-gray-500 md:text-xl leading-tight mb-6">
          Answer six quick and easy questions designed to{" "}
          <span className="font-semibold">
            assess your nicotine dependence.
          </span>{" "}
          Discover where you stand and take the first step toward a healthier,
          tobacco-free future.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => handleClick("addiction-test-001")}
            className="bg-[#2987D7] text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-800 transition duration-300"
          >
            Test for Smokers
          </button>
          <button
            onClick={() => handleClick("chewer-test-001")}
            className="border border-gray-600 text-gray-700 font-semibold md:py-3 px-8 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Test for Chewers
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddictionTestComponent;
