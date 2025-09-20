import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  return (
    <div
      className="w-full flex items-center justify-center bg-transparent px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-24 sm:pb-28 md:pb-32"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="w-full max-w-none w-[90%] bg-light-surface dark:bg-dark-surface rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-0 relative overflow-visible"
        style={{
          minHeight: "auto",
          marginTop: "16px",
          marginBottom: "16px",
          paddingTop: "1rem",
        }}
      >
        {/* Mobile Profile Image - Only visible on mobile */}
        <div className="block md:hidden w-full flex items-center justify-center pt-6 pb-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <Image
              src={assets.profile_img}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover shadow-lg"
              style={{
                objectPosition: "center",
              }}
            />
          </motion.div>
        </div>

        {/* Left Side Content */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start px-6 sm:px-8 md:px-20 lg:px-24 xl:px-28 py-8 sm:py-10 md:py-12 z-10 relative">
            {/* Badge */}
            <div className="mb-4 sm:mb-6 flex justify-center md:justify-start">
                <span className="flex items-center gap-2 px-3 sm:px-4 py-2 w-fit rounded-full bg-green-500 text-white text-xs sm:text-sm font-semibold shadow-sm dark:bg-green-600 dark:text-white">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
                  <span className="hidden sm:inline">Available for Freelance</span>
                  <span className="sm:hidden">Available</span>
                </span>
            </div>

            {/* Heading */}
            <div className="relative w-full flex flex-row items-center justify-center md:items-start md:justify-start mb-4 sm:mb-6">
              <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-Ovo text-center md:text-left text-green-600 dark:text-green-400 leading-tight relative z-20"
                style={{ lineHeight: "1.1" }}
              >
                Hi There,
                <br />
                I'm{" "}
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-Ovo text-red-300 relative z-20">
                  Muhammad Kaab
                </span>
              </motion.h1>
            </div>

            {/* Subtext */}
            <motion.p
              className="max-w-2xl text-center md:text-left text-gray-400 dark:text-gray-200 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              A Full Stack Web Developer specializing in building modern,
              conversion-focused websites. <br className="hidden sm:block" />
              Helping businesses turn ideas into fast, scalable, and engaging
              digital experiences.
            </motion.p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://github.com/Kaab-Bhinder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                style={{ color: '#6e7681' }}
              >
                <FaGithub size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                style={{ color: '#0077B5' }}
              >
                <FaLinkedin size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="mailto:kaabbhinder28@gmail.com"
                className="hover:scale-110 transition"
                style={{ color: '#EA4335' }}
              >
                <FaEnvelope size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://twitter.com/kaabhinder"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                style={{ color: '#000000' }}
              >
                <FaXTwitter size={24} className="sm:w-7 sm:h-7" />
              </a>
              <a
                href="https://www.instagram.com/kaabhinder?igsh=cGhxaDFuYXV3azZk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
                style={{ color: '#E4405F' }}
              >
                <FaInstagram size={24} className="sm:w-7 sm:h-7" />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full items-center justify-center md:justify-start">
              <motion.a
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.18, delay: 0.3 }}
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 border rounded-full font-semibold flex items-center justify-center gap-2 bg-light-button-primary text-light-button-primaryText border-light-button-primary dark:bg-dark-button-primary dark:text-dark-button-primaryText dark:border-dark-button-primary transition-colors duration-200 hover:bg-light-button-primaryHover hover:text-light-button-primaryText dark:hover:bg-dark-button-primaryHover dark:hover:text-dark-button-primaryText text-sm sm:text-base max-w-xs"
              >
                <span>Contact Me</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </motion.a>

              <motion.a
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.18, delay: 0.4 }}
                href="/cv.pdf"
                download
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 border rounded-full font-semibold flex items-center justify-center gap-2 bg-light-button-secondary text-light-button-secondaryText border-light-button-secondary dark:bg-dark-button-secondary dark:text-dark-button-secondaryText dark:border-dark-button-secondary transition-colors duration-200 hover:bg-light-button-secondaryHover hover:text-light-button-secondaryText dark:hover:bg-dark-button-secondaryHover dark:hover:text-dark-button-secondaryText max-w-xs"
              >
                  <span className="text-light-button-secondaryText dark:text-dark-button-secondaryText">My Curriculum Vitae(CV)</span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4v8m0 0l-3-3m3 3l3-3m-6 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
              </motion.a>
            </div>
          </div>

        {/* Right Side Image - Only visible on desktop */}
        <div
          className="hidden md:flex flex-1 items-center justify-center relative z-0"
          style={{ marginLeft: "-10rem", marginRight: "3rem" }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            className="w-full flex items-center justify-center"
          >
            <div className="relative w-full flex items-center justify-center">
              <Image
                src={assets.profile_img}
                alt="Profile"
                className="w-[420px] h-[420px] rounded-2xl object-cover shadow-xl"
                style={{
                  objectPosition: "center",
                  maskImage:
                    "linear-gradient(to left, transparent 0%, black 30%)",
                  WebkitMaskImage:
                    "linear-gradient(to left, transparent 0%, black 30%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
