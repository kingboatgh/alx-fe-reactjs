/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all JSX, TSX files in the src folder
    "./public/index.html",         // Include the index.html in the public folder
  ],
  theme: {
    extend: {},  // Extend Tailwind's default theme here (optional)
  },
  darkMode: 'media', // or 'class' for manual dark mode control
  variants: {
    extend: {},  // Customize variants for utility classes (optional)
  },
  plugins: [],  // Add any plugins here (optional)
};
