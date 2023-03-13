# useGeolocationEvents

A hook that returns an object of callback setters (functions to set the callback that will be performed once an event is fired)
to handle geolocation-related events. So far, the supported methods are:

- onChange, invoked when the position changes
- onError, invoked when an error occurs while retrieving the position.

The returned object also contains the `isSupported boolean flag, reporting whether the geolocation API is supported.

**Please note**: the returned callback setters should be invoked immediately in the function component's body. Do not try to call these
functions asynchronously.

### Why? 💡

- Manages the addition of geolocation event listeners
- Handles the cleaning of the listeners when the component unmounts
- Enables the creation of abstractions for geolocation-related events

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography } from 'antd';

import useGeolocationEvents from 'beautiful-react-hooks/useGeolocationEvents';

const GeoReporter = () => {
  const [position, setGeoPosition] = useState();
  const [error, setError] = useState();
  const { isSupported, onChange, onError } = useGeolocationEvents({ enableHighAccuracy: true });

  onChange((geoPosition) => setGeoPosition(geoPosition));

  onError((err) => setError(err));

  return (
          <DisplayDemo title="useGeolocationEvents">
            <Typography.Text>Geolocation supported: {isSupported ? 'yes' : 'no'}</Typography.Text>
            {!error && position && (
                    <Typography.Text>lat: {position.coords.latitude}, lng: {position.coords.longitude}</Typography.Text>
            )}
          </DisplayDemo>
  );
};

<GeoReporter />
```

### Mastering the hook

#### ✅ When to use

- Use this hook when you need to abstract geolocation-related logic into a custom hook

#### 🛑 What not to do

- Do not use the returned callback setter asynchronously. Doing so will have no effect and may cause bugs in your code. Instead, be sure to
  invoke the callback setters immediately in the function component's body

<!-- Types -->
### Types
    
```typescript static
import { type BRHGeolocationPosition, type BRHGeolocationPositionError } from './shared/types';
export interface UseGeolocationEventsResult {
    isSupported: boolean;
    onChange: (callback: (position: BRHGeolocationPosition) => void) => void;
    onError: (callback: (error: BRHGeolocationPositionError) => void) => void;
}
/**
 * Returns a frozen object of callback setters to handle the geolocation events.<br/>
 * So far, the supported methods are: `onChange`, invoked when the position changes and `onError`, invoked when
 * an error occur while retrieving the position.<br/>
 * The returned object also contains the `isSupported` boolean flag reporting whether the geolocation API is supported.
 */
declare const useGeolocationEvents: (options?: PositionOptions) => Readonly<UseGeolocationEventsResult>;
export default useGeolocationEvents;

```
<!-- Types:end -->