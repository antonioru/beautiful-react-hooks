```jsx 
import { useLifecycle } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const { onMount, onUnmount } = useLifecycle(); 
   
   onMount(() => console.log('Callback performed on mount'));
   onUnmount(() => console.log('Callback performed on unmount'));

   return (
     <p>
       useLifecycle test
     </p>
   );
}

<TestComponent />
```
