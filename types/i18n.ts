export const AVAILABLE_LANGUAGES = {
  EN: 'en',
  ES: 'es',
} as const

export type Language = typeof AVAILABLE_LANGUAGES[keyof typeof AVAILABLE_LANGUAGES]

export const DEFAULT_LANGUAGE: Language = AVAILABLE_LANGUAGES.EN

export type TranslationKey =
  | 'header.switchToSpanish'
  | 'header.switchToEnglish'
  | 'header.switchToLight'
  | 'header.switchToDark'
  | 'header.githubProfile'
  | 'header.email'
  | 'header.linkedinProfile'
  | 'home.greeting'
  | 'home.name'
  | 'home.intro'
  | 'home.bio'
  | 'home.imageAlt'
  | 'footer.license'
  | 'seo.title'
  | 'seo.description'
  | 'seo.personDescription'
