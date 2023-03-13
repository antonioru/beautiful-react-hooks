# useLifecycle

A hook that facilitates performing specific functions during the lifecycle of a component.

It accepts two functions as arguments. The first function will be executed after the component has mounted, which means that the component
has been initialized and rendered on the screen. The second function will be executed right before the component unmounts, which happens
when the component is removed from the screen or destroyed.

Using this hook allows for greater control and customization of a component's behavior.

### Why? 💡

- Provides a wrapper for "lifecycle hooks" including `useDidMount` and `useWillUnmount`.
- Serves as a shorthand for `useEffect(onMount, [])` and `useEffect(() => () => willUnmount, [])`.

### Basic Usage:

```jsx harmony
import { useCallback } from 'react';
import { Alert } from 'antd';
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
    <DisplayDemo title="useLifecycle">
      <Alert icon message="Please check the javascript console to read mount/unmount messages" />
    </DisplayDemo>
  );
};

<LifeCycleComponent />
```

### Callback setter syntax:

If you don't provide any parameters, you can use the returned callback setters to set the `useDidMount` and `useWillUnmount` handlers.
However, you must immediately invoke them to make it work.

**Note**: It's important to keep in mind that the callback setters are intended to modify the value of the callback reference only. They do
not cause the component to rerender, and you should not invoke them asynchronously. This ensures that the behavior of your code remains
predictable and that your project runs smoothly.

```jsx harmony
import { Alert } from 'antd';
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
    <DisplayDemo title="useLifecycle">
      <Alert icon message="Please check the javascript console to read mount/unmount messages" />
    </DisplayDemo>
  );
};

<ComponentDidMount />
```

#### ✅ Pro tip:

When using a React function component you should not really think of it in terms of "lifecycle".

To deep understanding `useEffect`, what it is and how it should be properly used, please read
"[A complete guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)"
by [Dan Abramov](https://twitter.com/dan_abramov)

### Mastering the hook

#### ✅ When to use

- When you need to execute a function after the component has mounted
- When you need to execute a function immediately before the component unmounts
- When you require a shortcut to the component lifecycle

#### 🛑 When not to use

- If you need to use it asynchronously, as this violates the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
- If you're using the callback setters, you must not use them asynchronously, but instead, immediately invoke them.

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
/**
 * Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
 * It is intended as a shortcut to those hooks.
 */
declare const useLifecycle: <TMount extends GenericFunction = GenericFunction, TUnmount extends GenericFunction = GenericFunction>(mount?: TMount | undefined, unmount?: TUnmount | undefined) => {
    onDidMount: import("./shared/types").CallbackSetter<undefined>;
    onWillUnmount: import("./shared/types").CallbackSetter<undefined>;
};
export default useLifecycle;

```
<!-- Types:end -->