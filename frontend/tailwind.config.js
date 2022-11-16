module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        'loginBtn': '20px',
        'circle': '50%'
      },
      fontSize: {
        // 14: '14px',
        12: '12px'
      },
      backgroundColor: {
        'main-dark-bg': '#20232A',
        'loginBtn': '#ff4b2b',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        'btnBorder': '#ff4b2b',
        'ghost': '#ffffff',
        'mainTheme': '#eee',
        'socialBtn': '#dddddd'
      },
      width: {
        // 400: '400px',
        // 760: '760px',
        // 780: '780px',
        // 800: '800px',
        // 1000: '1000px',
        // 1200: '1200px',
        // 1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
};