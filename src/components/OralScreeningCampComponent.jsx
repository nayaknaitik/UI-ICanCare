import React from 'react';
import icon1 from '../assets/oral1.svg';
import icon2 from '../assets/oral@.svg';
import icon3 from '../assets/oral3.svg';
import icon4 from '../assets/oral4.svg';
import photo from '../assets/why.svg';

const OralScreeningCampComponent = () => {
  return (
    <div
      id="know"
      className="flex flex-row items-center bg-white rounded-xl overflow-hidden justify-center md:mt-16 w-full max-w-6xl mx-auto my-2 font-[poppins] "
    >
      {/* Image Section */}
      <div className="md:w-1/3 md:ml-0 ml-4 w-46 md:mt-0">
        <img
          src={photo}
          alt="Oral Screening Camp"
          className="w-full h-auto object-cover md:rounded-l-xl"
        />
      </div>

      {/* Text Section */}
      <div className="w-1/2 px-3 py-4 sm:px-6 sm:py-8">
        <h2 className="text-[14px] sm:text-xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
          <span className="text-[#2987D7]">Why</span> You Should Attend Our Oral Screening Camp?
        </h2>
        <p className="text-gray-600 text-[7px] sm:text-sm md:text-lg mb-3 sm:mb-4">
          55% of Tobacco Users Are at Risk of Oral Diseases – Regular Screening Can Save Your Smile!
        </p>

        <div className="space-y-1 sm:space-y-3 md:space-y-4">
          <div className="flex items-center bg-gray-100 rounded-lg shadow-sm h-8 sm:h-14 md:h-16 px-0 sm:px-3">
            <div className="bg-[#A2DAFF] p-2 sm:p-2 rounded-md mr-2 sm:mr-3 h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center">
              <img src={icon1} alt="Icon 1" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-gray-900 font-medium text-[7px] sm:text-sm md:text-base">
              Early Detection = High Survival
            </p>
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg shadow-sm h-8 sm:h-14 md:h-16 px-0 sm:px-3">
            <div className="bg-[#A2DAFF] p-2 sm:p-2 rounded-md mr-2 sm:mr-3 h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center">
              <img src={icon2} alt="Icon 2" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-gray-900 font-medium text-[7px] sm:text-sm md:text-base">
              Prevents Cancer & Other Oral Diseases
            </p>
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg shadow-sm h-8 sm:h-14 md:h-16 px-0 sm:px-3">
            <div className="bg-[#A2DAFF] p-2 sm:p-2 rounded-md mr-2 sm:mr-3 h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center">
              <img src={icon3} alt="Icon 3" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-gray-900 font-medium text-[7px] sm:text-sm md:text-base">
              Exclusive Discounts & Additional Tests
            </p>
          </div>

          <div className="flex items-center bg-gray-100 rounded-lg shadow-sm h-8 sm:h-14 md:h-16 px-0 sm:px-3">
            <div className="bg-[#A2DAFF] p-2 sm:p-2 rounded-md mr-2 sm:mr-3 h-8 w-8 sm:h-12 sm:w-12 flex items-center justify-center">
              <img src={icon4} alt="Icon 4" className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <p className="text-gray-900 font-medium text-[7px] sm:text-sm md:text-base">
              Meet Expert Doctors & Get Personalized Advice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OralScreeningCampComponent;
