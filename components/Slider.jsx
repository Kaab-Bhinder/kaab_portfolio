import React from "react";
import { motion } from "framer-motion";
import { assets, toolsData } from "@/assets/assets";

import { toolsData } from "@/assets/assets";

// Combine skills and tools (toolsData imported from assets)
const skills = [
  { name: "JavaScript", icon: assets.javascript },
  { name: "Java", icon: assets.java },
  { name: "Python", icon: assets.python },
  { name: "C++", icon: assets.cpp },
  { name: "React.js", icon: assets.react },
  { name: "Next.js", icon: assets.nextjs },
  { name: "GSAP", icon: assets.gsap },
  { name: "MongoDB", icon: assets.mongodb },
  { name: "SQL", icon: assets.sql },
  { name: "WordPress", icon: assets.wordpress },
  { name: "Elementor", icon: assets.elementor },
  { name: "WooCommerce", icon: assets.woocommerce },
];
const combined = [
  ...skills.map((s) => ({ name: s.name, icon: s.icon })),
  ...toolsData.map(({ title, tool }) => ({ name: title, icon: tool })),
];

const Slider = () => {
  return (
  <div className="w-full overflow-hidden py-8 bg-gray-900 dark:bg-gray-100 transition-colors duration-300">
    <motion.div
      className="flex items-center gap-16 whitespace-nowrap px-0"
      initial={{ x: 0 }}
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
    >
      {combined.concat(combined).map((item, i) => (
        <div
          key={item.name + i}
          className="flex flex-col items-center justify-center mx-8"
        >
          <div className="mb-2">
            <img src={item.icon} alt={item.name} className="w-12 h-12 object-contain" />
          </div>
          <span className="text-base font-semibold text-gray-700 dark:text-gray-200">
            {item.name}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
  );
};

export default Slider;
