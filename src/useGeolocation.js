import useGeolocationState from './useGeolocationState';
import useGeolocationEvents from './useGeolocationEvents';
import geolocationStandardOptions from './utils/geolocationStandardOptions';

/**
 * Returns an array where the first item is the geolocation state from the `useGeolocationState` hook and the
 * second one is the object of callback setters from the `useGeolocationEvents` hook.
 * It is intended as a shortcut to those hooks.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const PositionReporter = () => {
 *   const [geoState, { onChange }] = useGeolocation();
 *
 *     onChange(() => {
 *       console.log('Position changed...');
 *     });
 *
 *     return (
 *      <div>
 *        The current position is:
 *        {geoState.isRetrieving && (<p>Retrieving position...</p>)}
 *        {geoState.isSupported && geoState.position && [
 *          <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
 *          <p key={1}>Lng: {geoState.position.coords.longitude}</p>
 *        ]}
 *      </div>
 *     );
 *   };
 * ```
 */
const useGeolocation = (options = geolocationStandardOptions) => {
  const state = useGeolocationState(options);
  const events = useGeolocationEvents(options);

  return [state, events];
};

export default useGeolocation;
