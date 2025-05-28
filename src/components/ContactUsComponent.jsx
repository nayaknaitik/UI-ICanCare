import React, { useState } from "react";
import back from "../assets/contactForm.svg";
import call from "../assets/concall.svg";
import email from "../assets/conmail.svg";
import location from "../assets/conloc.svg";
import X from "../assets/conI.svg";
import In from "../assets/conX.svg";
import Fa from "../assets/conFa.svg";
import GoogleMapsComponent from "./MapComponent";
import Li from "../assets/conLi.svg";
import { CircleChevronRight, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/contact`,
        formData
      );
      console.log(response.data);
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        contact_no: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Failed to send message. Please try again.");
    }
    setShowPopup(true);
  };
  const isMobile = window.innerWidth <= 768;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full font-[Poppins]"
    >
      {/* Popup Modal */}
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center relative">
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-black"
                onClick={() => setShowPopup(false)}
              >
                <XCircle size={24} />
              </button>
              <h2 className="text-2xl font-semibold mb-4">
                Thank You for Contacting Us
              </h2>
              <p className="text-gray-700 text-base">
                Our team will get back to you shortly.
              </p>
            </div>
          </div>
        </>
      )}

      {/* Background Image Section */}
      <div
        className="-mt-40 md:mt-0 relative md:w-full h-[60vh] md:h-[70vh] md:bg-cover bg-center"
        style={{
          backgroundImage: `url(${back})`,
          width: isMobile ? "100%" : "100%",
          height: isMobile ? "56vh" : "70vh",
          backgroundSize: isMobile ? "contain" : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-transparent bg-opacity-80 flex items-center justify-center">
          <h1 className="text-[20px] md:text-6xl font-bold text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative -mt-40 mb-16 max-w-6xl mx-auto p-2 md:p-4 bg-white rounded-xl shadow-xl flex flex-row md:flex-row md:min-h-[80vh]">
        {/* Contact Info Section */}
        <div className="w-65 md:w-1/3 bg-[#F0F9FF] md:p-4 px-5 rounded-xl ">
          <h2 className=" whitespace-nowrap text-[12px] md:text-3xl font-medium text-[#333] mb-2 md:mb-12 mt-7 md:mt-8 md:ml-4">
            Get in touch
          </h2>
          <div className="flex md:ml-4">
            <img
              src={call}
              className="md:h-10 h-4 mt-1 items-center md:mt-2"
              alt=""
            />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2">
              <span className="text-[8px] md:text-2xl font-base">Call Us</span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                9773856664
              </span>
            </p>
          </div>
          <div className="flex md:ml-4">
            <img
              src={email}
              className="md:h-7 h-3 items-center mt-1 md:mt-2"
              alt=""
            />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2">
              <span className="text-[8px] md:text-2xl font-base">Mail Us</span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                support@icancare.com
              </span>
            </p>
          </div>
          <div className="flex md:ml-4">
            <img
              src={location}
              className="md:h-10 h-4 items-center mt-2"
              alt=""
            />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2 md:leading-6">
              <span className="text-[8px] md:text-2xl font-base">
                Head Office
              </span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                Regd. Office: FF-02, Omaxe Green Valley Plaza, Sector 42,
                Faridabad, Haryana – 121001
              </span>
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 mt-3 md:ml-15">
            <img src={X} alt="" className="h-3 md:h-6" />
            <img src={In} alt="" className="h-3 md:h-6" />
            <img src={Fa} alt="" className="h-3 md:h-6" />
            <img src={Li} alt="" className="h-3 md:h-6" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-[12px] md:text-3xl font-medium tracking-tight md:mt-4 text-[#333] mb-4 md:mb-12">
            Send us a Message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12"
          >
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2 text-[7px] md:text-base font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                required="true"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border-b-2 border-gray-300 md:py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                required="true"
                placeholder="Your E-Mail"
                value={formData.email}
                onChange={handleChange}
                className="border-b-2 border-gray-300 md:py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Contact No.
              </label>
              <input
                type="text"
                name="contact_no"
                required="true"
                placeholder="Your Contact No."
                value={formData.contact_no}
                onChange={handleChange}
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                required="true"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                required="true"
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <button
              type="submit"
              className="font-medium flex w-38 md:w-56 md:text-base text-[10px] items-center justify-center gap-2 bg-[#2987D7] hover:scale-[105%] transition ease-in-out duration-300 text-white tracking-tighter py-1 md:py-3 px-6 rounded-lg shadow-lg hover:bg-[#0061ad] cursor-pointer group"
            >
              Send Message
              <CircleChevronRight
                className="text-white transition-transform group-hover:translate-x-4"
                size={isMobile?16:24}
              />
            </button>
          </form>
        </div>
      </div>
      <GoogleMapsComponent map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2660119359944!2d77.29292047547793!3d28.471534491373575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce75bfc38009d%3A0x86f6781199572de1!2sInnovative%20Cancer%20Care%20and%20Rehabilitation%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1748278223783!5m2!1sen!2sin" />
    </motion.div>
  );
};

export default ContactUsComponent;
