<a name="useLifecycle"></a>

## useLifecycle()
Returns an object wrapping lifecycle hooks such as `useOnMount` or `useWillUnmount`.
It is to be intended as a shortcut to those hooks.

Usage:

```jsx harmony
const MyComponent = () => {
  const { onMount, onUnmount } = useLifecycle();

  onUnmount(() => console.log('Component will mount'));
  onUnmount(() => console.log('Component will unmount'));

  return (<div />)
}
```

**Kind**: global function  
