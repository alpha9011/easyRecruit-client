/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#139BFF",
        primaryLight: "",
        primaryDark: "",
        secondary: "",
        linkColor: "#0EA5E9",
        textPrimary: "",
        textSecondary: "#0EA5E9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
