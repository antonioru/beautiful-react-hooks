import { useCallback, useEffect, useMemo } from 'react'

/**
 * The options that can be passed to the hook
 * @see https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
 */
export interface UseSpeechSynthesisOptions {
  rate?: number
  pitch?: number
  volume?: number
  voice?: SpeechSynthesisVoice
}

/**
 * The result of the hook
 */
export interface SpeechSynthesisResult {
  readonly speak: () => void
  readonly speechSynthUtterance: SpeechSynthesisUtterance
}

const defaultOptions: UseSpeechSynthesisOptions = { rate: 1, pitch: 1, volume: 1 }

/**
 * Enables the possibility to perform a text-to-speech (with different voices) operation in your
 * React component by using the Web_Speech_API
 */
const useSpeechSynthesis = (text: string, options: UseSpeechSynthesisOptions = defaultOptions) => {
  const utter: SpeechSynthesisUtterance = useMemo(() => new SpeechSynthesisUtterance(text), [text])
  const voiceOptions = { ...defaultOptions, ...options }
  utter.voice = voiceOptions.voice!

  useEffect(() => {
    utter.pitch = voiceOptions.pitch!
  }, [voiceOptions.pitch])

  useEffect(() => {
    utter.rate = voiceOptions.rate!
  }, [voiceOptions.rate])

  useEffect(() => {
    utter.volume = voiceOptions.volume!
  }, [voiceOptions.volume])

  const speak = useCallback(
    () => {
      speechSynthesis.speak(utter)
    },
    [text, voiceOptions.pitch, voiceOptions.rate, voiceOptions.voice, voiceOptions.volume]
  )

  return Object.freeze<SpeechSynthesisResult>({
    speak,
    speechSynthUtterance: utter
  })
}

export default useSpeechSynthesis
