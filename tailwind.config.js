/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Mobile devices
      "mobile-xs": { max: "319px" }, // Very small phones
      "mobile-sm": { min: "320px", max: "374px" }, // Small phones (iPhone SE)
      "mobile-md": { min: "375px", max: "424px" }, // Medium phones (iPhone 12/13)
      "mobile-lg": { min: "425px", max: "767px" }, // Large phones
      mobile: { max: "767px" },

      tablet: "1015px",
      // => @media (min-width: 640px) { ... }

      laptop: "1258px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1657px",
      // => @media (min-width: 1280px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
