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
        className={`min-w-[70vw] w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-center z-50 bg-transparent transition-all duration-300
          ${isScroll ? 'backdrop-blur-lg bg-light-surface/70 dark:bg-dark-surface/70' : ''}`}
        style={{
          backgroundImage: `url(${isDarkMode ? assets.header_bg_color_dark.src : assets.header_bg_color.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-28 cursor-pointer mt-3 mr-14"
          />
        </a>
        <ul
          className={`hidden md:flex items-center justify-center gap-6 lg:gap-8 transition-all duration-300
            ${isScroll
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
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image
            src={isDarkMode ? assets.menu_white : assets.menu_black}
            alt=""
            className="w-6"
          />
        </button>
        {/* --------------------MOBILE-------------------*/}
        <ul
          ref={sideMenuRef}
          className="absolute flex md:hidden flex-col gap-4 py-20 px-10 -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className=" absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            ></Image>
          </div>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
