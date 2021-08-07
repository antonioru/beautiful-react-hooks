import useGlobalEvent from './useGlobalEvent'

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 */
const useWindowScroll = <T extends (event: Event) => void>(handler?: T) => useGlobalEvent('scroll', handler)

export default useWindowScroll
