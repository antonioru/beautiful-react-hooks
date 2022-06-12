# useWindowScroll

Accepts a function to be performed during the window scroll event.

It's built on top of [useGlobalEvent](./useGlobalEvent.md).

### Why? 💡

- takes care of adding the listener for the window scroll event.
- takes care of removing the listener when the component will unmount

### Basic usage:

```jsx harmony
import { useState } from 'react';
import { useWindowScroll } from 'beautiful-react-hooks';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onWindowScroll = useWindowScroll();

  onWindowScroll((event) => {
    setScrollY(window.scrollY);
  });

  return (
    <DisplayDemo>
      <p>window y-scroll: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowScrollReporter />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a handler setter*) can be used to set the `useWindowScroll` handler, as long
as it is immediately invoked.

**Please note**: the returned handler setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { useWindowScroll } from 'beautiful-react-hooks';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onScroll = useWindowScroll();

  onScroll(() => {
    setScrollY(window.scrollY);
  });

  return (
    <DisplayDemo>
      <p>window y-scroll: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowScrollReporter />
```

#### ✅ Pro tip:

if you're using a `setState` function in your `useWindowScroll` callback, you probably want to optimise your component performances by
preventing too many useless renders, please take into account using
[useThrottledCallback](useThrottledCallback.md).

```jsx harmony
import { useState } from 'react';
import { useWindowScroll, useThrottledCallback } from 'beautiful-react-hooks';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onWindowScroll = useWindowScroll();

  onWindowScroll(useThrottledCallback((event) => {
    setScrollY(window.scrollY);
  }));

  return (
    <DisplayDemo>
      <p>window y-scroll: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowScrollReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of performing a function during the window scroll, for example: to keep track of the window scroll position

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If using the handler setter, it should not be used asynchronously but immediately invoked
