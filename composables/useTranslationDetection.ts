import { ref, onMounted, onUnmounted } from 'vue'

export const useTranslationDetection = () => {
  const isAutoTranslating = ref(false)
  let detectionElement: HTMLElement | null = null
  let intervalId: number | null = null

  const checkTranslation = () => {
    if (!detectionElement) return false

    const expectedText = 'Hello'
    const actualText = detectionElement.textContent || ''

    // If the text doesn't match what we set, browser translation is active
    return actualText !== expectedText
  }

  const updateTranslationStatus = () => {
    const wasTranslating = isAutoTranslating.value
    isAutoTranslating.value = checkTranslation()

    if (!wasTranslating && isAutoTranslating.value) {
      console.log('[i18n] Browser auto-translation detected, disabling locale switcher')
    } else if (wasTranslating && !isAutoTranslating.value) {
      console.log('[i18n] Browser auto-translation no longer detected, enabling locale switcher')
    }
  }

  onMounted(() => {
    // Create a hidden detection element with known text
    detectionElement = document.createElement('div')
    detectionElement.textContent = 'Hello'
    detectionElement.style.position = 'absolute'
    detectionElement.style.left = '-9999px'
    detectionElement.style.visibility = 'hidden'
    detectionElement.setAttribute('aria-hidden', 'true')
    document.body.appendChild(detectionElement)

    // Check periodically if the content has been translated
    intervalId = window.setInterval(updateTranslationStatus, 1000)

    // Initial check
    setTimeout(updateTranslationStatus, 100)
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
    if (detectionElement && detectionElement.parentNode) {
      detectionElement.parentNode.removeChild(detectionElement)
      detectionElement = null
    }
  })

  return {
    isAutoTranslating
  }
}
