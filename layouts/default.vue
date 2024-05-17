<script lang="ts" setup>
useSeoMeta({
  ogImage: "https://nicomoccagatta.com/img/nico.png",
  ogType: 'profile',
  ogUpdated_time: new Date().toISOString(),
  profileFirstName: 'Nicolas',
  profileGender: 'male',
  profileLastName: 'Moccagatta',
  profileUsername: 'nicomoccagatta@gmail.com',
  twitterTitle: "Nicolas Moccagatta's Personal Website",
  twitterDescription: "Hello, I'm Nicolas Moccagatta! I'm a seasoned Software Engineer with over 7 years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.",
  twitterImage: "https://nicomoccagatta.com/img/nico.png",
  twitterCard: "summary_large_image",
});

useHeadSafe({
  htmlAttrs: {
    lang: "en"
  },
  link: [
    {
      href: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
  ],
});
</script>

<template>
  <Header />
  <div class="container min-h-[calc(100vh-var(--header-height)*2)]">
    <div class="min-h-max flex flex-col overflow-x-hidden">
      <slot />
    </div>
  </div>
  <Footer />
</template>
