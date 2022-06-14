# useGeolocationEvents

Returns an object of handler setters to handle the geolocation-related events. So far, the supported methods are: `onChange`, invoked when
the position changes and `onError`, invoked when an error occur while retrieving the position.<br/>
The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.

**Please note:** the returned handler setters should invoked immediately in the function component's body, do not try to call this functions
asynchronously.

### Why? 💡

- takes care of adding the geolocation events listeners
- takes care of cleaning the listener when the component will unmount
- allow to perform abstractions on geolocation related events

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import useGeolocationEvents from 'beautiful-react-hooks/useGeolocationEvents';

const GeoReporter = () => {
  const [position, setGeoPosition] = useState();
  const [error, setError] = useState();
  const { isSupported, onChange, onError } = useGeolocationEvents({ enableHighAccuracy: true });

  onChange((geoPosition) => setGeoPosition(geoPosition));

  onError((err) => setError(err));

  return (
    <DisplayDemo>
      <p>Geolocation supported: {isSupported ? 'yes' : 'no'}</p>
      {!error && position && (
        <p>lat: {position.coords.latitude}, lng: {position.coords.longitude}</p>
      )}
    </DisplayDemo>
  );
};

<GeoReporter />
```

### Mastering the hook

#### ✅ When to use

- If in need to abstract some geolocation related logic into a custom hooks

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
