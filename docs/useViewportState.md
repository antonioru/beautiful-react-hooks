# useViewportState

Returns information on the current viewport state

It's built on top of [useWindowResize](./useWindowResize.md) and [useWindowScroll](./useWindowScroll.md).

### Why? 💡

- takes care of adding the listener for the window resize event.
- takes care of removing the listener when the component will unmount

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import useViewportState from 'beautiful-react-hooks/useViewportState';

const WindowSizeReporter = () => {
  const { width, height, scrollX, scrollY } = useViewportState();

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
      <p>window scrollX: {scrollX}</p>
      <p>window scrollY: {scrollY}</p>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of reading common information about the current viewport
