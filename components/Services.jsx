import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 md:px-[12%] py-10 scroll-mt-20 bg-light-bg dark:bg-dark-bg"
      id="services"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-light-textSecondary dark:text-dark-textSecondary"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-green-600 dark:text-green-400 mb-4 sm:mb-6"
      >
        My Services
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 mx-auto mt-2 mb-6 sm:mb-8 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-2 mb-8 sm:mb-12 font-Ovo text-sm sm:text-base px-4 text-light-textSecondary dark:text-dark-textSecondary"
      >
        We deliver tailored web solutions with a strong focus on innovation,
        performance, and customer satisfaction.
      </motion.p>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto">
        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.title + index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-light-surface dark:bg-dark-surface rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:border-light-button-primaryHover/20 dark:hover:border-dark-button-primaryHover/20 h-full flex flex-col">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Image 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-8 h-8 sm:w-10 sm:h-10 filter brightness-0 invert" 
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold text-light-text dark:text-dark-text mb-4 leading-tight group-hover:text-light-button-primaryHover dark:group-hover:text-dark-button-primaryHover transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed flex-1">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-light-button-primary/10 to-light-button-primaryHover/10 dark:from-dark-button-primary/10 dark:to-dark-button-primaryHover/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration with animated elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center items-center mt-12 sm:mt-16 space-x-4"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full"
          />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 dark:via-red-400 to-transparent"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full"
          />
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 dark:via-red-400 to-transparent"></div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;
