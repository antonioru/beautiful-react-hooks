import useGlobalEvent from './useGlobalEvent'

/**
 * Returns a function that accepts a callback to be performed when the window resize.
 */
const useWindowResize = <T extends (event: Event) => void>(handler?: T) => useGlobalEvent<Event>('resize', handler)

export default useWindowResize
