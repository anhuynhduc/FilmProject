/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        'vibrant-pink': "#FF2C78",
        "silver-gray": "#ACACAC",
        "light-gray": "#6D6D6D",
        "lastNight-blue": "#0B041D",
        "midnight-blue": "#0E0524",
        "main-white": "#FFFFFF",
        "dark-gray": "#5B5B5B",
        "mid-gray": "#454A61",
        "light-blue": "#2D3F66"
      },
      boxShadow: {
        'custom': '40px 0 40px -20px rgba(67, 36, 63, 0.75), -40px 0 40px -20px rgba(33, 68, 94, 0.5),' +
            ' 0 20px 40px rgba(67, 36, 63, 0.75), 0 -20px 40px rgba(33, 68, 94, 0.5)',
      },
      dropShadow: {
        'md': '10px 10px 40px rgba(67, 36, 63, 0.75)'
      }
    },
  },
  plugins: [],
}

