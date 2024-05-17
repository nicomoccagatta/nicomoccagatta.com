<template>
  <div class="grid justify-items-center p-5 lg:p-10 rounded-xl shadow-lg bg-gray-200/50 dark:bg-gray-800/50 my-5">
    <div class="block w-full lg:flex lg:justify-between">
      <div class="grid content-baseline lg:mr-10">
        <h1 class="text-left overflow-hidden text-3xl lg:text-5xl text-gray-600 dark:text-gray-300">Hello, I'm
          <span class="block max-w-fit text-blue-400 font-bold animate-typing overflow-hidden whitespace-nowrap border-r-4 border-b-4 border-blue-400 pt-2">
            Nicolas Moccagatta
          </span>
        </h1>

        <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">I'm a seasoned Software Engineer with over 7 years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.</p>
        <p class="mt-2 mb-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">Holding a Bachelor's degree in Engineering from the University of Buenos Aires, where I majored in Computer Science, I've had the privilege of contributing to various projects across different companies, from startups to industry giants like Mercado Libre, Medallia, and PayPal.</p>

        <!-- <div class="mt-8 mb-8 flex">
          <button disabled class="select-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 font-medium rounded-md text-sm gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-blue-400 hover:bg-blue-600 disabled:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:disabled:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:focus-visible:outline-blue-400 inline-flex items-center" href="/">
            <span class="i-heroicons-rocket-launch icons-svg h-5 w-5" aria-hidden="true" />
            <span class="text-white dark:text-gray-900">Get started</span>
          </button>
        </div> -->

      </div>

      <img class="rounded-xl lg:rounded-full border-blue-400 border-8 w-full lg:w-72 lg:h-96" src="/img/nico.png" alt="Nicolas" />
    </div>
  </div>
</template>

<style scoped>
.i-heroicons-rocket-launch {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M15.59 14.37q.159.666.16 1.38a6 6 0 0 1-6 6v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.9 14.9 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.9 14.9 0 0 0-2.58 5.84m2.699 2.7q-.155.032-.311.06a15 15 0 0 1-2.448-2.448l.06-.312m-2.24 2.39a4.49 4.49 0 0 0-1.757 4.306q.341.054.696.054a4.5 4.5 0 0 0 3.61-1.812M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'/%3E%3C/svg%3E");
}
</style>
