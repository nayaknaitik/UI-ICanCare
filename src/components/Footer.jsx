import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import Call from "../assets/callicon.svg";
import Email from "../assets/mail.svg";
import Instagram from "../assets/insat.svg";
import Facebook from "../assets/face.svg";
import LinkedIn from "../assets/link.svg";
import Logo from "../assets/icancareLogo.svg";
import pdf from "../assets/pdf.svg";
import X from '../assets/x.svg';
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your feedback" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      // Submit feedback
      await axios.post(`${API_BASE_URL}/api/feedback`, { feedback });
      setFeedback("");
      setSubmitStatus({ type: "success", message: "Thank you for your feedback!" });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSubmitStatus({ type: "error", message: "Failed to submit feedback. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <footer className="bg-[#066BC0] text-white font-[Poppins]">
      {/* Main Footer Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-16 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-2">
        {/* Logo and Address */}
          <div className="md:ml-4">
            <span className="text-3xl md:text-5xl font-bold">iCanCaRe</span>
          <p className="text-xs font-light opacity-75 leading-tight mt-2">
            Regd. Office: FF-02, Omaxe Green Valley Plaza, Sector 42, Faridabad,
            Haryana - 121001
          </p>
            <div className="flex gap-4 mt-4 md:mt-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex transition ease-in-out duration-200 items-center hover:scale-[110%] justify-center shadow-lg">
            <a href="">
                  <img src={pdf} alt="PDF" className="w-5 h-5 md:w-6 md:h-6 items-center justify-center" />
            </a>
          </div>
              <div className="text-sm md:text-base font-semibold">
              Download Free Guide <br /> & Get Started Now
            </div>
          </div>
        </div>

        {/* Quick Links */}
          <div className="md:ml-16 mt-6 md:mt-4">
            <h3 className="font-bold text-base md:text-lg mb-2">Quick Links</h3>
            <div className="h-0.5 md:h-1 rounded-r-full w-16 md:w-20 bg-white mb-4 md:mb-6"></div>
            <ul className="space-y-2 md:space-y-4">
              <li className="font-light text-xs md:text-sm"><a href="oral-disease">Oral Disease</a></li>
              <li className="font-light text-xs md:text-sm"><a href="oral-treatment">Oral Treatment</a></li>
              <li className="font-light text-xs md:text-sm"><a href="screening-camp">Screening Camp</a></li>
          </ul>
        </div>

        {/* Contact */}
          <div className="mt-6 md:mt-4">
            <h3 className="font-bold text-base md:text-lg mb-2">Contact</h3>
            <div className="h-0.5 md:h-1 rounded-r-full w-16 md:w-20 bg-white mb-4 md:mb-6"></div>
            <div className="flex items-center mb-3 md:mb-4">
              <img src={Call} alt="Phone" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              <span className="font-light text-xs md:text-sm">9773856664</span>
          </div>
          <div className="flex items-center">
              <img src={Email} alt="Email" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
              <span className="font-light text-xs md:text-sm">support@icancare.com</span>
          </div>
            <div className="flex mt-3 md:mt-4 gap-3">
              <a href="https://www.instagram.com/icancare2015/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://x.com/icancare2015" target="_blank">
                <img src={X} alt="Email" className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.facebook.com/icancare.org" target="_blank">
                <img src={Facebook} alt="Facebook" className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="https://www.linkedin.com/company/icancare2015" target="_blank">
                <img src={LinkedIn} alt="LinkedIn" className="w-4 h-4 md:w-5 md:h-5" />
              </a>
          </div>
        </div>

        {/* Feedback Section */}
        <div>
            <h3 className="font-semibold text-xl md:text-2xl mb-2 mt-6 md:mt-4 tracking-tighter">We Value Your Feedback !</h3>
            <div className="h-0.5 md:h-1 rounded-r-full w-20 md:w-24 bg-white mb-3 md:mb-4"></div>
            <p className="text-xs md:text-sm opacity-60 mb-3 md:mb-4">
              Tell us what you think...
            </p>
            <div className="flex flex-col gap-2">
  <div className="flex">
    <input
      type="text"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
      placeholder="Your feedback matters..."
                  className="rounded-l-full py-2 md:py-3 px-3 md:px-4 w-full md:w-60 text-xs md:text-base text-gray-800 shadow-lg bg-white focus:outline-none placeholder-gray-500"
    />
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`rounded-r-full ${
                    isSubmitting ? 'bg-gray-500' : 'bg-[#65BA34] hover:bg-green-600'
                  } text-white px-4 md:px-8 py-2 md:py-3 text-xs md:text-base font-semibold shadow-lg transition-colors`}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
    </button>
              </div>
              {submitStatus.message && (
                <p className={`text-xs md:text-sm ${
                  submitStatus.type === 'error' ? 'text-red-200' : 'text-green-200'
                }`}>
                  {submitStatus.message}
                </p>
              )}
  </div>
</div>
      </div>

      {/* Bottom Bar */}
        <div className="bg-black py-2 md:py-3 text-center text-gray-400 text-xs md:text-sm">
          <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6">
          <span>© 2025 ICanCaRe</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-white hover:text-gray-400 transition flex items-center"
          >
              Back To Top <ArrowUp className="inline-block ml-1 w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
