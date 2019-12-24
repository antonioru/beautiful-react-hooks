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
import { useTimeout } from 'beautiful-react-hooks'; 

const TestComponent = () => {
   const [show2sec, setShow2Sec] = useState();
   const [show5sec, setShow5Sec] = useState();
   const after2Second = useTimeout(2000);
   const after5Seconds = useTimeout(5000);
   
   after2Second(() => {
     setShow2Sec(true);
   });
      
   after5Seconds(() => {
     setShow5Sec(true);
   });
   
   return (
     <div style={compStyle}>
       <p>Content delay...</p>
       {show2sec && <p>Shown after 2 seconds...</p>}
       {show5sec && <p>Shown after 5 seconds.</p>}
     </div>
   );
}

<TestComponent />
```
