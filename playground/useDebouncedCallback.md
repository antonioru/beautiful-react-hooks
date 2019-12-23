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


```jsx 
import { useState } from 'react'; 
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   const onWindowResize = useWindowResize(); 
   
   onWindowResize(useDebouncedCallback(() => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
   }, 500));
      
   return (
     <div style={compStyle}>
       <p>window width: {width}</p>
       <p>window height: {height}</p>
     </div>
   );
}

<TestComponent />
```
