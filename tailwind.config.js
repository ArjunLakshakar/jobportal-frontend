/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Covers all component files
  ],
  theme: {
    extend: {
      colors: {

        // Dark Mode
        // 'mine-shaft': {'50': '#f6f6f6','100': '#e7e7e7','200': '#d1d1d1','300': '#b0b0b0','400': '#888888','500': '#6d6d6d','600': '#5d5d5d','700': '#4f4f4f','800': '#454545','900': '#3d3d3d','950': '#2d2d2d',},
        // 'bright-sun': {'50': '#fffbeb','100': '#fff3c6','200': '#ffe588','300': '#ffd149','400': '#ffbd20','500': '#f99b07','600': '#dd7302','700': '#b75006','800': '#943c0c','900': '#7a330d','950': '#461902',},


        // Light Mode
        'mine-shaft': {'50': '#f5f7fa','100': '#eaeff4','200': '#cfdce8','300': '#a6bfd3','400': '#759cbb','500': '#5480a3','600': '#416788','700': '#35526f','800': '#2f475d','900': '#2c3e50','950': '#1d2834',},
        'bright-sun': {'50': '#f1fcf5','100': '#defaea','200': '#bef4d4','300': '#8beab2','400': '#52d689','500': '#27ae60','600': '#1d9c53','700': '#1a7b43','800': '#1a6139','900': '#175031','950': '#072c18',},

        
        'malibu': {
          '50': '#f1f8fe',
          '100': '#e2effc',
          '200': '#bfdff8',
          '300': '#6eb9f1',
          '400': '#45a7eb',
          '500': '#1d8bda',
          '600': '#106eb9',
          '700': '#0e5896',
          '800': '#104b7c',
          '900': '#133f67',
          '950': '#0c2845',
        },
      },
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1279px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '900px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' }
    }
  },
  plugins: [],
};
