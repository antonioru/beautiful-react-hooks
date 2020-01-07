import useGlobalEvent from './useGlobalEvent';

/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 */
const useWindowScroll = (handler) => useGlobalEvent('scroll', null, handler);

export default useWindowScroll;
