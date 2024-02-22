/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "",
        primaryLight: "",
        primaryDark: "",
        secondary: "",
        linkColor: "#0EA5E9",
        textPrimary: "",
        textSecondary: "#0EA5E9",
      },
      fontFamily: {
        roboto: '"Roboto", sans-serif'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
