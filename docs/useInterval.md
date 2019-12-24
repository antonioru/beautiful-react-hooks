<a name="useInterval"></a>

## useInterval()
Returns a setter function that accepts a callback to be performed every 'x' milliseconds.

### Usage:

```jsx harmony
const TestComponent = () => {
  const [show2sec, setShow2Sec] = useState();
  const [show5sec, setShow5Sec] = useState();
  const after2Second = useTimeout(2000);
  const after5Seconds = useTimeout(5000);

  after2Second(() => {
    setShow2Sec(true);
  });

  after5Seconds(() => {
    setShow5Sec(true);
  });

  return (
    <div>
      <p>Content delay...</p>
      {show2sec && <p>Shown after 2 seconds...</p>}
      {show5sec && <p>Shown after 5 seconds.</p>}
    </div>
  );
};
```

**Kind**: global function  
