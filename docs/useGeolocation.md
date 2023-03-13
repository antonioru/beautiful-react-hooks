# useGeolocation

A hook that does the job of two - now that's efficiency! This nifty little function returns an array with two elements: the first being the
geolocation state from our trusty [useGeolocationState](./useGeolocationState) hook, and the second being an object of callback setters
from [useGeolocationEvents](./useGeolocationEvents).

It is intended as a shortcut to those hooks.

### Why? 💡

- facilitates streamlined access to
  the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API), which allows for
  geolocation tracking and position updates
- manages the addition of geolocation event listeners, ensuring that events related to the user's location are properly handled.
- automatically cleans up the event listener when the component is unmounted, preventing potential memory leaks and optimizing performance
- enables the abstraction of geolocation-related events, allowing for more flexible and scalable code implementation

### Basic Usage:

```jsx harmony
import { Typography } from 'antd';
import useGeolocation from 'beautiful-react-hooks/useGeolocation';

const PositionReporter = () => {
  const [geoState, { onChange }] = useGeolocation();

  onChange(() => {
    console.log('Position changed...');
  });

  return (
          <DisplayDemo title="useGeolocation">
            <Typography.Title>The current position is:</Typography.Title>
            {geoState.isRetrieving && (<Typography.Paragraph>Retrieving position...</Typography.Paragraph>)}
            {geoState.isSupported && geoState.position && [
              <Typography.Paragraph key={0}>Lat: {geoState.position.coords.latitude}</Typography.Paragraph>,
              <Typography.Paragraph key={1}>Lng: {geoState.position.coords.longitude}</Typography.Paragraph>
            ]}
          </DisplayDemo>
  );
};

<PositionReporter />
```

### Options:

Before using, please read about the [geolocation options](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

```jsx harmony
import { Typography } from 'antd';
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
          <DisplayDemo title="useGeolocation">
            <Typography.Title>The current position is:</Typography.Title>
            {geoState.isRetrieving && (<Typography.Paragraph>Retrieving position...</Typography.Paragraph>)}
            {geoState.isSupported && geoState.position && [
              <Typography.Paragraph key={0}>Lat: {geoState.position.coords.latitude}</Typography.Paragraph>,
              <Typography.Paragraph key={1}>Lng: {geoState.position.coords.longitude}</Typography.Paragraph>
            ]}
          </DisplayDemo>
  );
};

<PositionReporter />
```

### Mastering the hook

#### ✅ When to use

- Use this hook when you require effortless access to the Geolocation API

#### 🛑 What not to do

- Do not utilize this hook to speculate the user's device capabilities.
- Prior to accessing the geolocation state, ensure to verify the isSupported flag.

<!-- Types -->
### Types
    
```typescript static
import { type UseGeolocationStateResult } from './useGeolocationState';
import { type UseGeolocationEventsResult } from './useGeolocationEvents';
/**
 * Returns an array where the first item is the geolocation state from the `useGeolocationState` hook and the
 * second one is the object of callback setters from the `useGeolocationEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
declare const useGeolocation: (options?: PositionOptions) => [UseGeolocationStateResult, UseGeolocationEventsResult];
export default useGeolocation;

```
<!-- Types:end -->