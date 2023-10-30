// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        grow: {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.25)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        shrink: {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(0.75)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'slide-down': {
          '0%': {
            top: '-25rem'
          },
          '100%': {
            top: '0rem'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0%'
          },
          '100%': {
            opacity: '100%'
          },
        },
        'rotate': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'scale': {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        'slide-left': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '80%': {
            transform: 'translateX(0)'
          }
        },
        'bounce': {
          '0%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'card-rotate': {
          '0%': {
            transform: 'rotateY(0deg)'
          },
          '100%': {
            transform: 'rotateY(180deg)'
          }
        }
      },
    },
    animation: {
      grow: 'grow 1s ease-in-out',
      shrink: 'shrink 1s ease-in-out',
      'slide-down': 'slide-down 1s',
      'fade-in': 'fade-in 3s',
      'rotate': 'rotate 2s infinite linear',
      'scale': 'scale 0.5s ease-in-out',
      'slide-left': 'slide-left 1s',
      'bounce': 'bounce 1s infinite',
      'card-rotate': 'card-rotate 0.5s'
    },
  },
  plugins: [nextui({
  }),
  ]
}