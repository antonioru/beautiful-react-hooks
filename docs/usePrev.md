<a name="usePrev"></a>

## usePrev()
On each render returns the previous value of the given variable/constant.

### Usage:

```js harmony
const TestComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const prevSeconds = usePrev(seconds);
  const everySecond = useInterval(1000);

  everySecond(() => {
    setSeconds(1 + seconds);
  });

  return (
    <div style={compStyle}>
      <p>{seconds}s</p>
      <p>Prev value: {prevSeconds}</p>
    </div>
  );
};
```

**Kind**: global function  
