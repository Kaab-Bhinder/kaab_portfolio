const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          bg: "#F5F6FA", // slightly off-white, subtle blue-gray
          surface: "#FFFFFF", // pure white, pops over bg
          text: "#1E1E1E",
          textSecondary: "#4B5563",
          button: {
            primary: "#111827",
            primaryHover: "#374151",
            secondary: "#4B5563",
            secondaryHover: "#6B7280",
            primaryText: "#FFFFFF", // white text for primary button
            secondaryText: "#FFFFFF", // white text for secondary button
          },
          highlight: "#FACC15",
        },
        dark: {
          bg: "#0D1117", // deep dark
          surface: "#202736", // lighter than bg, pops over bg
          text: "#F9FAFB",
          textSecondary: "#9CA3AF",
          button: {
            primary: "#10B981",
            primaryHover: "#059669",
            secondary: "#6B7280",
            secondaryHover: "#9CA3AF",
            primaryText: "#202736", // dark surface text for primary button
            secondaryText: "#202736", // dark surface text for secondary button
          },
          highlight: "#14B8A6",
        },
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        dartTheme: "#11001F", // Keeping your dark theme color
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(250px, 1fr))",
      },
    },
  },
  darkMode: "selector", // Keeping your previous dark mode setting

  plugins: [addVariablesForColors],
};

// ✅ Keeping Your Theme But Adding CSS Variables
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars, // Adds color variables
  });
}
