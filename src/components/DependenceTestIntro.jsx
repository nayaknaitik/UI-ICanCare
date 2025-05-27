import React, { useEffect } from "react";
import photo from "../assets/depend.svg";
import { useNavigate } from "react-router-dom";

const DependenceTestIntro = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz/dependence-test-001");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-white py-16 px-8 md:px-16 font-[poppins]">
      {/* Image Section */}
      <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-16 border border-[#2987D7] bg-[#0a2c49] rounded-full">
        <div className="rounded-full p-2">
          <img
            src={photo}
            alt="Dependence Test"
            className="rounded-full w-100 h-100 object-cover"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-6xl font-bold text-[#2987D7] mb-4 tracking-tighter">
          Dependence Test
        </h2>
        <p className="text-gray-500 text-xl leading-tight mb-6">
          Take this 2-minute test to identify your
          <span className="font-semibold"> physical, psychological, or social addiction </span>
          to tobacco/smoking to build a custom plan that will help you quit tobacco in a focussed and structured way.
        </p>
        <p className="text-gray-700 text-lg mb-8">
          <strong>Instructions:</strong> <br />There are 3 sections and each section has 6 questions.<br />
          Rate each statement on a scale of 1 to 5, where:<br />
          1 = Never, 2 = Sometimes, 3 = Frequently, 4 = Often, 5 = Always
        </p>
        <button
          onClick={handleClick}
          className="bg-[#2987D7] text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-800 transition duration-300"
        >
          Start the Test
        </button>
      </div>
    </section>
  );
};

export default DependenceTestIntro;