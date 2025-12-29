<script lang="ts" setup>
import { AVAILABLE_LANGUAGES } from '~/types/i18n'

const colorMode = useColorMode()
const { currentLang, t, toggleLanguage, AVAILABLE_LANGUAGES: LANGS } = useTranslation()
const { isAutoTranslating } = useTranslationDetection()

const setColorMode = (color: 'light' | 'dark') => {
  colorMode.preference = color
}
</script>

<template>
  <header class="sticky top-0 z-50 -mb-px w-full backdrop-blur-md border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white dark:bg-slate-900/75 h-[--header-height]">
    <div class="container mx-auto flex items-center justify-between gap-3 h-full">
      <a aria-current="page" href="/" class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex gap-2.5 items-center" aria-label="Logo">
        <img class="hidden rounded-full border-blue-400 border-2 h-9" src="/img/nico.png" alt="Nicolas Moccagatta - Software Engineer" />
        <span class="hidden">Nicolas Moccagatta</span>
      </a>

      <div class="flex items-center justify-end lg:flex-1 gap-1.5">
        <UTooltip v-if="!isAutoTranslating" :text="currentLang === AVAILABLE_LANGUAGES.EN ? t('header.switchToSpanish') : t('header.switchToEnglish')" :popper="{ arrow: true }">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center block"
            :aria-label="currentLang === AVAILABLE_LANGUAGES.EN ? t('header.switchToSpanish') : t('header.switchToEnglish')"
            @click="toggleLanguage"
          >
            <span
              class="flex-shrink-0 h-4 font-semibold"
              aria-hidden="true"
            >{{ currentLang === AVAILABLE_LANGUAGES.EN ? 'EN' : 'ES' }}</span>
          </button>
        </UTooltip>

        <UTooltip :text="t('header.switchToLight')" :popper="{ arrow: true }" v-if="$colorMode.preference !== 'light'">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            :aria-label="t('header.switchToLight')"
            @click="setColorMode('light')"
          >
            <span
              class="i-heroicons-moon-20-solid icons-svg flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </UTooltip>

        <UTooltip :text="t('header.switchToDark')" :popper="{ arrow: true }" v-if="$colorMode.preference === 'light'">
          <button
            type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            :aria-label="t('header.switchToDark')"
            @click="setColorMode('dark')"
          >
            <span
              class="i-heroicons-sun-20-solid icons-svg flex-shrink-0 h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </UTooltip>

        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          :aria-label="t('header.githubProfile')"
          href="https://github.com/nicomoccagatta"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            class="i-simple-icons-github icons-svg flex-shrink-0 h-4 w-4"
            aria-hidden="true"
          />
        </a>

        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          :aria-label="t('header.email')"
          href="mailto:nicomoccagatta@gmail.com"
          target="_blank"
        >
          <span
            class="i-simple-icons-gmail icons-svg flex-shrink-0 h-4 w-4"
            aria-hidden="true"
          />
        </a>

        <a
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
          :aria-label="t('header.linkedinProfile')"
          href="https://www.linkedin.com/in/nicomoccagatta"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span
            class="i-simple-icons-linkedin icons-svg flex-shrink-0 h-4 w-4"
            aria-hidden="true"
          />
        </a>

        <!-- <button
          type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open Menu"
        >
          <span
            class="i-heroicons-bars-3-20-solid icons-svg flex-shrink-0 h-4 w-4"
            aria-hidden="true"
          />
        </button> -->
      </div>
    </div>
  </header>
</template>

<style scoped>
.i-heroicons-moon-20-solid {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083' clip-rule='evenodd'/%3E%3C/svg%3E");
}

.i-heroicons-sun-20-solid {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath d='M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2m0 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15m0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6m5.657-1.596a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06zm-9.193 9.192a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06zM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10M5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10m9.596 5.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06zM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06z'/%3E%3C/svg%3E");
}

.i-simple-icons-github {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'/%3E%3C/svg%3E");
}

.i-simple-icons-gmail {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'/%3E%3C/svg%3E");
}

.i-simple-icons-linkedin {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E");
}

.i-heroicons-bars-3-20-solid {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75M2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10m0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75' clip-rule='evenodd'/%3E%3C/svg%3E");
}

.i-heroicons-language-20-solid {
  --svg: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Cpath fill-rule='evenodd' d='M7.75 1.5a.75.75 0 0 0-1.5 0v1.634a49.67 49.67 0 0 0-3.84.337.75.75 0 0 0 .28 1.473c1.235-.238 2.536-.401 3.896-.484.213 2.037.577 3.868 1.052 5.394a35.82 35.82 0 0 1-1.674 3.314c-.305.478-.54.825-.72 1.061a.75.75 0 1 0 1.192.91c.207-.27.486-.68.832-1.22a37.3 37.3 0 0 0 1.733-3.394c.49 1.526.854 3.357 1.067 5.394 1.36.083 2.66.246 3.896.484a.75.75 0 0 0 .28-1.473 48.13 48.13 0 0 0-3.84-.337V1.5Zm2.25 6.5h3a.75.75 0 0 1 0 1.5h-3v3h2.25a.75.75 0 0 1 0 1.5H10v1.25a.75.75 0 0 1-1.5 0V14H6.25a.75.75 0 0 1 0-1.5H8.5v-3h-3a.75.75 0 0 1 0-1.5h3V7.134c-.427-.09-.858-.17-1.293-.238-.68 2.103-1.61 3.946-2.63 5.394-.145.227-.295.453-.448.674A.75.75 0 0 1 2.92 12.4c.137-.2.27-.41.396-.627.96-1.364 1.81-3.01 2.42-4.773H5.5a.75.75 0 0 1 0-1.5h.736c.065-.22.132-.437.2-.651A48.14 48.14 0 0 1 7.75 3.134V8Z' clip-rule='evenodd'/%3E%3C/svg%3E");
}

</style>
