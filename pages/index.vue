<script lang="ts" setup>
const { t } = useTranslation()
const yearsOfExperience = computed(() => new Date().getFullYear() - 2017)
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

        <!-- <div class="mb-8 lg:m-0 flex">
          <button class="select-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 font-medium rounded-xl text-sm gap-x-1.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-blue-400 hover:bg-blue-600 disabled:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 inline-flex items-center" href="/">
            <span class="i-heroicons-profile icons-svg h-5 w-5" aria-hidden="true" />
            <span class="text-white dark:text-gray-900">Check my profile</span>
          </button>
        </div> -->

      </div>

      <NuxtImg placeholder format="webp" class="rounded-xl lg:rounded-full border-blue-400 border-8 w-full lg:min-w-72 lg:h-96" src="/img/nico.png" :alt="t('home.imageAlt', { years: yearsOfExperience })" />
    </article>
  </section>
</template>

<style scoped>
.i-heroicons-profile {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
}
</style>
