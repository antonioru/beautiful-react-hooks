# useWillUnmount

A hook that takes in a function to execute right before the component unmounts.

### Why? 💡

- takes care of performing a callback before the component unmounts

### Basic Usage:

```jsx harmony
import { Typography } from 'antd';
import useWillUnmount from 'beautiful-react-hooks/useWillUnmount';

const ComponentWillUnmount = () => {
  useWillUnmount(() => {
    console.log('Component will unmount');
  });

  return (
    <DisplayDemo title="useWillUnmount">
      <Typography.Paragraph>Check the javascript console after moving from this page</Typography.Paragraph>
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

### Callback setter syntax:

If the first parameter is omitted, you can use the returned function (a callback setter) to set the useWillUnmount handler. However, you
must immediately invoke the callback setter.

Important: The callback setter only changes the value of the callback reference and does not trigger a component rerender. Also, avoid
invoking it asynchronously

```jsx harmony
import { Typography } from 'antd';
import useWillUnmount from 'beautiful-react-hooks/useWillUnmount';

const ComponentWillUnmount = () => {
  const onUnmount = useWillUnmount();

  onUnmount(() => {
    console.log('Component will unmount');
  });

  return (
    <DisplayDemo title="useWillUnmount">
      <Typography.Paragraph>Check the javascript console after moving from this page</Typography.Paragraph>
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

The `useWillUnmount` hook is indeed intended as a shortcut to `useLayoutEffect(() => () => willUnmount, [])`.

To deep understanding `useLayoutEffect`, what it is and how it should be properly used, please read
"[A complete guide to useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)"
by React Team

### Mastering the hook

#### ✅ When to use

- When you need to perform a function before the component has mounted

#### 🛑 When not to use

- Avoid using this hook asynchronously since it would violate the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If you're using the callback setter, make sure to invoke it immediately instead of asynchronously

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
/**
 * Returns a callback setter for a callback to be performed when the component will unmount.
 */
declare const useWillUnmount: <TCallback extends GenericFunction>(callback?: TCallback | undefined) => import("./shared/types").CallbackSetter<undefined>;
export default useWillUnmount;

```
<!-- Types:end -->