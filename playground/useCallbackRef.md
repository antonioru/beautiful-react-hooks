```jsx 
import { useEffect } from 'react';
import { useCallbackRef } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const [callbackRef, setCallback] = useCallbackRef(); 
   
   setCallback(() => console.log('Callback performed'));
   
   useEffect(callbackRef.current, []);
   
   return (
     <p>
       useCallbackRef test
     </p>
   );
}

<TestComponent />
```
