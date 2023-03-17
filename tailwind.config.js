// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    container: {
      center: true
    },
    extend: {
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#ffed4a',
        'danger': '#e3342f',

      }),
      fontFamily: {

        vibes: ['Great Vibes'],
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      minHeight: {
        '0': '0',
        "10v":"10vh",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '80v' : '80vh',
        '90v': '90vh',
        'full': '100%',
      },
      maxHeight: {
        '0': '0',
        "10v":"10vh",
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '80v' : '80vh',
        '90v': '90vh',
        'full': '100%',
      },
      height: {
        "10v":"10vh",
        "13": "53px",
        "30": '7.3rem',
        "90v": "90vh",
        "92": '23.5rem',
        "100": '26.5rem',
        "104": '28rem',
        "106": '32rem',
        "110": '36rem'
      },
      margin:{
        "0,5": "3px",
        "1.5": "6px",
        "1.75": "7.22px",
        "2.5": "10px",
        "5.5": "22px",
        "4.5": "18px",
        "7.5": "30px",
        "8.5": "34px",
        "10.5":"42px",
        "13.5":"54px",
        "15": "60px",
        "16.5":"66px",
        "18": "76px",
        "17": "70px",
        "35": "140px",
        "24": "6.25rem"
      },
      padding: {
        "0,5": "3px",
        "1.5": "6px",
        "1.75": "7.22px",
        "2.5": "10px",
        "5.5": "22px",
        "4.5": "18px",
        "7.5": "30px",
        "8.5": "34px",
        "10.5":"42px",
        "13.5":"54px",
        "15": "60px",
        "16.5":"66px",
        "18": "76px",
        "17": "70px",
        "35": "140px",
        "24": "6.25rem"
      },
      boxShadow: {
        'inner-md': 'inset 0 1px 3px 0 rgba(0, 0, 0, 0.3)',
      },
      flex: {
        '1-1-40': '1 1 40rem',
        '2-1-40': '2 1 40rem',

      },
      colors: {
        "background-color": "#414141",
        "link-color": "#2c2c2c",
        grey: {
          default: "#2c2c2c"
        },
        green: {
          dark: "#113f37",
          "500": "#16b438",
          bright: "#57d131",

        },
        purple: {
          dark: "#5b2b83"
        }
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
