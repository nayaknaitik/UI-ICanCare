import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Will I Get Addicted To Nicotine Replacement Therapy?",
    answer:
      "No, the medications are prescribed under the supervision of the cessation specialist and are stepped down as the quitter progresses on their journey to prevent addiction.",
  },
  {
    question: "Is This Program Suitable For Gutkha And Paan Users?",
    answer: "Yes! We specialize in smokeless tobacco cessation too.",
  },
  {
    question: "What If I Relapse?",
    answer: "We offer relapse prevention support to keep you on track.",
  },
  {
    question: "Can I Quit Without Nicotine Replacement Therapy (NRT)?",
    answer: "Yes! We tailor your quit plan with or without NRT.",
  },
  {
    question: "How Long Does It Take To Quit?",
    answer: "Most people quit within 12 weeks with our guided support.",
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

const FAQSection = () => {
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
        <div className="inline-block bg-white border border-[#76ADFF] text-[#2987D7] font-semibold py-2 px-8 rounded-full shadow-md mb-4 text-sm">
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
                  <span className="tracking-tight pl-1 md:pl-4 text-[12px] md:text-xl">{faq.question}</span>

                  {/* Toggle Icon */}
                  {isOpen ? (
                    <Minus className="md:w-8 md:h-8 bg-white text-[#2987D7] rounded-full p-1 shadow" />
                  ) : (
                    <Plus className="md:w-8 md:h-8 bg-gray-200 text-gray-500 rounded-full p-1 shadow" />
                  )}
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden px-6 bg-[#2987D7] ${
                    isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
                  }`}
                >
                  <p className="text-white/80 text-sm ml-4 leading-relaxed text-left">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
