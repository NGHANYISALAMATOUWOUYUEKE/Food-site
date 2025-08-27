/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-1050": { max: "1050px" },
        "max-900": { max: "900px" },
        "max-750": { max: "750px" },
      },
      backgroundImage: {
        headerImg: "url('/header_img.png')",
      },
      duration: {
        2000: "2000ms", // 2s
        3000: "3000ms", // 5s
        5000: "5000ms", // 5s
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }, // usually 1, not 10
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
