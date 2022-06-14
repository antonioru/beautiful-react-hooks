# useLifecycle

Accepts two functions to be performed during the component's lifecycle.

The first one will be fired after **component did mount**, the second right before the **component unmounts**.

### Why? 💡

- Encloses the "lifecycle hooks" such as `useDidMount` and `useWillUnmount`;
- It's as a shortcut to `useEffect(onMount, [])` and `useEffect(() => () => willUnmount, [])`;

### Basic Usage:

```jsx harmony
import { useCallback } from 'react';
import useLifecycle from 'beautiful-react-hooks/useLifecycle';

/**
 * useDidMount example component
 */
const LifeCycleComponent = () => {
  const onMount = useCallback(() => {
    console.log('Component did mount');
  }, []);

  const onUnmount = useCallback(() => {
    console.log('Component will unmount');
  }, []);

  useLifecycle(onMount, onUnmount);

  return (
    <DisplayDemo>
      Check the javascript console
    </DisplayDemo>
  );
};

<LifeCycleComponent />
```

### Callback setter syntax:

if no parameters are provided, the returned object of handler setters can be used to set the `useDidMount` and `useWillUnmount` handlers, as
long as they are immediately invoked.

**Please note**: the returned handler setters are meant to change the value of the callback reference only, they do not cause the component
rerender nor should not be invoked asynchronously.

```jsx harmony
import useLifecycle from 'beautiful-react-hooks/useLifecycle';

const ComponentDidMount = () => {
  const { onDidMount, onWillUnmount } = useLifecycle();

  onDidMount(() => {
    console.log('Component did mount');
  });

  onWillUnmount(() => {
    console.log('Component will unmount');
  });

  return (
    <DisplayDemo>
      Check the javascript console
    </DisplayDemo>
  );
};

<ComponentDidMount />
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

The `useLifecycle` hook is indeed intended as a shortcut to  `useEffect(onMount, [])` and
`useEffect(() => () => willUnmount, [])`.

To deep understanding `useEffect`, what it is and how it should be properly used, please read
"[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Mastering the hook

#### ✅ When to use

- When in need of performing a function after the component did mount
- When in need of performing a function right before the component unmounts
- When in need of a shortcut to the component lifecycle

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If using the handler setters, they should not be used asynchronously but immediately invoked.
