import React from 'react';
import { useNavigate } from 'react-router-dom';

const PBMCheckComponent = () => {
  const navigate = useNavigate();

  const handleExpertClick = () => {
    navigate('/contact');
  };

  return (
    <div className="w-full bg-[#F8FBFF] py-5 md:py-16 px-4 md:px-8 font-[Poppins]">
      <div className="max-w-5xl mx-auto flex flex-row md:flex-row justify-between items-center">
        <div className="text-center md:text-left ml-4 md:ml-0  md:mb-0  leading-3">
          <h2 className="text-left md:text-center text-[12px] md:text-4xl font-semibold tracking-tighter text-[#2987D7] mb-">
            Check If PBM is Right for You!
          </h2>
          <h3 className="text-[12px] md:text-4xl font-semibold text-black">
            Speak with an Expert
          </h3>
        </div>
        
        <a 
          href="tel:9773856664"
          className="bg-[#2987D7] text-white text-[14px] md:text-3xl font-bold px-4 py-2 md:px-8 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:bg-[#2476BC] transition-colors duration-300 flex items-center gap-3"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          9773856664
        </a>
      </div>
    </div>
  );
};

export default PBMCheckComponent; 