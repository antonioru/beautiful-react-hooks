import debounce from 'lodash.debounce';
import { useCallback } from 'react';

/**
 * Accepts a function  and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.<br />
 * If time is not defined, its default value will be 500ms.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const debouncedClick = useDebouncedCallback(() => {
 *     console.log('Button clicked...');
 *   });
 **
 *   return (<button onClick={debouncedClick}>Click me</button>)
 * }
 * ```
 *
 * ### Debounce time:
 *
 * It is possible to change the debounce time by defining how many ms to wait:
 *
 * ```jsx harmony
 * const MyComponent = () => {
 *   const debouncedClick = useDebouncedCallback(() => {
 *     console.log('Button clicked...');
 *   }, 250);
 *
 *   return (<button onClick={debouncedClick}>Click me</button>)
 * }
 * ```
 *
 * ### Dependencies:
 *
 * Since `useDebouncedCallback` uses `useCallback` under the hood, it is also possible to define its dependencies:
 *
 * ```jsx harmony
 * const MyComponent = (props) => {
 *   const debouncedClick = useDebouncedCallback(() => {
 *     console.log('Button clicked...');
 *   }, 250, [props.foo]);
 *
 *   return (<button onClick={debouncedClick}>Click me</button>)
 * }
 * ```
 */
const useDebouncedCallback = (fn, wait = 500, dependencies) => useCallback(debounce(fn, wait), dependencies);

export default useDebouncedCallback;
