/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include your source files
    "./public/index.html",        // Include your HTML files
  ],
  theme: {
    extend: {},
  },
  darkMode: 'media', // or 'class' if you want manual control
  plugins: [],
};
