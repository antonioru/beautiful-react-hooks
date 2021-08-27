import { useCallback, useEffect, useMemo } from 'react'

export type UseSpeechSynthesisOptions = {
  rate?: number,
  pitch?: number,
  volume?: number
  voice?: SpeechSynthesisVoice,
}

const defaultOptions: UseSpeechSynthesisOptions = { rate: 0, pitch: 0, volume: 1 }

export type SpeechSynthesisResult = {
  speak: () => void,
  speechSynthUtterance: SpeechSynthesisUtterance
}

/**
 * Enables the possibility to perform a text-to-speech (with different voices) operation in your
 * React component by using the Web_Speech_API
 */
const useSpeechSynthesis = (text: string, options: UseSpeechSynthesisOptions = defaultOptions): SpeechSynthesisResult => {
  const utter: SpeechSynthesisUtterance = useMemo(() => new SpeechSynthesisUtterance(text), [text])
  const voiceOptions = { ...defaultOptions, ...options }
  utter.voice = voiceOptions.voice

  useEffect(() => {
    utter.pitch = voiceOptions.pitch
  }, [voiceOptions.pitch])

  useEffect(() => {
    utter.rate = voiceOptions.rate
  }, [voiceOptions.rate])

  useEffect(() => {
    utter.volume = voiceOptions.volume
  }, [voiceOptions.volume])

  const speak = useCallback(
    () => speechSynthesis.speak(utter),
    [text, voiceOptions.pitch, voiceOptions.rate, voiceOptions.voice, voiceOptions.volume],
  )

  return {
    speak,
    speechSynthUtterance: utter,
  }
}

export default useSpeechSynthesis
