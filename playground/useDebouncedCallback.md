```jsx 
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const onWindowResize = useWindowResize(); 
   
   const resizeHandler = useDebouncedCallback(() => {
    console.log('window is resizing...');
   });
   
   onWindowResize(resizeHandler);
      
   return (
     <p>
       useDebouncedCallback test
     </p>
   );
}

<TestComponent />
```
