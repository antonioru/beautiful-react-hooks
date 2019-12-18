```jsx 
import { useWillUnmount } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const onUnmount = useWillUnmount(); 
   
   onUnmount(() => console.log('Callback performed on unmount'));
      
   return (
     <p>
       useWillUnmount test
     </p>
   );
}

<TestComponent />
```
