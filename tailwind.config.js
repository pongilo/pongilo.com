module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-1': 'fadeIn 1.5s linear .5s forwards',
        'fade-in-2': 'fadeIn 1.5s linear 1s forwards',
        'fade-in-3': 'fadeIn 1.5s linear 1.5s forwards',
        'fade-in-4': 'fadeIn 1.5s linear 2s forwards',
        'fade-in-5': 'fadeIn 1.5s linear 2.5s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }
    },
  },
  plugins: [],
}
