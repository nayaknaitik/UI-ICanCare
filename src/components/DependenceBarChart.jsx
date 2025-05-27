import React from "react";
import y from '../assets/y.svg'
import x from '../assets/xa.svg'
const getBarHeight = (level) => {
  switch (level) {
    case "low":
      return "h-[80px]";
    case "mild":
      return "h-[140px]";
    case "moderate":
      return "h-[200px]";
    case "severe":
      return "h-[260px]";
    default:
      return "h-[60px]";
  }
};

const getBarColor = (label) => {
  switch (label) {
    case "physical":
      return "bg-red-500";
    case "physiological":
      return "bg-green-500";
    case "emotional":
      return "bg-yellow-500";
    default:
      return "bg-gray-400";
  }
};

const DependenceBarChart = ({
  physical = "severe",
  physiological = "high",
  emotional = "severe",
}) => {
  const data = [
    { label: "Physical Dependence", value: physical },
    { label: "Physiological Dependence", value: physiological },
    { label: "Emotional Dependence", value: emotional },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-center font-[Poppins] px-4 ml-16 mt-24">
      <div className="flex text-gray-600 text-sm h-[260px] relative w-full">
        {/* Y-axis Labels */}
        <div className="absolute left-0 md:-translate-x-14 -translate-x-13 text-right -top-16 flex flex-col md:space-y-23 space-y-26 md:h-full">
          <span className="md:text-md text-[13px] font-semibold">Severe</span>
          <span className="md:text-md text-[13px] font-semibold">Mild</span>
          <span className="nd:text-md text-[13px] font-semibold">Low</span>
        </div>
         <img src={y} alt=""  className="h-64 absolute -top-14"/>

        {/* Bars */}
        <div className="relative w-full">
  {/* Full-width X-axis line (above labels) */}
  <div className="absolute w-83 md:w-98 h-[1px] bg-gray-700 top-50" />

  {/* Bars */}
  <div className="flex ml-4 md:gap-2 items-end justify-center max-w-100 h-full pb-4">
    {data.map((item, idx) => (
      <div key={idx} className="flex flex-col items-center md:max-w-32">
        <div
          className={`w-16 md:w-20 mb-1 ${getBarHeight(item.value)} ${getBarColor(
            item.label.toLowerCase().split(" ")[0]
          )} rounded-t-xl`}
        ></div>

        <p className="text-center mt-1 mb-1 text-[13px] md:text-md font-medium leading-tight text-gray-700">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</div>

        
      </div>
    </div>
  );
};

export default DependenceBarChart;
