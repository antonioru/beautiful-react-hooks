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
import { useLifecycle } from 'beautiful-react-hooks'; 

/**
* useDidMount example component
*/
const TestComponent = () => {
   const [mounted, setIsMounted] = useState(false);
   const { onDidMount, onWillUnmount } = useLifecycle(); 
   
   onDidMount(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
   });
      
   onWillUnmount(() => {
     alert('Component unmounted!')
   });
   
   return (
     <div style={compStyle}>
       {mounted && (
        <p>
          Component did mount, change page to show an alert!
        </p>
       )}
     </div>
   );
};

<TestComponent />
```
