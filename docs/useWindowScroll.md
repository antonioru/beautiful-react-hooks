# useWindowScroll

A hook that receives a callback function to execute on the window's scroll event.

It's built on top of [useGlobalEvent](./useGlobalEvent.md).

### Why? 💡

- Simplifies the process of adding a listener for a specific event to the `window` object.
- Automates the removal of the listener when the component is unmounted.

### Basic usage:

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onWindowScroll = useWindowScroll();

  onWindowScroll((event) => {
    setScrollY(window.scrollY);
  });

  return (
    <DisplayDemo>
      <Typography.Paragraph>
        current window vertical scroll: <Tag color="green">{scrollY}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<WindowScrollReporter />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a callback setter*) can be used to set the `useWindowScroll` handler, as
long as it is immediately invoked.

**Please note**: the returned callback setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onScroll = useWindowScroll();

  onScroll(() => {
    setScrollY(window.scrollY);
  });

  return (
    <DisplayDemo>
      <Typography.Paragraph>
        current window vertical scroll: <Tag color="green">{scrollY}</Tag>
      </Typography.Paragraph>
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
import { Typography, Tag } from 'antd';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback'
import useWindowScroll from 'beautiful-react-hooks/useWindowScroll';

const WindowScrollReporter = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const onWindowScroll = useWindowScroll();

  onWindowScroll(useThrottledCallback((event) => {
    setScrollY(window.scrollY);
  }));

  return (
    <DisplayDemo>
      <Typography.Paragraph>
        current window vertical scroll: <Tag color="green">{scrollY}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<WindowScrollReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of performing a function during the window scroll, for example: to keep track of the window scroll position

#### 🛑 When not to use

- Avoid using this hook asynchronously since it would violate the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If you're using the callback setter, make sure to invoke it immediately instead of asynchronously

<!-- Types -->
### Types
    
```typescript static
/**
 * Returns a function that accepts a callback to be performed when the window scrolls.
 */
declare const useWindowScroll: () => import("./shared/types").CallbackSetter<UIEvent>;
export default useWindowScroll;

```
<!-- Types:end -->