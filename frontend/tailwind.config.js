/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2e8b57',
          DEFAULT: '#1a5d3a',
        },
        secondary: '#ffffff',
        accent: '#e74c3c',
        bgLight: '#f4f7f6',
        textDark: '#333333',
        textLight: '#666666',
        greenTint: '#e9f2ee',
        darkFooter: '#2c3e50',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        md: '12px',
      }
    },
  },
  plugins: [],
}
