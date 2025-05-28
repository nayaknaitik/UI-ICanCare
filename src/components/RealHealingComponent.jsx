import React from "react";
import img1 from "../assets/dis1.png";
import img2 from "../assets/dis2.png";
import { useNavigate } from "react-router-dom";
const RealHealingComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-8 md:py-12 px-6 font-[poppins] md:mt-12">
      <h2 className="text-center md:text-4xl text-[14px] text-[#000000] font-medium">Success Stories</h2>
      <h2 className="text-center md:text-4xl text-[14px] text-[#2987D7] font-medium mb-2">
        Real Patients, Real Healings
      </h2>

      <div className="flex flex-col md:flex-col justify-between items-start md:gap-6 max-w-7xl mx-auto">
        {/* BEFORE */}
        <div className="flex-1">
          <div className="bg-[#2987D7] text-white text-[12px] font-semibold px-2 py-2 md:px-12 ml-[2px] md:py-2 md:text-2xl rounded-t-lg w-fit">
            Before
          </div>

          <div className="flex flex-row gap-6">
            {/* Image - 2/3 */}
            <div className="w-2/3">
              <img
                src={img1}
                alt="Before"
                className="rounded-b-lg w-full h-auto"
              />
            </div>

            {/* Text - 1/3 */}
            <div className="w-1/3 flex items-center">
              <p className="text-gray-800 text-[8px] leading-2.5 md:leading-9 md:text-2xl">
                <strong>Leukoplakia and invasive lesions</strong> detected on
                tongue (squamous cell carcinoma) and patient was advised for
                <strong> Total Glossectomy</strong> (surgery).
              </p>
            </div>
          </div>
        </div>

        {/* AFTER */}
        <div className="flex-1 mt-1 md:mt-0 ml-auto">
          <div className="bg-[#2987D7] text-white font-semibold px-2 py-2  md:px-12 md:py-2 rounded-t-lg w-fit text-[12px] md:text-2xl ml-auto">
            After
          </div>

          <div className="flex flex-row gap-6">
            {/* Images - 2/3 */}

            {/* Text - 1/3 */}
            <div className="w-1/3 flex items-center text-right">
              <p className="text-gray-800 text-[8px] leading-2.5 md:leading-9 md:text-2xl">
                With <strong>photo-medicine</strong>, complete healing was
                achieved. <strong>No surgery</strong> was required. Recovery was
                very fast without any pain or inflammation.
              </p>
            </div>
            <div className="md:w-2/3 flex gap-2 justify-end">
              <img
                src={img2}
                alt="After 2"
                className="rounded-b-lg md:w-full md:h-auto w-60 h-17"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-4 md:mt-10">
        <button onClick={()=>{navigate('/appointment')}} className="bg-[#2987D7] text-white font-semibold px-2 py-2 md:px-6 md:py-3 rounded-md text-[10px] md:text-xl shadow-md hover:bg-[#2471b2] transition">
          Get Treated Now!
        </button>
      </div>
    </div>
  );
};

export default RealHealingComponent;
