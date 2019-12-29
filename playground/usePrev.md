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
import { useInterval, usePrev } from 'beautiful-react-hooks'; 

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
}

<TestComponent />
```
