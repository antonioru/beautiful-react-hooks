import { useEffect, useState } from 'react'

/**
 * At the moment, the `window.speechSynthesis.getVoices` function returns all the available system voices, but since
 * it does it asynchronously the returning value is an empty array until a second call is performed.
 *
 * Check: https://w3c.github.io/speech-api/speechapi-errata.html.
 */
const asyncGetSystemVoices = (): Promise<SpeechSynthesisVoice[]> => new Promise((resolve) => {
  window.speechSynthesis.onvoiceschanged = () => resolve(window.speechSynthesis.getVoices())
  window.speechSynthesis.getVoices()
})

/**
 * A side effect to retrieve all the available system voices using the Web_Speech_API
 */
const useSystemVoices = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  useEffect(() => {
    asyncGetSystemVoices().then(setVoices)
  }, [])

  return voices
}

export default useSystemVoices
