/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        project: "0px 16px 24px -6px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
