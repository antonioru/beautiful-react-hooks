# useGeolocation

Returns an array where the first item is the geolocation state from [useGeolocationState](./useGeolocationState.md)
and the second one is an object of handler setters from the [useGeolocationEvents](./useGeolocationEvents.md).

It is intended as a shortcut to those hooks.

### Why? 💡

- allow to easily access the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- takes care of adding the geolocation events listeners
- takes care of cleaning the listener when the component will unmount
- allow to perform abstractions on geolocation related events

### Basic Usage:

```jsx harmony
import useGeolocation from 'beautiful-react-hooks/useGeolocation';

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation();

  onChange(() => {
    console.log('Position changed...');
  });

  return (
    <DisplayDemo>
      The current position is:
      {geoState.isRetrieving && (<p>Retrieving position...</p>)}
      {geoState.isSupported && geoState.position && [
        <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
        <p key={1}>Lng: {geoState.position.coords.longitude}</p>
      ]}
    </DisplayDemo>
  );
};

<PositionReporter />
```

### Options:

Before using, please read about the [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

```jsx harmony
import useGeolocation from 'beautiful-react-hooks/useGeolocation';

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation({
    enableHighAccuracy: true,
    timeout: 0xFFFFFFFF,
    maximumAge: 0,
  });

  onChange(() => {
    console.log('Position changed...');
  });

  return (
    <DisplayDemo>
      The current position is:
      {geoState.isRetrieving && (<p>Retrieving position...</p>)}
      {geoState.isSupported && geoState.position && [
        <p key={0}>Lat: {geoState.position.coords.latitude}</p>,
        <p key={1}>Lng: {geoState.position.coords.longitude}</p>
      ]}
    </DisplayDemo>
  );
};

<PositionReporter />
```

### Mastering the hook

#### ✅ When to use

- If in need to easily access the Geolocation API.

#### 🛑 What not to do

- Don't use this hook to try to guess the user's device capabilities
- Don't access the geolocation state before checking the `isSupported` flag
