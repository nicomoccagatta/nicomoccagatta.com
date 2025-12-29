import type { Language, TranslationKey } from '~/types/i18n'
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '~/types/i18n'

export const useTranslation = () => {
  const currentLang = useState<Language>('lang', () => DEFAULT_LANGUAGE)

  const translations: Record<Language, Record<string, any>> = {
    [AVAILABLE_LANGUAGES.EN]: {
      header: {
        switchToSpanish: 'Cambiar a Español',
        switchToEnglish: 'Switch to English',
        switchToLight: 'Switch to light mode',
        switchToDark: 'Switch to dark mode',
        githubProfile: 'Github profile of Nicolas Moccagatta',
        email: 'Gmail of Nicolas Moccagatta',
        linkedinProfile: 'Linkedin profile of Nicolas Moccagatta',
      },
      home: {
        greeting: "Hello, I'm",
        name: 'Nicolas Moccagatta',
        intro: "I'm a seasoned Software Engineer with over {years} years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.",
        bio: "Holding a Bachelor's degree in Engineering from the University of Buenos Aires, where I majored in Computer Science, I've had the privilege of contributing to various projects across different companies, from startups to industry giants like Mercado Libre, Medallia, and PayPal.",
        imageAlt: 'Nicolas Moccagatta - Full Stack Software Engineer with {years}+ years of experience specializing in Frontend Web Technologies',
      },
      footer: {
        license: 'MIT License',
      },
      seo: {
        title: "Nicolas Moccagatta's Personal Website",
        description: "Hello, I'm Nicolas Moccagatta! I'm a seasoned Software Engineer with over {years} years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.",
        personDescription: 'Seasoned Software Engineer with over {years} years of experience in Full Stack Software Development, specializing in Frontend Web Technologies.',
      },
    },
    [AVAILABLE_LANGUAGES.ES]: {
      header: {
        switchToSpanish: 'Cambiar a Español',
        switchToEnglish: 'Switch to English',
        switchToLight: 'Cambiar a modo claro',
        switchToDark: 'Cambiar a modo oscuro',
        githubProfile: 'Perfil de Github de Nicolas Moccagatta',
        email: 'Correo de Nicolas Moccagatta',
        linkedinProfile: 'Perfil de LinkedIn de Nicolas Moccagatta',
      },
      home: {
        greeting: 'Hola, soy',
        name: 'Nicolas Moccagatta',
        intro: 'Soy un Ingeniero de Software experimentado con más de {years} años de experiencia en Desarrollo de Software Full Stack, especializado en Tecnologías Web Frontend.',
        bio: 'Con un título de Ingeniero en Informática de la Universidad de Buenos Aires, he tenido el privilegio de contribuir a varios proyectos en diferentes empresas, desde startups hasta gigantes de la industria como Mercado Libre, Medallia y PayPal.',
        imageAlt: 'Nicolas Moccagatta - Ingeniero de Software Full Stack con {years}+ años de experiencia especializado en Tecnologías Web Frontend',
      },
      footer: {
        license: 'Licencia MIT',
      },
      seo: {
        title: 'Sitio Web Personal de Nicolas Moccagatta',
        description: '¡Hola, soy Nicolas Moccagatta! Soy un Ingeniero de Software experimentado con más de {years} años de experiencia en Desarrollo de Software Full Stack, especializado en Tecnologías Web Frontend.',
        personDescription: 'Ingeniero de Software experimentado con más de {years} años de experiencia en Desarrollo de Software Full Stack, especializado en Tecnologías Web Frontend.',
      },
    },
  }

  const t = (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.')
    let value: any = translations[currentLang.value]

    for (const k of keys) {
      value = value?.[k]
    }

    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((acc, [key, val]) => {
        return acc.replace(`{${key}}`, String(val))
      }, value)
    }

    return String(value || key)
  }

  const setLang = (lang: Language) => {
    currentLang.value = lang
  }

  const toggleLanguage = () => {
    setLang(currentLang.value === AVAILABLE_LANGUAGES.EN ? AVAILABLE_LANGUAGES.ES : AVAILABLE_LANGUAGES.EN)
  }

  return {
    currentLang,
    t,
    setLang,
    toggleLanguage,
    AVAILABLE_LANGUAGES,
  }
}
