```jsx 
import { useWindowResize } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const onWindowResize = useWindowResize(); 
   
   onWindowResize(() => console.log('window is resizing...'));
      
   return (
     <p>
       onWindowResize test
     </p>
   );
}

<TestComponent />
```
