<template>
  <footer class="h-[--header-height] backdrop-blur border-t border-gray-200 dark:border-gray-800">
    <div class="container h-full justify-start flex items-center">
      <span class="text-sm text-gray-500 dark:text-gray-400">
        © {{ new Date().getFullYear() }} | 
        <a
          href="https://github.com/nicomoccagatta/nicomoccagatta.com/blob/master/LICENSE"
          rel="noopener noreferrer"
          target="_blank"
          class="text-gray-900 dark:text-white"
        >
          MIT License
        </a>
      </span>
    </div>
  </footer>
</template>
