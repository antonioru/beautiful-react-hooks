```jsx noeditor
// for demo purposes only
const style = window.compStyle = {
  background: '#FDFEFD',
  width: '250px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(20, 20, 20, .1)',
  margin: '10px auto',
};
```

```jsx harmony
import { useState } from 'react'; 
import { useInterval } from 'beautiful-react-hooks'; 


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

const TestComponent = () => {
   const {seconds, ms} = useTimeCounter();
  
   return (
     <div style={compStyle}>
       <p>{seconds}s</p>
       <p>{ms}ms</p>
     </div>
   );
}

<TestComponent />
```
