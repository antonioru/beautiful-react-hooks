```jsx 
import { useState } from 'react';
import { useCallbackRef } from 'beautiful-react-hooks'; 

// using useCallbackRef to create a custom hook
const useClock = () => {
  const [callbackRef, setCallback] = useCallbackRef(); 

  setTimeout(() => {
    if(callbackRef.current) {
      callbackRef.current();
    }
  }, 1000);
  
  return setCallback; 
};

const ClockComponent = () => {
   const [current, setCurrent] = useState(0);
   const onTick = useClock(); 
   
   onTick(() => setCurrent(1 + current));
      
   return (
     <time>
       Ticking: {current}
     </time>
   );
}

<ClockComponent />
```
