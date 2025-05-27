import React from "react";
import { motion } from "framer-motion";
import Life from '../assets/life.svg';

const LifecycleComponent = () => {
  return (
    <div
      className="flex flex-col items-center w-full bg-white px-6 font-[poppins] mt-8"
    >
      <h2 className="text-lg md:text-4xl font-light text-center mb-12">
        Life Cycle of getting a <br />
        <span className="text-[#2987D7] font-bold">Tobacco-Induced Oral Cancer</span>
      </h2>
      <img
        src={Life}
        alt="Dummy Full Width Image"
        className="w-[80%]"
        
      />
    </div>
  );
};

export default LifecycleComponent;
