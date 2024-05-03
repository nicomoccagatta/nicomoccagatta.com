/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        body: {
          primary: '#0c0e13',
          secondary: '#0a0809',
        },
      },
    },
  },
  plugins: [],
}
