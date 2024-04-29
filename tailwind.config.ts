/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
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
