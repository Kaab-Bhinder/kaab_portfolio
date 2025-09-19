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
      className="w-full px-4 sm:px-6 md:px-[12%] py-10 scroll-mt-20"
      id="services"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo"
      >
        What I Offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-green-600 dark:text-green-400"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 sm:mb-12 font-Ovo text-sm sm:text-base px-4"
      >
        We deliver tailored web solutions with a strong focus on innovation,
        performance, and customer satisfaction. Our expertise spans modern
        frontend development, scalable backend systems, and seamless user
        experiences, ensuring high-quality, result-driven outcomes. Let me know
        if you'd like any refinements!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="flex flex-col gap-24 my-10"
      >
        {/* First row: 4 services */}
        <div className="flex flex-row items-stretch justify-center w-full">
          {serviceData.slice(0, 4).map(({ icon, title, description }, idx) => (
            <React.Fragment key={title+idx}>
              <div className="flex flex-col items-start justify-center text-left px-6 py-6 w-72 h-80 min-h-[320px]">
                <div className="flex items-center gap-3 mb-4">
                  <Image src={icon} alt={title} className="w-8 h-8 flex-shrink-0" />
                </div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 leading-tight">{title}</h3>
                <p className="text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">{description}</p>
              </div>
              {idx < 3 && (
                <div className="flex items-center">
                  <div className="w-1 h-80 bg-red-500 dark:bg-red-400" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Second row: 2 services centered */}
        {serviceData.length > 4 && (
          <div className="flex flex-row items-stretch justify-center w-full gap-8">
            {serviceData.slice(4, 6).map(({ icon, title, description }, idx) => (
              <React.Fragment key={title+idx}>
                <div className="flex flex-col items-start justify-center text-left px-6 py-6 w-72 h-80 min-h-[320px]">
                  <div className="flex items-center gap-3 mb-4">
                    <Image src={icon} alt={title} className="w-8 h-8 flex-shrink-0" />
                  </div>
                  <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-4 leading-tight">{title}</h3>
                  <p className="text-base text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">{description}</p>
                </div>
                {idx < 1 && (
                  <div className="flex items-center">
                    <div className="w-1 h-80 bg-red-500 dark:bg-red-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
