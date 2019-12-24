<a name="useTimeout"></a>

## useTimeout()
Returns a setter function that accepts a callback to be performed after the given delay.

### Usage:

```jsx harmony
const useTimeCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [ms, setMilliseconds] = useState(0);
  const everySecond = useInterval(1000);
  const everyMillisecond = useInterval(100);

  everySecond(() => {
    setSeconds(1 + seconds);
  }, [seconds]);

  everyMillisecond(() => {
    setMilliseconds(1 + ms);
  });

  return {seconds, ms};
}
```

**Kind**: global function  
