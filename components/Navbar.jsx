"use client";
import { assets } from "@/assets/assets";
// Ensure dark mode header image is imported
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ setIsDarkMode, isDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed px-6 lg:px-8 xl:px-12 py-4 flex items-center justify-between z-50 bg-transparent transition-all duration-300
          ${isScroll ? 'backdrop-blur-lg bg-light-surface/70 dark:bg-dark-surface/70' : ''}`}
        style={{
          backgroundImage: `url(${isDarkMode ? assets.header_bg_color_dark.src : assets.header_bg_color.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Logo - Left aligned */}
        <a href="#top" className="flex-shrink-0">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-28 cursor-pointer"
          />
        </a>

        {/* Navigation Menu - Center aligned */}
        <ul
          className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 ${
            isScroll
              ? "px-0 py-0 rounded-none bg-transparent shadow-none border-none"
              : "rounded-full px-12 py-2 bg-light-surface shadow-lg border border-light-border dark:bg-dark-surface dark:shadow-darkHover/20 dark:border-dark-border"
          }`}
        >
             
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My Work
            </a>
          </li>
            <li>
              <button>
                <Image
                  src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                  alt=""
                  className="w-6 pt-2"
                  onClick={() => setIsDarkMode((prev) => !prev)}
                />
              </button>
            </li>
          <li>
            <button
              className={`flex items-center gap-3 px-5 py-1 border rounded-2xl font-Ovo transition-colors duration-200
                bg-light-button-primary text-light-button-primaryText border-light-button-primary hover:bg-light-button-primaryHover hover:text-light-button-primaryText
                dark:bg-dark-button-primary dark:text-dark-button-primaryText dark:border-dark-button-primary dark:hover:bg-dark-button-primaryHover dark:hover:text-dark-button-primaryText`
              }
              onClick={() => window.location.href = '#contact'}
            >
              Contact Me
              <span className="w-3 h-3 flex items-center">
                <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3">
                  <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </span>
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button - Right aligned */}
        <button className="block md:hidden flex-shrink-0" onClick={openMenu}>
          <Image
            src={isDarkMode ? assets.menu_white : assets.menu_black}
            alt=""
            className="w-6"
          />
        </button>
        {/* --------------------MOBILE-------------------*/}
        <ul
          ref={sideMenuRef}
          className="absolute flex md:hidden flex-col gap-6 py-20 px-8 -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-light-surface dark:bg-dark-surface border-l border-light-border/20 dark:border-dark-border/20 transition duration-500 backdrop-blur-lg"
        >
          {/* Close Button */}
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          </div>

          {/* Navigation Links */}
          <li>
            <a 
              className="font-Ovo text-light-text-primary dark:text-dark-text-primary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300 text-lg py-2 block" 
              onClick={closeMenu} 
              href="#top"
            >
              Home
            </a>
          </li>
          <li>
            <a 
              className="font-Ovo text-light-text-primary dark:text-dark-text-primary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300 text-lg py-2 block" 
              onClick={closeMenu} 
              href="#about"
            >
              About Me
            </a>
          </li>
          <li>
            <a 
              className="font-Ovo text-light-text-primary dark:text-dark-text-primary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300 text-lg py-2 block" 
              onClick={closeMenu} 
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              className="font-Ovo text-light-text-primary dark:text-dark-text-primary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300 text-lg py-2 block" 
              onClick={closeMenu} 
              href="#work"
            >
              My Work
            </a>
          </li>
          <li>
            <a 
              className="font-Ovo text-light-text-primary dark:text-dark-text-primary hover:text-light-button-primary dark:hover:text-dark-button-primary transition-colors duration-300 text-lg py-2 block" 
              onClick={closeMenu} 
              href="#contact"
            >
              Contact Me
            </a>
          </li>

          {/* Divider */}
          <li className="border-t border-light-border/20 dark:border-dark-border/20 pt-6">
            {/* Theme Toggle */}
            <div className="flex items-center justify-between mb-6">
              <span className="font-Ovo text-light-text-primary dark:text-dark-text-primary text-lg">
                Theme
              </span>
              <button
                onClick={() => setIsDarkMode((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-2 bg-light-button-primary/10 dark:bg-dark-button-primary/10 rounded-full border border-light-button-primary/20 dark:border-dark-button-primary/20 hover:bg-light-button-primary/20 dark:hover:bg-dark-button-primary/20 transition-all duration-300"
              >
                <Image
                  src={isDarkMode ? assets.sun_icon : assets.moon_icon}
                  alt="Theme toggle"
                  className="w-5 h-5"
                />
                <span className="text-light-button-primary dark:text-dark-button-primary font-medium text-sm">
                  {isDarkMode ? 'Light' : 'Dark'}
                </span>
              </button>
            </div>

            {/* Contact Button */}
            <button
              className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-light-button-primary to-light-button-primaryHover dark:from-dark-button-primary dark:to-dark-button-primaryHover text-light-button-primaryText dark:text-dark-button-primaryText rounded-full font-Ovo font-semibold hover:shadow-lg transition-all duration-300"
              onClick={() => {
                closeMenu();
                window.location.href = '#contact';
              }}
            >
              <span>Contact Me</span>
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                <path d="M4 8h8M8 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
