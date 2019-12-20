<a name="useWillUnmount"></a>

## useWillUnmount()
Returns a function that accepts a callback to be performed when the component will unmount.

Usage:

```jsx harmony
const MyComponent = () => {
  const onUnmount = useWillUnmount();

  onUnmount(() => console.log('Component will unmount'));

  return (<div />)
}
```

**Kind**: global function  
