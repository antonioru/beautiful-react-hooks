# useWindowResize

A hook that receives a callback function to execute on the window's resize event.

It's built on top of [useGlobalEvent](./useGlobalEvent.md).

### Why? 💡

- Simplifies the process of adding a listener for a specific event to the `window` object.
- Automates the removal of the listener when the component is unmounted.

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useWindowResize((event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo title="useWindowResize">
      <Typography.Paragraph>
        current window width: <Tag color="green">{width}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        current window height: <Tag color="green">{height}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a callback setter*) can be used to set the `useWindowResize` handler, as
long as it is immediately invoked.

**Please note**: the returned callback setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  return (
    <DisplayDemo title="useWindowResize">
      <Typography.Paragraph>
        current window width: <Tag color="green">{width}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        current window height: <Tag color="green">{height}</Tag>
      </Typography.Paragraph>
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
import { Typography, Tag } from 'antd';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const WindowSizeReporter = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(useThrottledCallback((event) => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }));

  return (
    <DisplayDemo title="useWindowResize">
      <Typography.Paragraph>
        current window width: <Tag color="green">{width}</Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        current window height: <Tag color="green">{height}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of performing a function during the window resize, for example: to keep track of the window size

#### 🛑 When not to use

- Avoid using this hook asynchronously since it would violate the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If you're using the callback setter, make sure to invoke it immediately instead of asynchronously

<!-- Types -->
### Types
    
```typescript static
/**
 * Returns a function that accepts a callback to be performed when the window resize.
 */
declare const useWindowResize: () => import("./shared/types").CallbackSetter<UIEvent>;
export default useWindowResize;

```
<!-- Types:end -->