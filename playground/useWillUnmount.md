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
import { useWillUnmount } from 'beautiful-react-hooks'; 

/**
* useWillUnmount example component
*/
const TestComponent = () => {
   const onUnmount = useWillUnmount(); 
   
   onUnmount(() => {
     alert('Component unmounted');
   });
      
   return (
     <div style={compStyle}>
       Change page to show an alert
     </div>
   );
}

<TestComponent />
```
