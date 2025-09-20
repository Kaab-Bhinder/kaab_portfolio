import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMobileFlip = (index) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === index ? null : index);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-8 md:px-[12%] py-10 scroll-mt-20 overflow-x-hidden max-w-full"
      id="work"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-light-button-secondary dark:text-dark-button-secondary"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo text-light-button-primary dark:text-dark-button-primary mb-6 sm:mb-8 md:mb-12"
      >
        My Latest Work
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-20 h-1 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover mx-auto mt-2 mb-8 sm:mb-12 rounded-full"
      />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-8 sm:mb-12 font-Ovo text-sm sm:text-base px-4 text-light-text-secondary dark:text-dark-text-secondary"
      >
        Explore my work and see how I transform ideas into impactful digital
        solutions. From web development to seamless user experiences, my
        portfolio showcases projects that highlight creativity, precision, and
        innovation. Let's build something amazing together!
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 my-10 mx-auto"
      >
        {workData.map((project, ind) => {
          const isFlipped = isMobile && flippedIndex === ind;
          return (
            <div
              className="relative group perspective w-full h-[420px] cursor-pointer"
              key={ind}
              onClick={() => handleMobileFlip(ind)}
            >
              <motion.div
                className={`relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out ${
                  isMobile
                    ? isFlipped
                      ? "rotate-y-180"
                      : ""
                    : "group-hover:rotate-y-180"
                }`}
                style={{
                  minHeight: 420,
                  height: "100%",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Face */}
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg bg-light-surface dark:bg-dark-surface border border-light-border/20 dark:border-dark-border/20 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                    zIndex: 2,
                  }}
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <div className="relative z-20 p-3 w-full flex flex-col items-center justify-center text-center flex-1 pb-12">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <h2 className="font-bold text-lg text-light-text-primary dark:text-dark-text-primary mb-1 hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                    </a>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-2 line-clamp-2">
                      {project.description}
                    </p>
                    {isMobile && (
                      <span className="block text-sm font-medium text-light-button-primary dark:text-dark-button-primary mt-1 border-t border-light-border/20 dark:border-dark-border/20 pt-1">
                        Tap to see more
                      </span>
                    )}
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg bg-light-surface dark:bg-dark-surface border border-light-button-primary/30 dark:border-dark-button-primary/30 flex flex-col justify-between p-6"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    zIndex: 1,
                  }}
                >
                  <div className="flex-1 flex flex-col items-center justify-center text-center pb-12">
                    <h2 className="font-bold text-lg text-light-button-primary dark:text-dark-button-primary mb-2 text-center">
                      {project.title}
                    </h2>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary mb-3 text-center text-sm leading-relaxed">
                      {project.details}
                    </p>
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-light-button-secondary/10 dark:bg-dark-button-secondary/10 text-light-button-secondary dark:text-dark-button-secondary rounded-md border border-light-button-secondary/20 dark:border-dark-button-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* View Project Button - Fixed positioning for mobile */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 z-30 inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full 
                         bg-light-button-primary text-light-button-primaryText dark:bg-dark-button-primary dark:text-dark-button-primaryText 
                         border border-light-button-primary dark:border-dark-button-primary 
                         hover:bg-light-button-primaryHover dark:hover:bg-dark-button-primaryHover 
                         transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105
                         min-w-max whitespace-nowrap"
              >
                <span>View Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          );
        })}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href="https://github.com/Kaab-Bhinder"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 
                 text-light-button-secondary dark:text-dark-button-secondary 
                 border border-light-button-secondary dark:border-dark-button-secondary 
                 hover:bg-light-button-secondaryHover dark:hover:bg-dark-button-secondaryHover 
                 hover:text-light-button-secondaryText dark:hover:text-dark-button-secondaryText
                 rounded-full py-3 px-10 mx-auto my-20 transition-all duration-500 font-medium"
      >
        Show more
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </motion.a>
      
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

export default Work;