import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import CountUp from "react-countup";
import image from '../assets/ninetyim.svg'

const OralCancerPreventionComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: "90%" }); // Animate progress bar to 90%
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="relative md:py-8 py-8 px-4 bg-cover bg-center mt-8 bg-no-repeat flex flex-col items-center font-[poppins] min-h-[30vh] md:min-h-[90vh]"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent"></div>

      {/* Heading */}
      <div className="relative z-10 px-3 py-3  md:px-6 md:py-6 text-center max-w-7xl top-0">
        <h2 className="text-[12px] md:text-3xl sm:text-4xl font-extrabold text-[#2987D7] leading-tighter tracking-tighter">
          <span className="text-black"> <span className="text-[#2987D7] text-[19px] md:text-5xl" >90%</span> of Oral Cancers are <span className="text-[#2987D7]">Prevented</span> with Early Detection!</span>
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="relative z-10 w-90 md:w-full max-w-2xl md:mt-4">
        <div className="bg-gray-300 h-2 md:h-4 md:rounded-full overflow-hidden text-center">
          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            transition={{ duration: 3, ease: "easeOut" }}
            className="bg-[#65BA34] h-5 rounded-l-sm md:rounded-full"
          />
        </div>

        {/* Percentage Text */}
        <div className="flex justify-end mt-4 pr-1">
          {inView && (
            <CountUp
              start={0}
              end={90}
              duration={3}
              suffix="%"
              className="md:text-xl font-bold text-[#65BA34]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OralCancerPreventionComponent;
