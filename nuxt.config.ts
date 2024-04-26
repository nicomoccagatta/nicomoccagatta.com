// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo', "@nuxtjs/tailwindcss"],
  site: {
    url: "https://nicomoccagatta.com/",
    name: "Nicolas Moccagatta's Personal Website",
    description: "Hello, I'm Nicolas Moccagatta! I'm a seasoned Software Engineer with over 7 years of experience in Full Stack Software Development, specializing in Frontend Web Technologies. Holding a Bachelor's degree in Engineering from the University of Buenos Aires, where I majored in Computer Science",
    defaultLocale: "en",
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss',
  }
});
