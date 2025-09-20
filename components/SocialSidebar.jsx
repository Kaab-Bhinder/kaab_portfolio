import React from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Kaab-Bhinder",
      label: "GitHub",
      color: "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/",
      label: "LinkedIn",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: FaXTwitter,
      href: "https://twitter.com/kaabhinder",
      label: "X (Twitter)",
      color: "text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/kaabhinder?igsh=cGhxaDFuYXV3azZk",
      label: "Instagram",
      color: "text-pink-500 hover:text-pink-600"
    },
    {
      icon: FaEnvelope,
      href: "mailto:kaabbhinder28@gmail.com",
      label: "Email",
      color: "text-red-500 hover:text-red-600"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center"
    >
      {/* Social icons container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col items-center gap-4 p-4 rounded-2xl backdrop-blur-md bg-light-surface/20 dark:bg-dark-surface/20"
      >
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2,
                y: -2
              }}
              whileTap={{ scale: 0.9 }}
              className={`
                relative group p-2 rounded-xl transition-all duration-300
                ${social.color}
                hover:bg-light-surface/50 dark:hover:bg-dark-surface/50
                hover:shadow-lg
              `}
              aria-label={social.label}
            >
              {/* Icon */}
              <IconComponent className="w-5 h-5 relative z-10" />
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-light-surface dark:bg-dark-surface text-light-text-primary dark:text-dark-text-primary text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                {social.label}
                {/* Tooltip arrow */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-light-surface dark:border-l-dark-surface" />
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default SocialSidebar;