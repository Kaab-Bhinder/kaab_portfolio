"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "297b9753-f5af-4754-a24d-3fa6ffcd0a0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 md:px-[12%] py-10 sm:py-16 md:py-20 scroll-mt-20 bg-light-bg dark:bg-dark-bg"
      id="contact"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-light-textSecondary dark:text-dark-textSecondary"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-2 sm:mb-4 text-green-600 dark:text-green-400"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 mx-auto mt-2 mb-4 sm:mb-6 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 font-Ovo text-light-textSecondary dark:text-dark-textSecondary text-sm sm:text-base md:text-lg leading-relaxed px-4"
      >
        Ready to bring your ideas to life? Let's collaborate and create something amazing together. 
        Whether you need a modern website, full-stack application, or technical consultation, 
        I'm here to help transform your vision into reality.
      </motion.p>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">
        {/* Left Side - Contact Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">
              Send us a message
            </h3>
            <div className="w-full h-px bg-red-500 dark:bg-red-400 mb-6 shadow-[0_0_8px_1px_rgba(255,0,0,0.15)]"></div>
          </div>
          <form
            onSubmit={onSubmit}
            className="space-y-6 p-8 bg-light-surface dark:bg-dark-surface rounded-2xl shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl border-2 border-light-textSecondary/20 dark:border-dark-textSecondary/20 bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary focus:border-light-button-primary dark:focus:border-dark-button-primary focus:ring-2 focus:ring-light-button-primary/20 dark:focus:ring-dark-button-primary/20 outline-none transition-all duration-300"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl border-2 border-light-textSecondary/20 dark:border-dark-textSecondary/20 bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary focus:border-light-button-primary dark:focus:border-dark-button-primary focus:ring-2 focus:ring-light-button-primary/20 dark:focus:ring-dark-button-primary/20 outline-none transition-all duration-300"
              />
            </div>
            <input
              name="subject"
              type="text"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl border-2 border-light-textSecondary/20 dark:border-dark-textSecondary/20 bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary focus:border-light-button-primary dark:focus:border-dark-button-primary focus:ring-2 focus:ring-light-button-primary/20 dark:focus:ring-dark-button-primary/20 outline-none transition-all duration-300"
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl border-2 border-light-textSecondary/20 dark:border-dark-textSecondary/20 bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text placeholder:text-light-textSecondary dark:placeholder:text-dark-textSecondary focus:border-light-button-primary dark:focus:border-dark-button-primary focus:ring-2 focus:ring-light-button-primary/20 dark:focus:ring-dark-button-primary/20 outline-none transition-all duration-300 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full py-4 px-8 bg-light-button-primary text-light-button-primaryText font-bold rounded-xl shadow-lg hover:bg-light-button-primaryHover dark:bg-dark-button-primary dark:text-dark-button-primaryText dark:hover:bg-dark-button-primaryHover transition-all duration-300 flex items-center justify-center gap-3"
              type="submit"
            >
              Send Message
              <Image
                src={assets.right_arrow_white}
                alt="Send"
                width={20}
                height={20}
              />
            </motion.button>
            {result && (
              <p className="text-center text-light-button-primary dark:text-dark-button-primary font-semibold">
                {result}
              </p>
            )}
          </form>
        </motion.div>

        {/* Right Side - Contact Information */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2">
              Any query? Reach us out on
            </h3>
            <div className="w-full h-px bg-red-500 dark:bg-red-400 mb-6 shadow-[0_0_8px_1px_rgba(255,0,0,0.15)]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:kaabbhinder28@gmail.com"
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-light-surface dark:bg-dark-surface shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <HiMail className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">Email</h3>
              <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-blue-500 transition-colors text-sm">
                kaabbhinder28@gmail.com
              </span>
            </a>

            {/* Phone */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-light-surface dark:bg-dark-surface shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-3">
                <HiPhone className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">Phone</h3>
              <p className="text-light-textSecondary dark:text-dark-textSecondary text-sm">+92 318 0943134</p>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/Kaab-Bhinder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-light-surface dark:bg-dark-surface shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-slate-800 dark:bg-slate-700 rounded-full flex items-center justify-center mb-3 group-hover:bg-slate-900 dark:group-hover:bg-slate-600 transition-colors">
                <FaGithub className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">GitHub</h3>
              <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors text-sm">
                View Projects
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-light-surface dark:bg-dark-surface shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                <FaLinkedin className="text-white text-xl" />
              </div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-2">LinkedIn</h3>
              <span className="text-light-textSecondary dark:text-dark-textSecondary group-hover:text-blue-600 transition-colors text-sm">
                Connect with me
              </span>
            </a>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-4 text-center">Our Location</h3>
            <div className="rounded-2xl overflow-hidden shadow-xl border border-light-textSecondary/10 dark:border-dark-textSecondary/10 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.9338451902!2d72.98014415136719!3d33.6143863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b4!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1704825123456!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Islamabad, Pakistan Location"
              ></iframe>
            </div>
            <p className="text-center text-light-textSecondary dark:text-dark-textSecondary mt-3">
              Islamabad, Pakistan
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
