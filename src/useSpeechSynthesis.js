import { useCallback, useEffect, useMemo } from 'react';

const defaultOptions = { rate: 0, pitch: 0, volume: 1 };

/**
 * Enables the possibility to perform a text-to-speach (with different voices) operation in your
 * React component by using the Web_Speech_API
 */
const useSpeechSynthesis = (text, options = defaultOptions) => {
  const utter = useMemo(() => new SpeechSynthesisUtterance(text), [text]);
  const voiceOptions = { ...defaultOptions, ...options };
  utter.voice = voiceOptions.voice;

  useEffect(() => {
    utter.pitch = voiceOptions.pitch;
  }, [voiceOptions.pitch]);

  useEffect(() => {
    utter.rate = voiceOptions.rate;
  }, [voiceOptions.rate]);

  useEffect(() => {
    utter.volume = voiceOptions.volume;
  }, [voiceOptions.volume]);

  const speak = useCallback(
    () => speechSynthesis.speak(utter),
    [text, voiceOptions.pitch, voiceOptions.rate, voiceOptions.voice, voiceOptions.volume],
  );

  return {
    speak,
    speechSynthUtterance: utter,
  };
};

export default useSpeechSynthesis;
