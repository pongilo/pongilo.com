module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-1': 'fadeIn 1.5s linear .8s forwards',
        'fade-in-2': 'fadeIn 1.5s linear 1.6s forwards',
        'fade-in-3': 'fadeIn 1.5s linear 2.4s forwards',
        'fade-in-4': 'fadeIn 1.5s linear 3.2s forwards',
        'fade-in-5': 'fadeIn 1.5s linear 4s forwards',
        'fade-in-6': 'fadeIn 1.5s linear 4.8s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
