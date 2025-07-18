import useGlobalEvent from './useGlobalEvent.ts'

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 */
const useWindowScroll = () => useGlobalEvent<UIEvent>('scroll')

export default useWindowScroll
