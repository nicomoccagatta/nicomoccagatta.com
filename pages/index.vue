<script lang="ts" setup>
const { t } = useTranslation()
const yearsOfExperience = computed(() => new Date().getFullYear() - 2017)
const emailHref = computed(
  () => `mailto:nicomoccagatta@gmail.com?subject=${encodeURIComponent(t('home.emailSubject'))}`
)
</script>

<template>
  <section class="grid justify-items-center p-5 lg:p-10 rounded-xl shadow-lg bg-gray-200/50 dark:bg-gray-800/50 my-5">
    <article class="block w-full lg:flex lg:justify-between">
      <div class="grid content-baseline lg:mr-10">
        <h1 class="text-left overflow-hidden text-3xl lg:text-5xl text-gray-600 dark:text-gray-300">{{ t('home.greeting') }}
          <span class="block max-w-fit text-blue-400 font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-b-4 border-blue-400 pt-2">
            {{ t('home.name') }}
          </span>
        </h1>

        <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">{{ t('home.intro', { years: yearsOfExperience }) }}</p>
        <p class="mt-2 mb-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">{{ t('home.bio') }}</p>

        <div class="mb-8 lg:mb-0 flex">
          <a
            :href="emailHref"
            class="select-none focus:outline-none font-medium rounded-xl text-sm gap-x-1.5 px-4 py-2.5 shadow-sm text-white dark:text-gray-900 bg-blue-400 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 inline-flex items-center justify-center"
            :aria-label="t('home.getInTouch')"
          >
            <span class="i-heroicons-envelope icons-svg h-5 w-5" aria-hidden="true" />
            <span>{{ t('home.getInTouch') }}</span>
          </a>
        </div>
      </div>

      <NuxtImg placeholder format="webp" class="rounded-xl lg:rounded-full border-blue-400 border-8 w-full lg:min-w-72 lg:h-96" src="/img/nico.png" :alt="t('home.imageAlt', { years: yearsOfExperience })" />
    </article>
  </section>
</template>

<style scoped>
.i-heroicons-envelope {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'/%3E%3C/svg%3E");
}
</style>
