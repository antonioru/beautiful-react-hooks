# useInterval

An async-utility hook that accepts a callback `function` and a `delay time` (*in milliseconds*), then repeat the execution of the given
function by the defined time.

### Why? 💡

- takes care of performing the given callback regardless the component re-renders;
- cancels the interval when the component unmount (or not, depends by the defined options);
- returns the interval state (cleared/not cleared)
- returns a method to possibly cancel the set interval (cause the component re-render)

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // repeat the function each 1000ms
  useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo>
      <p>Rendering since {seconds} seconds</p>
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### State & clear method:

The hook returns the state of the timeout (a boolean, cleared/not cleared) and a method to possibly clear it.

**Note:** programmatically clearing the timeout will cause the component re-render.

```jsx harmony
import { useState } from 'react';
import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCleared, clearInterval] = useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo>
      <p>Rendering since {seconds} seconds</p>
      {!isCleared && <button onClick={clearInterval}>Stop it!</button>}
      {isCleared && <p>Interval cleared!</p>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Options:

`useInterval` might accept a options object provided as eventual parameter.

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const options = { cancelOnUnmount: false };

  useInterval(() => setSeconds(1 + seconds), 1000, options);

  return (
    <DisplayDemo>
      <p>Content rendering since {seconds} but will not be cleared on unmount</p>
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Mastering the hook

#### ✅ When to use

- If in need to perform a function every x number of milliseconds regardless the component re-renders

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
