<a name="useDebouncedCallback"></a>

## useDebouncedCallback()
Accepts a function and returns a new debounced yet memoized version of that same function that delays
its invoking by the defined time.<br />
If time is not defined, its default value will be 250ms.

### Usage:

```jsx harmony

const TestComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 250));

  return (
    <div style={compStyle}>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
   </div>
  );
```

### Debounce time:

It is possible to change the debounce time by defining how many ms to wait:

```jsx harmony
const useDebouncedBy250 = (fn) => useDebouncedCallback(fn, 250);
```

### Dependencies:

Since `useDebouncedCallback` uses `useCallback` under the hood, it is also possible to define its dependencies:

```jsx harmony
const TestComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  onWindowResize(useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, 250, [props.foo, props.bar]));

  return (
    <div style={compStyle}>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
   </div>
  );
```

**Kind**: global function  
