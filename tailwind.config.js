/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medieval: ['MedievalSharp', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        salon: {
          primary: 'var(--salon-primary)',
          accent: 'var(--salon-accent)',
          surface: 'var(--salon-surface)',
          nav: 'var(--salon-nav)',
          footer: 'var(--salon-footer)',
          cta: 'var(--salon-cta)',
          highlight: 'var(--salon-highlight)',
          badge: 'var(--salon-badge)',
        },
      },
    },
  },
  plugins: [],
};
