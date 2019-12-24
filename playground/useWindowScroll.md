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
import { useWindowScroll } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const [scrollY, setScrollY] = useState(window.scrollY);
   const onWindowScroll = useWindowScroll(); 
   
   onWindowScroll(() => {
     setScrollY(window.scrollY);
   });
      
   return (
     <div style={{...compStyle, height: '250px'}}>
       <p>window scroll: {scrollY}</p>
     </div>
   );
}

<TestComponent />
```
