# useTimeout

A hook that facilitates the utilization of the `setTimeout` function in React function components. This hook receives a callback function
and a delay duration as inputs, and subsequently, executes the given function at after the specified delay time.

### 💡 Why?

- Ensures that the given callback is executed reliably, even when the component re-renders;
- Automatically cancels the timeout when the component unmounts (although this behavior can be modified by adjusting the options);
- Provides information about the current state of the timeout (whether it has been cleared or not);
- Offers a method to cancel the timeout, which can trigger a re-render of the component if desired.

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography } from 'antd'
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);

  // delay the function by 2000ms
  useTimeout(() => {
    setShowContent(true);
  }, 2000);

  return (
    <DisplayDemo title="useTimeout">
      <Typography.Paragraph>Content will show in 2 seconds...</Typography.Paragraph>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
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
import { Typography, Button } from 'antd'
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const [isCleared, clearTimeoutRef] = useTimeout(() => {
    setShowContent(true);
  }, 5000);

  return (
    <DisplayDemo title="useTimeout">
      <Typography.Paragraph>Content will show in 5 seconds...</Typography.Paragraph>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
      {!isCleared && <Button type="primary" onClick={clearTimeoutRef}>Press here to cancel timeout</Button>}
      {isCleared && <Typography.Paragraph>Cleared</Typography.Paragraph>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Options:

`useTimeout` might accept an options object provided as eventual parameter.

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Typography } from 'antd';
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const options = { cancelOnUnmount: false };

  useTimeout(() => setShowContent(true), 3000, options);

  return (
    <DisplayDemo title="useTimeout">
      <Typography.Paragraph>Content will show in 3 seconds but not be cleared on unmount</Typography.Paragraph>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Mastering the hook

#### ✅ When to use

- when there is a requirement to execute a function after a specific number of milliseconds, without being affected by component re-renders

#### 🛑 When not to use

- Avoid using this hook for asynchronous operations since it violates the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
export interface UseTimeoutOptions {
    cancelOnUnmount?: boolean;
}
/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time.
 */
declare const useTimeout: <TCallback extends GenericFunction>(fn: TCallback, milliseconds: number, options?: UseTimeoutOptions) => [boolean, () => void];
export default useTimeout;

```
<!-- Types:end -->