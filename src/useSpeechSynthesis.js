import { useCallback, useEffect, useMemo } from 'react';

const defaultVoiceOptions = () => ({
  voice: speechSynthesis.getVoices()[0],
  pitch: -1,
  rate: -1,
});

/**
 *
 */
const useSpeechSynthesis = (text, voiceOptions = defaultVoiceOptions) => {
  const utter = useMemo(() => new SpeechSynthesisUtterance(text), [text]);
  const options = { ...defaultVoiceOptions(), ...voiceOptions };
  utter.voice = options.voice;

  useEffect(() => {
    utter.pitch = options.pitch;
  }, [options.pitch]);

  useEffect(() => {
    utter.rate = options.rate;
  }, [options.rate]);

  const speak = useCallback(() => speechSynthesis.speak(utter), [text, options.pitch, options.rate, options.voice]);

  return {
    speak,
    utter,
  };
};

export default useSpeechSynthesis;
