import useGlobalEvent from './useGlobalEvent'

/**
 * Returns a function that accepts a callback to be performed when the window resize.
 */
const useWindowResize = () => useGlobalEvent('resize')

export default useWindowResize
