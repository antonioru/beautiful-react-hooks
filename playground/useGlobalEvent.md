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
import { useState } from 'react';
import { useGlobalEvent } from 'beautiful-react-hooks'; 

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent('resize');
  
  onWindowResize(() => {
    setWindowWidth(window.innerWidth);
  });
  
   return (
     <div style={compStyle}>
       Current window width: {windowWidth}
     </div>
   );
}

<TestComponent />
```
