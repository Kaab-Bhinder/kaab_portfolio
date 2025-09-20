import React from "react";
import { motion } from "framer-motion";   // ✅ correct import
import {
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiGreensock,
  SiMongodb,
  SiMysql,
  SiWordpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaNodeJs, FaElementor, FaShoppingCart, FaCode } from "react-icons/fa";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, level: 90 },
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 85 },
      { name: "GSAP", icon: SiGreensock, level: 70 },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 75 },
      { name: "Python", icon: SiPython, level: 85 },
    ],
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, level: 90 },
      { name: "Python", icon: SiPython, level: 85 },
      { name: "Java", icon: FaJava, level: 80 },
      { name: "C++", icon: SiCplusplus, level: 70 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, level: 85 },
      { name: "GitHub", icon: SiGithub, level: 85 },
      { name: "VS Code", icon: FaCode, level: 90 },
      { name: "Figma", icon: SiFigma, level: 75 },
      { name: "Postman", icon: SiPostman, level: 80 },
    ],
  },
  {
    category: "WordPress Development",
    skills: [
      { name: "WordPress", icon: SiWordpress, level: 85 },
      { name: "Elementor", icon: FaElementor, level: 80 },
      { name: "WooCommerce", icon: FaShoppingCart, level: 75 },
    ],
  },
];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full px-4 sm:px-6 md:px-[12%] py-10 sm:py-16 md:py-20 scroll-mt-20 bg-light-bg dark:bg-dark-bg"
      id="skills"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="text-center mb-2 text-base sm:text-lg font-Ovo text-light-textSecondary dark:text-dark-textSecondary"
      >
        My Expertise
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo mb-6 sm:mb-8 md:mb-12 text-green-600 dark:text-green-400"
      >
        Skills & Technologies
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300 mx-auto mt-2 mb-10 sm:mb-12 md:mb-16 rounded-full"
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="bg-light-surface dark:bg-dark-surface rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-textSecondary/10 dark:border-dark-textSecondary/10 hover:border-light-button-primary/20 dark:hover:border-dark-button-primary/20 h-full">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
                  className="text-lg sm:text-xl lg:text-2xl font-bold text-light-text dark:text-dark-text mb-4 sm:mb-6 text-center group-hover:text-light-button-primary dark:group-hover:text-dark-button-primary transition-colors duration-300"
                >
                  {category.category}
                </motion.h3>

                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                        }}
                        className="flex items-center justify-between p-2 sm:p-3 rounded-lg lg:rounded-xl bg-light-bg dark:bg-dark-bg hover:bg-light-button-primary/5 dark:hover:bg-dark-button-primary/5 transition-colors duration-300 group/skill"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-light-button-primary/10 to-light-button-primary/20 dark:from-dark-button-primary/10 dark:to-dark-button-primary/20 flex items-center justify-center group-hover/skill:scale-110 transition-transform duration-300 flex-shrink-0">
                            <IconComponent
                              className="w-4 h-4 sm:w-5 sm:h-5 text-light-text dark:text-dark-text group-hover/skill:text-light-button-primary dark:group-hover/skill:text-dark-button-primary transition-colors duration-300"
                            />
                          </div>
                          <span className="font-semibold text-sm sm:text-base text-light-text dark:text-dark-text group-hover/skill:text-light-button-primary dark:group-hover/skill:text-dark-button-primary transition-colors duration-300 truncate">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                          <div className="w-16 sm:w-20 h-2 bg-light-textSecondary/20 dark:bg-dark-textSecondary/20 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}   
                              transition={{
                                duration: 1,
                                delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                              }}
                              className="h-full bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover rounded-full"
                            />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-light-textSecondary dark:text-dark-textSecondary min-w-[2rem] sm:min-w-[2.5rem] text-right">
                            {skill.level}%
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
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

export default Skills;
