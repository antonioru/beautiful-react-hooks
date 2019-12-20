```jsx 
import { useOnMount } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const onMount = useOnMount(); 
   
   onMount(() => console.log('Callback performed on mount'));
      
   return (
     <p>
       useOnMount test
     </p>
   );
}

<TestComponent />
```
