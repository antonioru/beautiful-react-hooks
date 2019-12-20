<a name="useWindowResize"></a>

## useWindowResize()
Returns a function that accepts a callback to be performed when the window resizes.
Please note: the callback is not debounced, to improve performances check `useDebouncedCallback`;

Usage:

```jsx harmony
const MyComponent = () => {
  const onWindowResize = useWindowResize();

  onWindowResize(() => console.log('Window is resizing...'));

  return (<div />)
}
```

**Kind**: global function  
