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
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-10 sm:mb-12 md:mb-16 text-green-600 dark:text-green-400"
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto">
        {experienceData.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative flex flex-col sm:flex-row items-start mb-8 sm:mb-10 md:mb-12 last:mb-0"
          >
            {/* Timeline Line */}
            {index < experienceData.length - 1 && (
              <div className="absolute left-8 sm:left-8 top-20 sm:top-20 w-0.5 h-20 sm:h-24 md:h-32 bg-gradient-to-b from-red-500 to-red-300 dark:from-red-400 dark:to-red-600"></div>
            )}

            {/* Timeline Dot with Company Logo */}
            <div className="relative z-10 flex-shrink-0 mr-0 sm:mr-6 md:mr-8 mb-4 sm:mb-0">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-dark-surface rounded-full flex items-center justify-center shadow-lg border-4 border-red-500 dark:border-red-400"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.6 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden"
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
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                className="bg-light-surface dark:bg-dark-surface rounded-xl p-6 shadow-lg border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <span className="text-red-500 dark:text-red-400 font-semibold">
                      {experience.company}
                    </span>
                    <span className="text-light-textSecondary dark:text-dark-textSecondary text-sm">
                      {experience.location}
                    </span>
                  </div>
                  <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {experience.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.6 + idx * 0.1 }}
                      className="text-light-textSecondary dark:text-dark-textSecondary flex items-start"
                    >
                      <span className="w-2 h-2 bg-red-400 dark:bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.2 + 0.8 + idx * 0.1 }}
                      className="px-3 py-1 bg-light-button-secondary/20 dark:bg-dark-button-secondary/20 text-light-textSecondary dark:text-dark-textSecondary rounded-full text-xs font-medium border border-light-textSecondary/20 dark:border-dark-textSecondary/20"
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

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex justify-center mt-16"
      >
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-500 dark:via-red-400 to-transparent"></div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
