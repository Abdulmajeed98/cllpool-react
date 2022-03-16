module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Quicksand, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji",
      },

      spacing: {
        sides: "10%",
        "nav-offset": "7rem",
      },

      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
        4: "4 4 0%",
        5: "5 5 0%",
        6: "6 6 0%",
        7: "7 7 0%",
        8: "8 8 0%",
        9: "9 9 0%",
        10: "10 10 0%",
      },

      zIndex: {
        100: "100",
        200: "200",
        max: "9999",
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out infinite",
        bouncing: "bouncing 3s ease-out infinite",
        "text-blur-out": "text-blur-out 2.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) infinite",
        "circular-color": "circular-color 2.5s linear infinite",
      },

      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-5deg)" },
          "50%": { transform: "rotate(5deg)" },
        },
        bouncing: {
          "0%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-7px)" },
        },
        "text-blur-out": {
          "0%": {
            filter: "blur(0.01)",
          },
          "50%": {
            filter: "blur(5px) opacity(0%)",
          },
        },
        "circular-color": {
          "0%": {
            transform: "rotate(0deg)",
            boxShadow: "1px 5px 2px #0369a1",
          },
          "50%": {
            transform: "rotate(180deg)",
            boxShadow: "1px 5px 2px #0e7490",
          },
          "100%": {
            transform: "rotate(360deg)",
            boxShadow: "1px 5px 2px #1d4ed8",
          },
        },
      },

      screens: {
        xsm: "512px",
        "3xl": "1792px",
      },

      height: {
        128: "32rem",
      },

      minHeight: {
        "1/2": "50%",
        "message-textarea": "17.125rem",
      },
      boxShadow: {
        "loading-ring": "0 0 5px rgba(0, 0, 0, 0.3)",
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
