<script lang="ts" setup>
import type { Language } from '~/types/i18n'

const { currentLang, t } = useTranslation()
const currentYear = new Date().getFullYear()
const yearsOfExperience = currentYear - 2017

watch(currentLang, (lang: Language) => {
  useSeoMeta({
    ogImage: "https://nicomoccagatta.com/img/nico.png",
    ogType: 'profile',
    profileFirstName: 'Nicolas',
    profileGender: 'male',
    profileLastName: 'Moccagatta',
    profileUsername: 'nicomoccagatta@gmail.com',
    twitterTitle: t('seo.title'),
    twitterDescription: t('seo.description', { years: yearsOfExperience }),
    twitterImage: "https://nicomoccagatta.com/img/nico.png",
    twitterCard: "summary_large_image",
  })

  useHeadSafe({
    htmlAttrs: {
      lang: lang
    },
  })

  useSchemaOrg([
    {
      "@type": "Person",
      "@id": "https://nicomoccagatta.com/#person",
      name: "Nicolas Moccagatta",
      givenName: "Nicolas",
      familyName: "Moccagatta",
      url: "https://nicomoccagatta.com",
      image: "https://nicomoccagatta.com/img/nico.png",
      jobTitle: "Full Stack Software Engineer",
      description: t('seo.personDescription', { years: yearsOfExperience }),
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "University of Buenos Aires",
        sameAs: "https://en.wikipedia.org/wiki/University_of_Buenos_Aires"
      },
      worksFor: [
        { "@type": "Organization", name: "PayPal" },
        { "@type": "Organization", name: "Medallia" },
        { "@type": "Organization", name: "Mercado Libre" }
      ],
      knowsAbout: [
        "Full Stack Development",
        "Frontend Development",
        "Web Technologies",
        "Software Engineering",
        "Computer Science"
      ],
      sameAs: [
        "https://github.com/nicomoccagatta",
        "https://www.linkedin.com/in/nicomoccagatta"
      ],
      email: "nicomoccagatta@gmail.com",
      gender: "male"
    }
  ])
}, { immediate: true })
</script>

<template>
  <Header />
  <main class="container min-h-[calc(100vh-var(--header-height)*2)]">
    <div class="min-h-max flex flex-col overflow-x-hidden">
      <slot />
    </div>
  </main>
  <Footer />
</template>
