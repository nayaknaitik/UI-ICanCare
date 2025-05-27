import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";

const PBMSuccessRateSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%" }); // Animate progress bar to 100%
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="py-8 px-4 bg-white flex flex-col items-center justify-center font-[poppins]"
    >
      {/* Heading */}
      <div className="rounded-2xl px-6 py-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2987D7] leading-tighter tracking-tighter">
          <span className="text-black">
            " 100% of patients experienced{" "}
          </span>
          faster, pain-free recovery{" "}
          <span className="text-black">
            compared to traditional methods "
          </span>
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mt-10">
        <div className="bg-gray-300 h-4 rounded-full overflow-hidden text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 3, ease: "easeOut" }}
            className="bg-[#2987D7] h-5 rounded-full"
          />
        </div>

        {/* Percentage Text */}
        <div className="flex justify-end mt-4 pr-1">
          {inView && (
            <CountUp
              start={0}
              end={100}
              duration={3}
              suffix="%"
              className="text-xl font-bold text-[#2987D7]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PBMSuccessRateSection; 