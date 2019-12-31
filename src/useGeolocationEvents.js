import { useEffect, useMemo, useRef } from 'react';
import useCallbackRef from './useCallbackRef';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import geolocationStandardOptions from './utils/geolocationStandardOptions';

/**
 * Returns a frozen object of callback setters to handle the geolocation events.<br/>
 * So far, the supported methods are: `onChange`, invoked when the position changes and `onError`, invoked when
 * an error occur while retrieving the position.<br/>
 * The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const GeoReporter = () => {
 *   const [ position, setGeoPosition] = useState();
 *   const [ error, setError] = useState();
 *   const { isSupported, onChange, onError } = useGeolocationEvents({ enableHighAccuracy: true });
 *
 *   onChange((geoPosition) => setGeoPosition(geoPosition));
 *   onError((err) => setError(err));
 *
 *   return (
 *    <div>
 *      <p>Geolocation supported: {isSupported ? 'yes' : 'no'}</p>
 *      {!error && position && (
 *        <p>lat: {position.coords.latitude}, lng: {position.coords.longitude}</p>
 *      )}
 *    </div>
 *   );
 * };
 * ```
 */
const useGeolocationEvents = (options = geolocationStandardOptions) => {
  const watchId = useRef();
  const [onChangeRef, setOnChangeRef] = useCallbackRef();
  const [onErrorRef, setOnErrorRef] = useCallbackRef();
  const isSupported = useMemo(() => ('geolocation' in window.navigator), [onChangeRef, onErrorRef]);

  useEffect(() => {
    const onSuccess = (...args) => {
      if (onChangeRef.current) {
        onChangeRef.current(...args);
      }
    };
    const onError = (...args) => {
      if (onErrorRef.current) {
        onErrorRef.current(...args);
      }
    };

    if (isSupported) {
      watchId.current = window.navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    return () => {
      if (isSupported) {
        window.navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, [onChangeRef, onErrorRef]);

  return !isSupported ? createCbSetterErrorProxy('The Geolocation API is not supported') : Object.freeze({
    isSupported,
    onChange: setOnChangeRef,
    onError: setOnErrorRef,
  });
};

export default useGeolocationEvents;
