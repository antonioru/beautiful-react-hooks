/**
 * Returns all the available voices on the system.
 * This hook is here to backward compatibility with the previous version of the library that was using
 * a different non-stable version of the Web Speech API.
 */
const useSystemVoices = () => window.speechSynthesis.getVoices()

export default useSystemVoices
