module.exports = {
  presets: [require("@vercel/examples-ui/tailwind")],
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vercel/examples-ui/**/*.js",
  ],
};
