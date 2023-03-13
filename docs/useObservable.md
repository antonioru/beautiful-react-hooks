# useObservable

A hook that enables reactivity in your components through the utilization of `RxJs` library.

### Why? 💡

- Modify your data using default `RxJs` operators within pipes, providing a cleaner and more concise way of handling asynchronous data
- Combine data from multiple sources into a single observable stream using various `RxJs` operators, allowing you to create more structured
  and organized code

### Basic Usage:

Mimics the behaviour of [useInterval](./useInterval.md) with `RxJs`

```jsx harmony
import { useState } from 'react';
import { Tag, Typography } from 'antd';
import { interval } from 'rxjs';
import useObservable from 'beautiful-react-hooks/useObservable';

const interval$ = interval(1000); // create an interval pipe

const ObservableInterval = () => {
  const [seconds, setSeconds] = useState(0);

  useObservable(interval$, setSeconds);

  return (
    <DisplayDemo title="useObservable">
      <Typography.Text>Rendering since <Tag color="green">{seconds}</Tag>seconds</Typography.Text>
    </DisplayDemo>
  );
};

<ObservableInterval />
```

Mimics the behaviour of [useGeolocationState](./useGeolocation.md) with `RxJs`

```jsx harmony
import { useState } from 'react';
import { Observable } from 'rxjs';
import { Typography } from 'antd';
import useObservable from 'beautiful-react-hooks/useObservable';

const position$ = new Observable(subscriber => {
  const watcherRef = navigator.geolocation.watchPosition(
    position => subscriber.next(position),
    error => subscriber.error(error),
  );

  return () => {
    navigator.geolocation.clearWatch(watcherRef);
  }
});

const ObservableGeolocation = () => {
  const [position, setPosition] = useState({});
  const { coords } = position;

  useObservable(position$, setPosition);

  return (
    <DisplayDemo title="useObservable">
      <Typography.Title>Current position:</Typography.Title>
      {position.coords && [
        <Typography.Paragraph key={0}>Lat: {position.coords.latitude}</Typography.Paragraph>,
        <Typography.Paragraph key={1}>Lng: {position.coords.longitude}</Typography.Paragraph>
      ]}
    </DisplayDemo>
  );
};

<ObservableGeolocation />
```

###### Handle resize event

```jsx harmony
import { useState } from 'react';
import { fromEvent } from 'rxjs';
import { Typography, Tag } from 'antd';
import useObservable from 'beautiful-react-hooks/useObservable';

const resize$ = fromEvent(window, 'resize');

const ObservableResize = () => {
  const [event, setEvent] = useState({});

  useObservable(resize$, setEvent);
  const { target } = event;

  return (
    <DisplayDemo title="useObservable">
      <Typography.Title>Resize your window</Typography.Title>
      <Typography.Paragraph>
        width: <Tag color="green">{target && target.innerWidth || 0}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        height: <Tag color="green">{target && target.innerHeight || 0}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<ObservableResize />
```

### Mastering the hook

#### ✅ When to use

- when you need to display and manipulate data using reactive programming techniques. `RxJs` pipes can be used for filtering, sorting,
  mapping, and other transformations.

#### 🛑 When not to use

- Don't use this hook as a state manager

<!-- Types -->
### Types
    
```typescript static
import { type Observable, type Observer } from 'rxjs';
/**
 * Hook, which helps you combine rxjs flow and setState in your component
 */
declare const useObservable: <T, F extends Partial<Observer<T>> | ((value: T) => void)>(observable: Observable<T>, setter: F) => void;
export default useObservable;

```
<!-- Types:end -->