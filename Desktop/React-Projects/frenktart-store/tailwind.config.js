/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '10p': '10%',  // yüzde olarak 10% padding tanımlıyoruz
      }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('hero.svg')", 
      }
    },

 
  },
  plugins: [],
}

