<a name="useDidMount"></a>

## useDidMount()
Returns a callback setter for a callback to be performed when the component did mount.

### Usage:

```jsx harmony
const MyComponent = () => {
  const onDidMount = useDidMount();

  onDidMount(() => console.log('Component did mount'));

  return (<div />)
}
```

**Kind**: global function  
