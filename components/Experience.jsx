"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { experienceData } from "@/assets/assets";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 md:px-[12%] py-10 sm:py-16 md:py-20 scroll-mt-20 bg-light-bg dark:bg-dark-bg"
      id="experience"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-light-textSecondary dark:text-dark-textSecondary"
      >
        My Journey
      </motion.h4>
      
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-6 sm:mb-8 md:mb-12 text-green-600 dark:text-green-400"
      >
        Experience
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 mx-auto mt-2 mb-10 sm:mb-12 md:mb-16 rounded-full"
      />

      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex flex-row items-start mb-6 sm:mb-8 md:mb-10 last:mb-0"
          >
            {/* Timeline Line */}
            {index < experienceData.length - 1 && (
              <div className="absolute left-6 sm:left-7 md:left-8 top-14 sm:top-16 md:top-18 w-0.5 h-20 sm:h-24 md:h-28 bg-gradient-to-b from-red-500 to-red-300 dark:from-red-400 dark:to-red-600 z-0"></div>
            )}

            {/* Timeline Dot with Company Logo */}
            <div className="relative z-10 flex-shrink-0 mr-3 sm:mr-4 md:mr-6 self-start">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white dark:bg-dark-surface rounded-full flex items-center justify-center shadow-lg border-3 sm:border-4 border-red-500 dark:border-red-400"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden"
                >
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>

            {/* Experience Content */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                className="bg-light-surface dark:bg-dark-surface rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-lg border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:shadow-xl transition-shadow duration-300 relative z-20"
              >
                {/* Header */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-light-text dark:text-dark-text mb-1 leading-tight">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col gap-1 sm:gap-2 mb-2">
                    <span className="text-red-500 dark:text-red-400 font-semibold text-sm sm:text-base">
                      {experience.company}
                    </span>
                    <span className="text-light-textSecondary dark:text-dark-textSecondary text-xs sm:text-sm">
                      {experience.location}
                    </span>
                  </div>
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {experience.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {experience.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + idx * 0.1 }}
                      className="text-light-textSecondary dark:text-dark-textSecondary flex items-start text-sm sm:text-base"
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-400 dark:bg-red-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + idx * 0.1 }}
                      className="px-2 sm:px-3 py-1 bg-light-button-secondary/20 dark:bg-dark-button-secondary/20 text-light-textSecondary dark:text-dark-textSecondary rounded-full text-xs font-medium border border-light-textSecondary/20 dark:border-dark-textSecondary/20"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
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
    </motion.div>
  );
};

export default Experience;
