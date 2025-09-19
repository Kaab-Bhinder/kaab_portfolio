"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import ToolsSlider from "@/components/ToolsSlider";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Work from "@/components/Work";
import React, { useEffect, useState } from "react";
export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)".matches))
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
  <Header isDarkMode={isDarkMode} />
  <ToolsSlider isDarkMode={isDarkMode} />
  <About isDarkMode={isDarkMode} />
      <Skills />
      <Experience />
      <Services IsDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
