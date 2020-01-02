<a name="useLifecycle"></a>

## useLifecycle()
Returns an object wrapping lifecycle hooks such as `useDidMount` or `useWillUnmount`.
It is intended as a shortcut to those hooks.

### Usage:

```jsx harmony
const MyComponent = () => {
  const { onDidMount, onWillUnmount } = useLifecycle();

  onDidMount(() => console.log('Component did mount'));
  onWillUnmount(() => console.log('Component will unmount'));

  return (<div />)
}
```

**Kind**: global function  
