import { useCallback, useEffect, useMemo, useState } from 'react'

declare global {
  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList
  }

  interface SpeechRecognitionPolyfill {
    start: () => void
    stop: () => void
    abort: () => void
    addEventListener: (event: string, callback: (event: SpeechRecognitionEvent) => void) => void
    removeEventListener: (event: string, callback: (event: SpeechRecognitionEvent) => void) => void

    // eslint-disable-next-line @typescript-eslint/no-misused-new
    new(): SpeechRecognitionPolyfill
  }

  interface Window {
    SpeechRecognition?: SpeechRecognitionPolyfill
    webkitSpeechRecognition?: SpeechRecognitionPolyfill
  }
}

const SpeechRecognition = window.SpeechRecognition ?? window.webkitSpeechRecognition

/**
 * A hook that provides an interface for using the Web Speech API to recognize and transcribe speech in a user's browser.
 */
const useSpeechRecognition = () => {
  const spInstance = useMemo(() => SpeechRecognition ? new SpeechRecognition() : null, [])
  const [isRecording, setIsRecording] = useState(false)
  const [transcript, setTranscript] = useState('')
  const isSupported = !!spInstance

  useEffect(() => {
    const getResults = (event: SpeechRecognitionEvent) => {
      const nextTranscript = event.results[0][0].transcript
      setTranscript(nextTranscript)
    }

    if (spInstance && isSupported) {
      spInstance.addEventListener('result', getResults)
    }
    return () => {
      if (spInstance && isSupported) {
        spInstance.stop()
        spInstance.abort()
        spInstance.removeEventListener('result', getResults)
      }
    }
  }, [spInstance])

  const startRecording = useCallback(() => {
    if (spInstance && isSupported) {
      spInstance.start()
      setIsRecording(true)
    }
  }, [spInstance])

  const stopRecording = useCallback(() => {
    if (spInstance && isSupported) {
      spInstance.stop()
      setIsRecording(false)
    }
  }, [spInstance])

  return Object.freeze<UseSpeechRecognitionResult>({
    isSupported,
    transcript,
    isRecording,
    startRecording,
    stopRecording
  })
}

export interface UseSpeechRecognitionResult {
  isSupported: boolean
  transcript: string
  isRecording: boolean
  startRecording: () => void
  stopRecording: () => void
}

export default useSpeechRecognition
