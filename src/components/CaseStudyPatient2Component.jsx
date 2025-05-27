import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import img1 from "../assets/sec21.svg";
import img2 from "../assets/sec22.svg";
import img3 from "../assets/sec23.svg";
import ar from "../assets/ar4.svg";

const CaseStudyPatient2Component = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40% 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.6, duration: 0.8 },
    }),
  };

  return (
    <div
      ref={ref}
      className="w-full  px-6 py-12 font-[poppins] text-center mt-20"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3">
        Patient 2:{" "}
        <span className="text-[#2987D7]">
          ICanCaRe Leukoplakia (Lesions) Treatment
        </span>
      </h2>
      <p className="text-sm md:text-base max-w-3xl mx-auto mb-10">
        47 year old – Smoker & chewer since the age of 14 was diagnosed with
        Heterogeneous Erythroleukoplakia
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-7xl mx-auto">
        {/* Column 1 */}
        <motion.div
          custom={0}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          className="space-y-2 flex flex-col items-center justify-center text-center"
        >
          <p className="text-xs text-center md:text-xs max-w-xl mx-auto">
            47 year old Smoker & chewer since the age <br />of 14 was  diagnosed with
            Heterogeneous Erythroleukoplakia
          </p>
          <img src={img1} alt="Before" className="w-68 rounded-xl" />
          <div className="text-sm text-gray-700">
            Leukoplakia was getting worse before Treatment
            <br />
            <span className="text-[#2987D7] font-semibold">
              Limited Mouth opening of 2.5 cm
            </span>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          className="space-y-3 mr-4"
        >
          <img src={ar} alt="Before" className="w-30 rounded-xl mx-auto" />
        </motion.div>

        {/* ar */}
        <motion.div
          custom={2}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          className="space-y-2 flex flex-col items-center justify-center text-center"
        >
          <p className="text-sm md:text-xs max-w-3xl mx-auto">
            Patient joins the ICanCaRe Tobacco Cessation Programme
          </p>
          <img src={img2} alt="During Treatment" className="w-72 rounded-xl" />
          <div className="text-sm text-gray-700 mx-auto">
            In just 45 Days, his Leukoplakia significantly reduced!
            <br />
            <span className="text-[#2987D7] font-semibold">
              Mouth opening improved to 3.5 cm
            </span>
          </div>
        </motion.div>
        <motion.div
          custom={3}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          className="space-y-3"
        >
          <img src={ar} alt="Before" className="w-30 rounded-xl" />
        </motion.div>
        {/* Column 3 */}
        <motion.div
          custom={4}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
          className="space-y-2 flex flex-col items-center justify-center text-center"
        >
            <p className="text-sm md:text-xs max-w-3xl mx-auto">
            Over the next 6 Months, he continued his journey,<br /> receiving Photo Treatment of Residual Leukoplakia.
          </p>
          <img src={img3} alt="After Treatment" className="w-64 rounded-xl" />
          <div className="text-sm text-gray-700">
            His mouth healed completely without any surgery.
            <br />
            <span className="text-[#2987D7] font-semibold">
              No Further Cancer Treatment Required!
            </span>
          </div>
        </motion.div>
      </div>

      <p className="mt-6 text-lg md:text-3xl font-medium text-[#2987D7]">
        Leukoplakia gone in{" "}
        <span className="text-black !font-bold tracking-tighter">45 Days!</span>
      </p>
    </div>
  );
};

export default CaseStudyPatient2Component;
