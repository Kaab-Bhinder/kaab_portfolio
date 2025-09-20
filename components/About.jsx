import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  // Tech stack data for floating elements
  const techStack = [
    { src: assets.react, alt: "React", delay: 0.1 },
    { src: assets.next_js, alt: "Next.js", delay: 0.2 },
    { src: assets.mongodb, alt: "MongoDB", delay: 0.3 },
    { src: assets.git, alt: "Git", delay: 0.4 },
    { src: assets.vscode, alt: "VS Code", delay: 0.5 },
    { src: assets.postman, alt: "Postman", delay: 0.6 }
  ].filter(tech => tech.src);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 md:px-[12%] py-16 sm:py-20 md:py-24 scroll-mt-20 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
      id="about"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-10 w-32 h-32 border border-light-button-primary/10 dark:border-dark-button-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-light-button-primary/10 dark:border-dark-button-primary/10 rounded-lg"
        />
        
        {/* Floating tech icons */}
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.alt}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              opacity: { delay: tech.delay },
              scale: { delay: tech.delay },
              y: { duration: 4, repeat: Infinity, delay: index * 0.5 },
              rotate: { duration: 6, repeat: Infinity, delay: index * 0.3 }
            }}
            className="absolute hidden lg:block"
            style={{
              top: `${20 + index * 10}%`,
              right: `${5 + index * 3}%`,
              transform: `translateZ(0)`
            }}
          >
            <Image 
              src={tech.src} 
              alt={tech.alt}
              className="w-8 h-8 opacity-30"
            />
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 sm:mb-20 relative z-10"
      >
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base font-Ovo text-light-textSecondary dark:text-dark-textSecondary mb-4 tracking-[0.2em] uppercase"
        >
          Get to know me
        </motion.h4>
        
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl font-Ovo font-bold bg-gradient-to-r from-light-text via-light-button-primary to-light-text dark:from-dark-text dark:via-dark-button-primary dark:to-dark-text bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-20 h-1 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover mx-auto mt-6 rounded-full"
        />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            {/* Profile Card */}
            <div className="relative group">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-light-button-primary via-light-button-primaryHover to-light-button-primary dark:from-dark-button-primary dark:via-dark-button-primaryHover dark:to-dark-button-primary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-all duration-1000"></div>
              
              {/* Card */}
              <div className="relative bg-light-surface dark:bg-dark-surface rounded-3xl p-8 border border-light-textSecondary/10 dark:border-dark-textSecondary/10 backdrop-blur-sm">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover rounded-full p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-light-surface dark:bg-dark-surface">
                        <Image
                          src={assets.profile_img}
                          alt="Muhammad Kaab Bhinder"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    
                    {/* Status Indicator */}
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-light-surface dark:border-dark-surface flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-4">
                  {infoList.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-2xl bg-light-bg/50 dark:bg-dark-bg/50 backdrop-blur-sm border border-light-textSecondary/5 dark:border-dark-textSecondary/5 hover:bg-light-button-primary/5 dark:hover:bg-dark-button-primary/5 transition-all duration-300 group/stat"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-light-button-primary/20 to-light-button-primaryHover/20 dark:from-dark-button-primary/20 dark:to-dark-button-primaryHover/20 flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300">
                        <Image 
                          src={isDarkMode ? info.iconDark : info.icon} 
                          alt={info.title}
                          className="w-5 h-5"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-light-text dark:text-dark-text text-sm mb-1">
                          {info.title}
                        </h4>
                        <p className="text-light-textSecondary dark:text-dark-textSecondary text-xs leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Intro */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover rounded-full"></div>
                <h3 className="text-2xl sm:text-3xl font-bold text-light-text dark:text-dark-text mb-4">
                  Hi, I'm{" "}
                  <span className="text-light-button-primary dark:text-dark-button-primary">
                    Muhammad Kaab Bhinder
                  </span>
                </h3>
                <p className="text-lg sm:text-xl text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  A passionate <span className="font-semibold text-light-button-primary dark:text-dark-button-primary">Full-Stack Developer</span> crafting digital experiences that matter.
                </p>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-4">
                  Currently pursuing my <strong>Bachelor of Computer Science (BSCS)</strong>, I specialize in creating modern web applications using cutting-edge technologies like <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">React</span>, <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">Next.js</span>, and <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">Node.js</span>.
                </p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed mb-4">
                  From crafting pixel-perfect user interfaces with smooth <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">GSAP animations</span> to architecting robust backends with <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">MongoDB</span> and <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">MySQL</span>, I bring ideas to life through clean, scalable code.
                </p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                  My expertise spans multiple programming languages including <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">JavaScript</span>, <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">Python</span>, <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">Java</span>, and <span className="text-light-button-primary dark:text-dark-button-primary font-semibold">C++</span>. I believe in continuous learning and pushing the boundaries of what's possible in web development.
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-6"
              >
                <motion.a
                  href="https://www.linkedin.com/in/muhammad-kaab-bhinder-a5b663332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group inline-block text-center"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-light-button-primaryHover to-light-button-primary dark:from-dark-button-primaryHover dark:to-dark-button-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                
                <motion.a
                  href="/cv.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-light-button-primary dark:border-dark-button-primary text-light-button-primary dark:text-dark-button-primary font-semibold rounded-2xl hover:bg-light-button-primary hover:text-white dark:hover:bg-dark-button-primary dark:hover:text-white transition-all duration-300 inline-flex items-center gap-2"
                >
                  <span>Download Curriculum Vitae (CV)</span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4v8m0 0l-3-3m3 3l3-3m-6 7h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
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

export default About;
