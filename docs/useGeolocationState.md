<a name="useGeolocationState"></a>

## useGeolocationState()
Returns a frozen object containing the `position` object, the `isSupported` boolean flag, reporting whether the
geolocation API is supported or not and the `isRetrieving` boolean flag reporting whether the hook is fetching the
current position.
The position is retrieved by using the
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API),
when supported.<br/><br />
It possibly accepts an object of [geolocation options]
(https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) to be used as parameter when using the
`Geolocation.getCurrentPosition()` method.

### Usage:

```jsx harmony
const PositionReporter = () => {
  const {isSupported, isRetrieving, position } = useGeolocationState();

  return (
   <div>
     The current position is:
     {isRetrieving && (<p>Retrieving position...</p>)}
     {isSupported && position && [
       <p key={0}>Lat: {position.coords.latitude}</p>,
       <p key={1}>Lng: {position.coords.longitude}</p>
     ]}
   </div>
  );
};
```

**Kind**: global function  
