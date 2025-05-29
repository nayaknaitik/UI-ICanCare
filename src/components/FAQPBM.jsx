import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
      question: "Is PBM therapy safe?",
      answer: "Yes! It’s FDA-approved and clinically proven.",
    },
    {
      question: "How many sessions do I need?",
      answer: "It depends on the severity of your condition, but many patients feel relief in just 2-3 sessions!",
    },
    {
      question: "Does it hurt?",
      answer: "No! PBM therapy is completely painless and comfortable.",
    },
  ];
  
// Motion variants for container and items
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FAQPBM = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[#F9FBFF] py-16 px-4 font-[Poppins]"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Tag */}
        <div className="inline-block md:text-base text-[12px] bg-white border border-[#76ADFF] text-[#2987D7] font-semibold py-2 px-8 rounded-full shadow-md mb-4 text-sm">
          FAQ
        </div>

        {/* Heading */}
        <h2 className="text-[14px] sm:text-4xl font-bold mb-10 text-[#111827]">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <motion.div variants={containerVariants} className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`transition-all overflow-hidden rounded-lg shadow-md bg-white text-[#111827]`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg focus:outline-none relative"
                >
                  {/* Vertical Bar */}
                  <span className="absolute left-0 top-0 bottom-0 w-3 bg-[#2987D7]"></span>

                  {/* Question Text */}
                  <span className="md:text-base text-[12px] pl-4">{faq.question}</span>

                  {/* Toggle Icon */}
                  {isOpen ? (
                    <Minus className="w-8 h-8 bg-white text-[#2987D7] rounded-full p-1 shadow" />
                  ) : (
                    <Plus className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full p-1 shadow" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden px-6 bg-[#2987D7] ${
                    isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-white/80 text-[10px] ml-4 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <a href="appointment"><button className="bg-[#2987D7] text-white md:px-8 md:py-4 rounded-md hover:scale-[108%] mt-8 px-3 py-3 md:text-base font-semibold transition ease-in-out duration-200" >GET STARTED WITH PBM THERAPY TODAY</button></a>
      </div>
    </motion.section>
  );
};

export default FAQPBM;
