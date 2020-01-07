# usePrev

Accepts a variable (*possibly a prop or a state*) and returns its previous render's value.

### Why? 💡

- You want to keep track of the changes of your component state/props to decide whether it should update or not

### Basic Usage:

```jsx harmony
import { useState } from 'react'; 
import { useInterval, usePrev } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const [seconds, setSeconds] = useState(0);
   const prevSeconds = usePrev(seconds);
   
   useInterval(() => setSeconds(1 + seconds), 1000);
   
   return (
     <DisplayDemo>
       <p>{seconds}s</p>
       <p>The previous value of the state 'seconds' was: {prevSeconds}</p>
     </DisplayDemo>
   );
};

<TestComponent />
```
