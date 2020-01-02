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
import { useDidMount } from 'beautiful-react-hooks'; 

/**
* useDidMount example component
*/
const TestComponent = () => {
   const [mounted, setIsMounted] = useState(false);
   const onMount = useDidMount(); 
   
   onMount(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
   });
      
   return (
     <div style={compStyle}>
       {mounted && (
        <p>
          Component did mount!
        </p>
       )}
     </div>
   );
}

<TestComponent />
```
