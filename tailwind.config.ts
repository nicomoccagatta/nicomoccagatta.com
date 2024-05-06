/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js,ts}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        max: '1280px',
      },
    },
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderRightColor: "transparent" },
          "100%": { borderColor: "#60a5fa" }
        }
      },
      animation: {
        typing: "typing 2s steps(20, end), blink .7s infinite"
      }
    },
  },
  plugins: [],
}
