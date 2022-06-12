# useWindowResize

Accepts a function to be performed during the window resize event.

It's built on top of [useGlobalEvent](./useGlobalEvent.md).

### Why? 💡

- takes care of adding the listener for the window resize event.
- takes care of removing the listener when the component will unmount

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { useWindowResize } from 'beautiful-react-hooks';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useWindowResize((event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a handler setter*) can be used to set the `useWindowResize` handler, as long
as it is immediately invoked.

**Please note**: the returned handler setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { useWindowResize } from 'beautiful-react-hooks';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

#### ✅ Pro tip:

if you're using a `setState` function in your `useWindowResize` callback, you probably want to optimise your component performances by
preventing too many useless renders, please take into account using
[useThrottledCallback](useThrottledCallback.md).

```jsx harmony
import { useState } from 'react';
import { useWindowResize, useThrottledCallback } from 'beautiful-react-hooks';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(useThrottledCallback((event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }));

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of performing a function during the window resize, for example: to keep track of the window size

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If using the handler setter, it should not be used asynchronously but immediately invoked
