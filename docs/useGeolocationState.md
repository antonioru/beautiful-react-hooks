# useGeolocationState

Returns an object containing the `position` information, the `isSupported` boolean flag reporting whether the geolocation API is supported
or not and the `isRetrieving` boolean flag reporting whether the hook is fetching the current position or not.

The position is retrieved by using the
[Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API), when supported.

It possibly accepts an object of [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)
to be used as parameter when using the `Geolocation.getCurrentPosition()` method.

### Why? 💡

- allow to easily access the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- takes care of cleaning the listener when the component will unmount
- allow to perform abstractions on geolocation related events

### Basic Usage:

```jsx harmony
import useGeolocationState from 'beautiful-react-hooks/useGeolocationState';

const PositionReporter = () => {
  const { isSupported, isRetrieving, position } = useGeolocationState();

  return (
    <DisplayDemo>
      The current position is:
      {isRetrieving && (<p>Retrieving position...</p>)}
      {isSupported && position && [
        <p key={0}>Lat: {position.coords.latitude}</p>,
        <p key={1}>Lng: {position.coords.longitude}</p>
      ]}
    </DisplayDemo>
  );
};

<PositionReporter />
```

### Options:

Before using, please read about the [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

```jsx harmony
import useGeolocationState from 'beautiful-react-hooks/useGeolocationState';

const PositionReporter = () => {
  const { isSupported, isRetrieving, position } = useGeolocationState({
    enableHighAccuracy: true,
    timeout: 0xFFFFFFFF,
    maximumAge: 0,
  });

  return (
    <DisplayDemo>
      The current high accuracy position is:
      {isRetrieving && (<p>Retrieving position...</p>)}
      {isSupported && position && [
        <p key={0}>Lat: {position.coords.latitude}</p>,
        <p key={1}>Lng: {position.coords.longitude}</p>
      ]}
    </DisplayDemo>
  );
};

<PositionReporter />
```

### Mastering the hook

#### ✅ When to use

- If in need to easily access the Geolocation API
- If in need to abstract some geolocation related logic into a custom hooks

#### 🛑 What not to do

- Don't use this hook to try to guess the user's device capabilities
- Don't access the geolocation state before checking hte `isSupported` flag
