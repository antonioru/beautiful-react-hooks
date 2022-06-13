import useGlobalEvent from './useGlobalEvent'

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 */
const useWindowScroll = <TEvent extends UIEvent>() => useGlobalEvent<TEvent>('scroll')

export default useWindowScroll
