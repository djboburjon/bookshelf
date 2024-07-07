/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        'cardEdit': '0 6px 6px 6px',
      }
    },
  },
  plugins: [],
};
