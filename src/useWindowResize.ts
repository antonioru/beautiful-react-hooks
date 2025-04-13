import useGlobalEvent from './useGlobalEvent.ts'

/**
 * Returns a function that accepts a callback to be performed when the window resize.
 */
const useWindowResize = () => useGlobalEvent<UIEvent>('resize')

export default useWindowResize
