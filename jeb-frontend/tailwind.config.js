/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,svelte}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ['"Lobster Two"', "ui-sans-serif", "system-ui"]
      },
      colors: {
        peach: {
          50: "#FBE6DE", // pale peach base
        },
      },
      keyframes: {
        drift: {
          "0%": { transform: "translate3d(-2%, -1%, 0) scale(1.02)" },
          "100%": { transform: "translate3d(2%, 1%, 0) scale(1.06)" },
        },
      },
      animation: {
        drift: "drift 16s ease-in-out infinite alternate",
      },
      // Optional: nicer very-large blur token
      blur: {
        "6xl": "90px",
      },
    },
  },
  plugins: [],
};
