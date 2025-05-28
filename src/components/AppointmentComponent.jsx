import React, { useState } from "react";
import axios from "axios";
import { CircleChevronRight } from "lucide-react";
import backgroundImage from "../assets/appointment.svg";
import call from "../assets/concall.svg";
import email from "../assets/conmail.svg";
import location from "../assets/conloc.svg";
import X from "../assets/conI.svg";
import In from "../assets/conX.svg";
import Fa from "../assets/conFa.svg";
import Li from "../assets/conLi.svg";
import GoogleMapsComponent from "./MapComponent";
import { motion } from "framer-motion";
import { useEffect } from "react";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const AppointmentComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact_no: "",
    reason: "",
    appointment_date: "",
    appointment_type: [],
  });

  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      appointment_type: checked
        ? [...prev.appointment_type, value]
        : prev.appointment_type.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/appointment`, {
        ...formData,
        appointment_type: formData.appointment_type.join(","), // convert array to string
      });

      setStatus("✅ Appointment submitted successfully!");
      setFormData({
        name: "",
        email: "",
        contact_no: "",
        reason: "",
        appointment_date: "",
        appointment_type: [],
      });

      setShowModal(true); // Show confirmation modal
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to submit appointment.");
    }
  };
  const isMobile = window.innerWidth <= 768;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full font-[Poppins]"
    >
      {/* Success Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn border">
              <h3 className="text-2xl font-bold text-[#2987D7] mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Our team will get back to you shortly.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#2987D7] text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {/* Background Header */}
      <div
        className="-mt-40 md:mt-0 relative md:w-full h-[60vh] md:h-[70vh] md:bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: isMobile ? "100%" : "100%",
          height: isMobile ? "60vh" : "70vh",
          backgroundSize: isMobile ? "contain" : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-transparent bg-opacity-80 flex items-center justify-center">
          <h1 className="text-[20px] md:text-6xl font-bold text-white">
            Book Appointment
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative -mt-40 mb-16 max-w-6xl mx-auto p-2 md:p-4 bg-white rounded-xl shadow-xl flex flex-row md:flex-row md:min-h-[80vh]">
        {/* Left Info */}
        <div className="w-65 md:w-1/3 bg-[#F0F9FF] md:p-4 px-5 rounded-xl">
          <h2 className=" whitespace-nowrap text-[12px] md:text-3xl font-medium text-[#333] mb-2 md:mb-12 mt-7 md:mt-8 md:ml-4">
            Get in touch
          </h2>
          <div className="flex md:ml-4">
            <img src={call} className="md:h-10 h-4 mt-1 items-center md:mt-2" alt="Call" />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2">
              <span className="text-[8px] md:text-2xl font-base">Call Us</span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                9773856664
              </span>
            </p>
          </div>
          <div className="flex md:ml-4">
            <img src={email} className="md:h-7 h-3 items-center mt-1 md:mt-2" alt="Mail" />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2">
              <span className="text-[8px] md:text-2xl font-base">Mail Us</span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                support@icancare.com
              </span>
            </p>
          </div>
          <div className="flex md:ml-4">
            <img src={location} className="md:h-10 h-4 items-center mt-2" alt="Location" />
            <p className="text-lg mb-5 md:mb-12 ml-2 leading-2 md:leading-6">
              <span className="text-[8px] md:text-2xl font-base">Head Office</span>
              <br />
              <span className="text-[6px] md:text-sm opacity-65 tracking-tighter">
                FF-02, Omaxe Green Valley Plaza, Sector 42, Faridabad, Haryana –
                121001
              </span>
            </p>
          </div>
          <div className="flex gap-2 md:gap-4 mt-3 md:ml-15">
            <img src={X} alt="X"  className="h-3 md:h-6" />
            <img src={In} alt="Instagram"  className="h-3 md:h-6" />
            <img src={Fa} alt="Facebook"  className="h-3 md:h-6" />
            <img src={Li} alt="LinkedIn"  className="h-3 md:h-6" />
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-[12px] md:text-3xl font-medium tracking-tight md:mt-4 text-[#333] mb-4 md:mb-12">
            Get Consultation
          </h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-12"
          >
            <div className="flex flex-col">
              <label className="text-gray-600 mb-2 text-[7px] md:text-base font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Contact No.
              </label>
              <input
                type="text"
                name="contact_no"
                value={formData.contact_no}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Additional Info
              </label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Preferred Date
              </label>
              <input
                type="date"
                name="appointment_date"
                value={formData.appointment_date}
                onChange={handleChange}
                required
                className="border-b-2 border-gray-300 py-2 text-[7px] md:text-base outline-none focus:border-[#2987D7]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 text-[7px] md:text-base mb-2 font-semibold">
                Reason for Appointment
              </label>
              <div className=" md:space-y-2">
                {[
                  "Quit Tobacco",
                  "Talk to an Expert",
                  "Get Photo Treatment",
                  "Visit for Oral Screening",
                  "Others",
                ].map((type, index) => (
                  <label key={index} className="flex md:text-base text-[6px] items-center">
                    <input
                      type="checkbox"
                      value={type}
                      checked={formData.appointment_type.includes(type)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    {type}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="font-medium flex w-40 md:w-56 md:text-base text-[10px] items-center justify-center gap-2 bg-[#2987D7] hover:scale-[105%] transition ease-in-out duration-300 text-white tracking-tighter py-1 md:py-3 px-6 rounded-lg shadow-lg hover:bg-[#0061ad] cursor-pointer group"
            >
              Book Appointment
              <CircleChevronRight
                className="text-white transition-transform group-hover:translate-x-4"
                size={isMobile?16:24}
              />
            </button>
          </form>
        </div>
      </div>

      <GoogleMapsComponent map = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.831786131295!2d77.33201304136759!3d28.634803216238872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52ab59613c9%3A0xe042397c001c2d99!2sMax%20Super%20Speciality%20Hospital%2C%20Vaishali!5e0!3m2!1sen!2sin!4v1748079091369!5m2!1sen!2sin"/>
    </motion.div>
  );
};

export default AppointmentComponent;
