# useWillUnmount

Accepts a function to be performed right before the component unmounts.

### Why? 💡

- takes care of performing a callback right before the component unmounts
- It's as a shortcut to `useEffect(() => () => willUnmount, [])`;

### Basic Usage:

```jsx harmony
import useWillUnmount from 'beautiful-react-hooks/useWillUnmount';

const ComponentWillUnmount = () => {
  useWillUnmount(() => {
    console.log('Component did unmount');
  });

  return (
    <DisplayDemo>
      Check the javascript console after moving from this page
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

### Callback setter syntax:

if the first parameter is not provided, the returned function (*a handler setter*) can be used to set the `useWillUnmount` handler, as long
as it is immediately invoked.

**Please note**: the returned handler setter is meant to change the value of the callback reference only, it does not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import useWillUnmount from 'beautiful-react-hooks/useWillUnmount';

const ComponentWillUnmount = () => {
  const onUnmount = useWillUnmount();

  onUnmount(() => {
    console.log('Component did unmount');
  });

  return (
    <DisplayDemo>
      Check the javascript console after moving from this page
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

The `useWillUnmount` hook is indeed intended as a shortcut to  `useEffect(() => () => willUnmount, [])`.

To deep understanding `useEffect`, what it is and how it should be properly used, please read
"[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Mastering the hook

#### ✅ When to use

- When in need of performing a function after the component did mount

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If using the handler setter, it should not be used asynchronously but immediately invoked
