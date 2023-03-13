# useDidMount

A hook that takes in a function to execute when the component has finished mounting.

### Why? 💡

- takes care of performing a callback when the component mounts
- Is intended as a shortcut to `useEffect(onMount, [])`

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography } from 'antd';
import useDidMount from 'beautiful-react-hooks/useDidMount';

const ComponentDidMount = () => {
  const [mounted, setIsMounted] = useState(false);

  useDidMount(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      clearTimeout(timeout);
    }, 1000);
  });

  return (
    <DisplayDemo title="useDidMount">
      {mounted && (<Typography.Paragraph>Component did mount!</Typography.Paragraph>)}
    </DisplayDemo>
  );
};

<ComponentDidMount />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a callback setter*) can be used to set the `useDidMount` handler, as long as
it is immediately invoked.

**Please note**: the returned callback setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { Typography } from 'antd';
import useDidMount from 'beautiful-react-hooks/useDidMount';

const ComponentDidMount = () => {
  const [mounted, setIsMounted] = useState(false);
  const onMount = useDidMount();

  onMount(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true);
      clearTimeout(timeout);
    }, 1000);
  });

  return (
    <DisplayDemo title="useDidMount">
      {mounted && (<Typography.Paragraph>Component did mount!</Typography.Paragraph>)}
    </DisplayDemo>
  );
};

<ComponentDidMount />
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

The `useDidMount` hook is indeed intended as a shortcut to  `useEffect(onMount, [])`.

To deep understanding `useEffect`, what it is and how it should be properly used, please read
"[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Mastering the hook

#### ✅ When to use

- When in need of performing a function after the component mounts

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If using the callback setter, it should not be used asynchronously but immediately invoked

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction, type Noop } from './shared/types';
/**
 * Returns a callback setter for a function to be performed when the component did mount.
 */
declare const useDidMount: <TCallback extends GenericFunction = Noop>(callback?: TCallback | undefined) => import("./shared/types").CallbackSetter<undefined>;
export default useDidMount;

```
<!-- Types:end -->