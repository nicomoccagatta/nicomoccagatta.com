// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    classSuffix: '',
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo',
    "@nuxt/image",
    "@nuxt/ui"
  ],
  site: {
    url: "https://nicomoccagatta.com",
    name: "Nicolas Moccagatta's Personal Website",
    description: "Hello, I'm Nicolas Moccagatta! I'm a seasoned Software Engineer with over 7 years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.",
    defaultLocale: "en_US",
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
  },
});