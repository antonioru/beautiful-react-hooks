# useObservable

Make your components reactive with `rxjs`

### Why? 💡

- you can change your data in pipes with default rxjs operators
- combine data, pipes and create structured code

### Basic Usage:

##### Using as  [useInterval](./useInterval.md)

```jsx harmony
import { useState } from 'react';
import { interval } from 'rxjs';
import useObservable from 'beautiful-react-hooks/useObservable';

const interval$ = interval(1000); // create an interval pipe

const ObservableInterval = () => {
  const [seconds, setSeconds] = useState(0);

  useObservable(interval$, setSeconds);

  return (
    <DisplayDemo>
      <p>Rendering since {seconds} seconds</p>
    </DisplayDemo>
  );
};

<ObservableInterval />
```

##### Using as [useGeolocationState](./useGeolocation.md)

```jsx harmony
import { useState } from 'react';
import { Observable } from 'rxjs';
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

  useObservable(position$, setPosition);
  const { coords } = position;

  return (
    <DisplayDemo>
      <p>Current position:</p>
      <p>lat: {coords && coords.latitude}</p>
      <p>long: {coords && coords.longitude}</p>
    </DisplayDemo>
  );
};

<ObservableGeolocation />
```

###### Handle resize event

```jsx harmony
import { useState } from 'react';
import { fromEvent } from 'rxjs';
import useObservable from 'beautiful-react-hooks/useObservable';

const resize$ = fromEvent(window, 'resize');

const ObservableResize = () => {
  const [event, setEvent] = useState({});

  useObservable(resize$, setEvent);
  const { target } = event;

  return (
    <DisplayDemo>
      <b>Resize your window</b>
      <p>Width: {target && target.innerWidth || 0}</p>
      <p>Height: {target && target.innerHeight || 0}</p>
    </DisplayDemo>
  );
};

<ObservableResize />
```

### Mastering the hook

#### ✅ When to use

- If you want to present some data like tables and work with them through the pipes (filter, sort, map etc.)
- use events wisely

#### 🛑 When not to use

- When you can do something w/o rx
