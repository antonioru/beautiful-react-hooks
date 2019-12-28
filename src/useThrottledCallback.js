import { useCallback } from 'react';
import throttle from './utils/throttle';

/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
 * before allowing the next execution.<br />
 * If time is not defined, its default value will be 100ms.
 *
 * ### Usage:
 *
 * ```jsx harmony
 *
 * const TestComponent = () => {
 *   const [width, setWidth] = useState(window.innerWidth);
 *   const [height, setHeight] = useState(window.innerHeight);
 *   const onWindowResize = useWindowResize();
 *
 *   onWindowResize(useThrottledCallback(() => {
 *     setWidth(window.innerWidth);
 *     setHeight(window.innerHeight);
 *   }, 250));
 *
 *   return (
 *     <div style={compStyle}>
 *       <p>window width: {width}</p>
 *       <p>window height: {height}</p>
 *    </div>
 *   );
 * ```
 *
 * ### Debounce time:
 *
 * It is possible to change the throttle time by defining how many ms to wait:
 *
 * ```jsx harmony
 * const useDebouncedBy250 = (fn) => useThrottledCallback(fn, 250);
 * ```
 *
 * ### Dependencies:
 *
 * Since `useThrottledCallback` uses `useCallback` under the hood, it is also possible to define its dependencies:
 *
 * ```jsx harmony
 * const TestComponent = (props) => {
 *   const [width, setWidth] = useState(window.innerWidth);
 *   const [height, setHeight] = useState(window.innerHeight);
 *   const onWindowResize = useWindowResize();
 *
 *   onWindowResize(useThrottledCallback(() => {
 *     setWidth(window.innerWidth);
 *     setHeight(window.innerHeight);
 *   }, 250, [props.foo, props.bar]));
 *
 *   return (
 *     <div style={compStyle}>
 *       <p>window width: {width}</p>
 *       <p>window height: {height}</p>
 *    </div>
 *   );
 * ```
 */
const useThrottledCallback = (fn, wait = 100, dependencies) => useCallback(throttle(fn, wait), dependencies);

export default useThrottledCallback;
