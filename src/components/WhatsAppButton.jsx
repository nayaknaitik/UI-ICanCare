import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919773856664"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 mb-38 md:bottom-8 md:right-8 z-[9999] w-12 h-12 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 ease-in-out"
      style={{
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
      }}
    >
      <FaWhatsapp className="text-white text-2xl md:text-4xl" />
    </a>
  );
};

export default WhatsAppButton; 