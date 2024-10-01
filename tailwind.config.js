module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // Dark blue-gray for background
        secondary: '#e5e7eb', // Light gray for sections
        accent: '#f97316', // Orange accent for buttons or highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean sans-serif font
      },
    },
  },
  plugins: [],
}
