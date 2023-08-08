# useUnmount

A hook that takes in a function to execute right when the component unmounts.

### Why? 💡

- takes care of performing a callback when the component unmounts

### Basic Usage:

```jsx harmony
import { Typography } from 'antd';
import useUnmount from 'beautiful-react-hooks/useUnmount';

const ComponentUnmount = () => {
  useUnmount(() => {
    console.log('Component did unmount');
  });

  return (
    <DisplayDemo title="useUnmount">
      <Typography.Paragraph>Check the javascript console complete moving from this page</Typography.Paragraph>
    </DisplayDemo>
  );
};

<ComponentUnmount />;
```

### Callback setter syntax:

If the first parameter is omitted, you can use the returned function (a callback setter) to set the useWillUnmount handler. However, you
must immediately invoke the callback setter.

Important: The callback setter only changes the value of the callback reference and does not trigger a component rerender. Also, avoid
invoking it asynchronously

```jsx harmony
import { Typography } from 'antd';
import useUnmount from 'beautiful-react-hooks/useUnmount';

const ComponentUnmount = () => {
  const onUnmount = useUnmount();

  onUnmount(() => {
    console.log('Component did unmount');
  });

  return (
    <DisplayDemo title="useUnmount">
      <Typography.Paragraph>
        Check the javascript console complete moving from this page
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<ComponentUnmount />;
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

The `useUnmount` hook is indeed intended as a shortcut to `useEffect(() => () => Unmount, [])`.

To deep understanding `useEffect`, what it is and how it should be properly used, please read
"[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Mastering the hook

#### ✅ When to use

- When you need to perform a function after the component has mounted

#### 🛑 When not to use

- Avoid using this hook asynchronously since it would violate the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If you're using the callback setter, make sure to invoke it immediately instead of asynchronously

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
/**
 * Returns a callback setter for a callback to be performed when the component did unmount.
 */
declare const useUnmount: <TCallback extends GenericFunction>(callback?: TCallback | undefined) => import("./shared/types").CallbackSetter<undefined>;
export default useUnmount;

```

<!-- Types:end -->
