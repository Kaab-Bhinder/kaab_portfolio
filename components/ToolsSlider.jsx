import React from "react";
import { motion } from "framer-motion";
import { toolsData } from "@/assets/assets";
import Image from "next/image";

const ToolsSlider = () => {
  return (
    <div className="w-full overflow-hidden py-4 bg-dark-bg text-dark-text dark:bg-light-bg dark:text-light-text transition-colors duration-300">
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap px-0"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {toolsData.concat(toolsData).map(({ tool, title }, i) => (
          <div
            key={title + i}
            className="flex flex-col items-center justify-center mx-8"
          >
            <div className="mb-1">
              <Image src={tool} alt={title} title={title} className="w-10 h-10 object-contain" />
            </div>
            <span className="text-base font-semibold transition-colors duration-300 text-dark-text dark:text-light-text">
              {title}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ToolsSlider;
