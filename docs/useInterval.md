# useInterval

A hook that facilitates the utilization of the `setInterval` function in React function components. This hook receives a callback function
and a delay duration as inputs, and subsequently, executes the given function at regular intervals with the specified delay time between
each invocation

### Why? 💡

- Ensures that the given callback is executed reliably, even when the component re-renders;
- Automatically cancels the interval when the component unmounts (although this behavior can be modified by adjusting the options);
- Provides information about the current state of the interval (whether it has been cleared or not);
- Offers a method to cancel the set interval, which can trigger a re-render of the component if desired.

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Tag, Typography } from 'antd';

import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);

  // repeat the function each 1000ms
  useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo title="useInterval">
      <Typography.Text>Rendering since <Tag color="green">{seconds}</Tag>seconds</Typography.Text>
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### State & clear method:

The hook returns information about the timeout's state (whether it has been cleared or not, represented by a boolean flag), and also offers
a method to potentially clear it.

**Note**: Invoking this method to programmatically clear the timeout may trigger the component re-rendering.

```jsx harmony
import { useState } from 'react';
import { Tag, Typography, Button } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCleared, clearInterval] = useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo>
      <Typography.Paragraph>Rendering since <Tag color="green">{seconds}</Tag>seconds</Typography.Paragraph>
      {!isCleared && <Button onClick={clearInterval} type="primary">Stop the counter</Button>}
      {isCleared && <Typography.Paragraph mark>Interval cleared!</Typography.Paragraph>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Options:

It is possible to provide an options object as the last parameter of the hook.

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Tag, Typography, Button } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';

const DelayedContentComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const options = { cancelOnUnmount: false };

  useInterval(() => setSeconds(1 + seconds), 1000, options);

  return (
    <DisplayDemo>
      <Typography.Paragraph>Rendering since <Tag color="green">{seconds}</Tag>seconds</Typography.Paragraph>
      <Typography.Paragraph mark>It won't be cleared at unmount</Typography.Paragraph>
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Mastering the hook

#### ✅ When to use

- When you need to perform a function on a regular interval (e.g., every x number of milliseconds), regardless of whether the component
  re-renders.

#### 🛑 When not to use

- When attempting to use it asynchronously, since doing so would violate the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
export interface UseIntervalOptions {
    cancelOnUnmount?: boolean;
}
/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then repeats the
 * execution of the given function by the defined milliseconds.
 */
declare const useInterval: <TCallback extends GenericFunction>(fn: TCallback, milliseconds: number, options?: UseIntervalOptions) => [boolean, () => void];
export default useInterval;

```
<!-- Types:end -->