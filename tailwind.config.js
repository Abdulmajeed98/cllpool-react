module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Rubik, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji'
      },
      spacing: {
        'sides': '10%'
      },

      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
      },

      zIndex: {
        '100': '100',
        '200': '200',
        'max': '9999',
      },

      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },

      screens: {
        'xsm': '512px',
        '3xl': '1792px',
      },

      height: {
        '128': '32rem',
      },

      minHeight: {
        '1/2': '50%',
        'message-textarea': '17.125rem',
      },
    },
  },
  plugins: [],
}