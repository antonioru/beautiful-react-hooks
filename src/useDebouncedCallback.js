import { useCallback } from 'react';
import debounce from './utils/debounce';

/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.<br />
 * If time is not defined, its default value will be 250ms.
 *
 * ### Usage:
 *
 * ```jsx harmony
 *
 * const TestComponent = () => {
 *   const onWindowResize = useGlobalEvent('resize');
 *
 *   onWindowResize((event) => {
 *      console.log('GNIFRO', event)
 *   });
 *
 *   return (
 *      <div style={compStyle}>
 *       pippo
 *    </div>
 *  );
 *}
 * ```
 */
const useDebouncedCallback = (fn, wait = 250, dependencies) => useCallback(debounce(fn, wait), dependencies);

export default useDebouncedCallback;
