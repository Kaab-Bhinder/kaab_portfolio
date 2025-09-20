import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart, FaArrowUp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Kaab-Bhinder",
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/",
      label: "LinkedIn", 
      color: "hover:text-blue-600"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/kaabhinder?igsh=cGhxaDFuYXV3azZk",
      label: "Instagram",
      color: "hover:text-pink-500"
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/kaabhinder",
      label: "X (Twitter)",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gradient-to-br from-light-surface to-light-bg dark:from-dark-surface dark:to-dark-bg border-t border-light-border/20 dark:border-dark-border/20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-light-button-primary via-transparent to-light-button-primaryHover dark:from-dark-button-primary dark:via-transparent dark:to-dark-button-primaryHover"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1 text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-6"
            >
              <Image
                src={isDarkMode ? assets.logo_dark : assets.logo}
                alt="Muhammad Kaab Bhinder"
                className="w-32 sm:w-36"
              />
            </motion.div>
            
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              Passionate full-stack developer crafting digital experiences that inspire and engage. 
              Let's build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 text-left"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Quick Links
            </h3>
            
            <div className="grid grid-cols-2 gap-3">
              {['About', 'Skills', 'Experience', 'Services', 'Work', 'Contact'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-all duration-300 text-sm sm:text-base py-1 text-left"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1 text-left"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-6">
              Connect With Me
            </h3>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`
                      p-3 bg-light-surface dark:bg-dark-surface rounded-xl border border-light-border/20 dark:border-dark-border/20
                      text-light-text-secondary dark:text-dark-text-secondary ${social.color}
                      hover:bg-light-button-primary/5 dark:hover:bg-dark-button-primary/5
                      hover:border-light-button-primary/30 dark:hover:border-dark-button-primary/30
                      hover:shadow-lg transition-all duration-300
                    `}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover text-light-button-primaryText dark:text-dark-button-primaryText rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium"
            >
              <FaArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-light-border dark:via-dark-border to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm"
        >
          <div className="text-light-text-secondary dark:text-dark-text-secondary">
            <span>© 2025 Muhammad Kaab Bhinder. All rights reserved.</span>
          </div>
          
          <div className="text-light-text-secondary dark:text-dark-text-secondary">
            <span>Portfolio v2.0</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-light-button-primary via-light-button-primaryHover to-light-button-primary dark:from-dark-button-primary dark:via-dark-button-primaryHover dark:to-dark-button-primary opacity-50"></div>
    </motion.footer>
  );
};

export default Footer;
