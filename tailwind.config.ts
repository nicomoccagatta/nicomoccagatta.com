/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "50%": { width: "100%" }
        },
        blink: {
          "50%": { borderRightColor: "transparent" },
          "100%": { borderColor: "#60a5fa" }
        }
      },
      animation: {
        typing: "typing 4s steps(20) infinite, blink .7s infinite"
      }
    },
  },
  plugins: [],
}
