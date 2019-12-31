<a name="useGeolocationEvents"></a>

## useGeolocationEvents()
Returns a frozen object of callback setters to handle the geolocation events.<br/>
So far, the supported methods are: `onChange`, invoked when the position changes and `onError`, invoked when
an error occur while retrieving the position.<br/>
The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.

### Usage:

```jsx harmony
const GeoReporter = () => {
  const [ position, setGeoPosition] = useState();
  const [ error, setError] = useState();
  const { isSupported, onChange, onError } = useGeolocationEvents({ enableHighAccuracy: true });

  onChange((geoPosition) => setGeoPosition(geoPosition));
  onError((err) => setError(err));

  return (
   <div>
     <p>Geolocation supported: {isSupported ? 'yes' : 'no'}</p>
     {!error && position && (
       <p>lat: {position.coords.latitude}, lng: {position.coords.longitude}</p>
     )}
   </div>
  );
};
```

**Kind**: global function  
