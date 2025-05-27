// tailwind.config.js
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}', // <--- This is important
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  