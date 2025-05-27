import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import disease from '../assets/disease.svg';
import ar2 from '../assets/ar2.svg';
import ar1 from '../assets/ar1.svg';
import ar3 from '../assets/ar3.svg';
import img from '../assets/imgsto.svg';

const CaseStudyAnimatedComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.2 }
    })
  };

  const imageSequence = [
    disease,
  ];

  const dateTexts = ["July 2021", "Aug 2021", "Sep 2021", "Oct 2021", "Nov 2021"];

  return (
    <div ref={ref} className="hidden md:block w-full mx-auto py-16 px-4 font-[poppins] bg-[#EAF4FE]">
      <h2 className="text-3xl font-bold text-center mb-4">Case Studies</h2>
      <h3 className="text-4xl text-[#2987D7] font-semibold text-center mb-20 tracking-tighter">Patient 1: ICanCaRe Tobacco Intervention Programme</h3>

      <div className="flex flex-row lg:flex-row items-center justify-center gap-12">
        {/* Left Image Stack */}
        <div className="flex items-center gap-12">
          <div className="text-[#2987D7] font-medium mt-2 md:text-sm">
            {dateTexts.map((text, i) => (
              <div key={i} className="flex flex-col items-center md:text-xl">
                <motion.p
                  custom={i}
                  initial="hidden"
                  animate={controls}
                  variants={fadeVariant}
                >
                  {text}
                </motion.p>
                {i < dateTexts.length - 1 && <span className="text-gray-400 md:text-6xl">↓</span>}
              </div>
            ))}
          </div>
          {imageSequence.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Stage ${index + 1}`}
              className="rounded-md mb-3 w-48"
            />
          ))}
        </div>

        {/* Arrows and Timeline */}
        <div className="flex flex-col items-center space-y-8">
            <motion.div custom={6} initial="hidden" animate={controls} variants={fadeVariant} className=" absolute left-[30%] -mt-28 text-center px-4 py-2 rounded-lg max-w-xs text-sm">
          <img src={ar1} alt="" />
          </motion.div>
          <motion.div custom={7} initial="hidden" animate={controls} variants={fadeVariant} className="text-center px-4 py-2 bg-[#DAF0FF] rounded-lg max-w-xs text-base">
            Leukoplakia Progression getting worse <span className="font-bold">before Treatment</span>
          </motion.div>
          <motion.div custom={8} initial="hidden" animate={controls} variants={fadeVariant} className="absolute left-[49%] mt-16 flex mb-10 text-center items-center px-4 py-2 rounded-lg max-w-xs text-sm">
          <img src={ar2} alt="" />
          <p className="text-[#2987D7] text-lg">Dec 2021</p>
          </motion.div>
            
          <motion.div custom={9} initial="hidden" animate={controls} variants={fadeVariant} className="text-center mt-13">
           
            <p className="text-[#2987D7] font-semibold text-xl">Patient Joins the ICanCaRe <br /> Quit Tobacco Programme</p>
          </motion.div>
          <motion.div custom={10} initial="hidden" animate={controls} variants={fadeVariant} className="absolute left-[49%] mt-48 mb-10 text-center px-4 py-2 flex items-center rounded-lg max-w-xs text-sm">
          <img src={ar2} alt="" />
          <p className="text-[#2987D7] text-lg">Feb 2022</p>
          </motion.div>
          <motion.div custom={11} initial="hidden" animate={controls} variants={fadeVariant} className="text-center px-4 py-2 bg-[#DAF0FF] rounded-lg max-w-xs mt-12 text-base">
            <span className="font-semibold">Leukoplakia Gone!</span> <br />No Cancer Treatment is Required
          </motion.div>
          <motion.div custom={12} initial="hidden" animate={controls} variants={fadeVariant} className=" absolute left-180 mt-80 text-center px-4 py-2 rounded-lg max-w-xs text-sm">
          <img src={ar3} alt="" />
          </motion.div>
          
        </div>

        {/* Final Image */}
        <motion.img
          src={img}
          alt="Final Result"
          className="w-76 rounded-md"
          custom={13}
          initial="hidden"
          animate={controls}
          variants={fadeVariant}
        />
      </div>
    </div>
  );
};

export default CaseStudyAnimatedComponent;