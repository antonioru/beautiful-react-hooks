# useGeolocationState

A hook that returns an object comprising information on the response from
the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API). \
This object properties are:

- the `position` information, which is the actual response from the geolocation API
- the `isSupported` boolean flag, indicating whether the geolocation API is supported or not
- the `isRetrieving` boolean flag, indicating whether the hook is currently retrieving the position or not
- the `onError` function, invoked when an error occurs while retrieving the position

It also accepts a [geolocation options object](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) to be utilized as a
parameter while utilizing the `Geolocation.getCurrentPosition()` method.

### Why? 💡

- facilitates streamlined access to
  the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API), which allows for
  geolocation tracking and position updates
- enables the abstraction of geolocation-related events, allowing for more flexible and scalable code implementation

### Basic Usage:

```jsx harmony
import { Typography } from 'antd';
import useGeolocationState from 'beautiful-react-hooks/useGeolocationState';

const PositionReporter = () => {
  const { isSupported, isRetrieving, position, onError } = useGeolocationState();

  onError((error) => {
    alert(error.message);
  });

  return (
          <DisplayDemo title="useGeolocationState">
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

Read more on the [geolocation options documentation](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions)

```jsx harmony
import useGeolocationState from 'beautiful-react-hooks/useGeolocationState';

const PositionReporter = () => {
  const { isSupported, isRetrieving, position, onError } = useGeolocationState({
    enableHighAccuracy: true,
    timeout: 0xFFFFFFFF,
    maximumAge: 0,
  });

  onError((error) => {
    alert(error.message);
  });

  return (
          <DisplayDemo title="useGeolocationState">
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
import { type BRHGeolocationPosition, type BRHGeolocationPositionError, type SomeCallback } from './shared/types';
export interface GeolocationState {
    readonly isSupported: boolean;
    readonly isRetrieving: boolean;
    readonly position: BRHGeolocationPosition;
}
export interface UseGeolocationStateResult extends GeolocationState {
    onError: (callback: SomeCallback<BRHGeolocationPositionError>) => void;
}
/**
 * Returns a frozen object containing the `position` object, the `isSupported` boolean flag, reporting whether the
 * geolocation API is supported or not and the `isRetrieving` boolean flag reporting whether the hook is fetching the
 * current position.
 * The position is retrieved by using the
 * [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API),
 * when supported.<br/><br />
 * It possibly accepts an object of [geolocation options]
 * (https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) to be used as parameter when using the
 * `Geolocation.getCurrentPosition()` method.
 */
declare const useGeolocationState: (options?: PositionOptions) => Readonly<UseGeolocationStateResult>;
export default useGeolocationState;

```
<!-- Types:end -->