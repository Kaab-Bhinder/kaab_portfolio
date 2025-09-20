"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = ({ isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Replace with your actual WhatsApp number (include country code without + sign)
  // Example formats:
  // Pakistan: 923001234567
  // USA: 15551234567
  // UK: 447123456789
  const whatsappNumber = "923180943134"; // Your WhatsApp number
  const message = "Hi! I'm interested in your web development services. Can we discuss my project?";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ 
          opacity: showTooltip ? 1 : 0,
          x: showTooltip ? 0 : 10
        }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-16 right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap"
        style={{ 
          visibility: showTooltip ? 'visible' : 'hidden',
          pointerEvents: 'none'
        }}
      >
        Chat with me on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleClick}
        onHoverStart={() => {
          setIsHovered(true);
          setShowTooltip(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
          setShowTooltip(false);
        }}
        onTouchStart={() => setShowTooltip(true)}
        onTouchEnd={() => setShowTooltip(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          delay: 1 // Appear after page load
        }}
      >
        {/* Pulse animation background */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full"
          animate={{
            scale: isHovered ? 1.2 : [1, 1.2, 1],
            opacity: isHovered ? 0.3 : [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: isHovered ? 0.3 : 2,
            repeat: isHovered ? 0 : Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Main button */}
        <div className="relative w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer">
          <motion.div
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FaWhatsapp className="text-white text-2xl" />
          </motion.div>
          
          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></div>
        </div>

        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full pointer-events-none"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 0, opacity: 0.5 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>

      {/* Chat bubbles animation */}
      <div className="absolute -top-2 -right-2 pointer-events-none">
        <motion.div
          className="w-3 h-3 bg-green-400 rounded-full"
          animate={{
            y: [-20, -40, -20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="absolute w-2 h-2 bg-green-300 rounded-full -left-1"
          animate={{
            y: [-15, -35, -15],
            opacity: [0, 1, 0],
            scale: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.3
          }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 bg-green-200 rounded-full -left-2 top-1"
          animate={{
            y: [-10, -30, -10],
            opacity: [0, 1, 0],
            scale: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.6
          }}
        />
      </div>
    </div>
  );
};

export default WhatsAppButton;