<a name="useThrottledCallback"></a>

## useThrottledCallback()
Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
before allowing the next execution.<br />
If time is not defined, its default value will be 100ms.

### Usage:

```jsx harmony
const MyComponent = () => {
  const throttledClick = useThrottledCallback(() => {
    console.log('Button clicked...');
  });
*
  return (<button onClick={throttledClick}>Click me</button>)
}
```

### Throttle time:

It is possible to change the throttle time by defining how many ms to wait:

```jsx harmony
const MyComponent = () => {
  const throttledClick = useThrottledCallback(() => {
    console.log('Button clicked...');
  }, 250);

  return (<button onClick={throttledClick}>Click me</button>)
}
```

### Dependencies:

Since `useThrottledCallback` uses `useCallback` under the hood, it is also possible to define its dependencies:

```jsx harmony
const MyComponent = (props) => {
  const throttledClick = useThrottledCallback(() => {
    console.log('Button clicked...');
  }, 250, [props.foo]);

  return (<button onClick={debouncedClick}>Click me</button>)
}
```

**Kind**: global function  
