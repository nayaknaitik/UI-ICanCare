import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/icancareLogo.svg";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tickingRef = useRef(false);
  const buffer = 10; // Reduce sensitivity to avoid flicker

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const isScrollingDown = currentScrollY > lastScrollY.current + buffer;
          const isScrollingUp = currentScrollY < lastScrollY.current - buffer;

          if (currentScrollY > 100 && isScrollingDown) {
            setIsCollapsed(true);
          } else if (isScrollingUp || currentScrollY < 80) {
            setIsCollapsed(false);
          }

          lastScrollY.current = currentScrollY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const navVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20, height: 0 },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <header
      className={`w-full sticky top-0 z-50 font-[poppins] transition-all duration-300 ${
        isCollapsed
          ? "py-2 shadow-md bg-gradient-to-b from-[#D6EEFF] to-white"
          : "py-3 bg-gradient-to-b from-[#D6EEFF] to-white"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <div className="flex justify-left gap-2">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img
              src={Logo}
              alt="Logo"
              className={`cursor-pointer transition-all duration-300 ${
                isCollapsed ? "h-11" : "h-20"
              }`}
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <motion.nav
          className="hidden md:flex gap-6 text-gray-800 font-medium text-sm"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { href: "/", text: "Quit Tobacco" },
            { href: "oral-disease", text: "Oral Disease" },
            { href: "oral-treatment", text: "Oral Treatment" },
            { href: "screening-camp", text: "Screening Camp" },
            { href: "contact", text: "Contact Us" },
            { href: "appoinment", text: "Book Appointment" },
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              variants={linkVariants}
              className="transition opacity-75 hover:opacity-100 hover:scale-[105%]"
            >
              {link.text}
            </motion.a>
          ))}
        </motion.nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block ml-4">
          <a
            href="#quit-now"
            className="bg-[#1C94FB] hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition ease-in-out duration-300 hover:scale-[105%] cursor-pointer"
          >
            Quit Now !
          </a>
        </div>

        {/* Mobile Menu Icon */}
        {/* Mobile Menu Icon + CTA */}
        <div className="md:hidden flex items-center ml-auto gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
          <a
            href="/"
            className="bg-[#1C94FB] hover:bg-blue-700 text-white px-3 py-1.5 rounded-md font-semibold text-sm transition ease-in-out duration-300"
          >
            Quit Now !
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-white shadow-lg px-6 pt-4 pb-6 text-center text-gray-800 font-medium"
          >
            <div className="flex flex-col items-center space-y-4 max-w-xs mx-auto">
              {[
                { href: "/", text: "Quit Tobacco" },
                { href: "oral-disease", text: "Oral Disease" },
                { href: "oral-treatment", text: "Oral Treatment" },
                { href: "screening-camp", text: "Screening Camp" },
                { href: "contact", text: "Contact Us" },
                { href: "appoinment", text: "Book Appointment" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-lg py-2 hover:text-blue-500 transition"
                >
                  {link.text}
                </a>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 w-full">
                <a
                  href="#quit-now"
                  className="w-full block bg-[#1C94FB] hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition ease-in-out duration-300 text-center"
                >
                  Quit Now !
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
