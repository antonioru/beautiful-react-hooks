<a name="useOnMount"></a>

## useOnMount()
Returns a function that accepts a callback to be performed when the component did mount.

### Usage:

```jsx harmony
const MyComponent = () => {
  const onMount = useOnMount();

  onMount(() => console.log('Component did mount'));

  return (<div />)
}
```

**Kind**: global function  
