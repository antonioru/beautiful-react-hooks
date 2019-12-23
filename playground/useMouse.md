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
import { useRef, useState } from 'react';
import { useMouse } from 'beautiful-react-hooks'; 

const MouseReporter = () => {
  const ref = useRef();
  const [ showCoords, setShowCoords] = useState(false);
  const [mouseState, { onMouseEnter, onMouseLeave }] = useMouse(ref); 
  
  onMouseEnter(() => setShowCoords(true));
  onMouseLeave(() => setShowCoords(false));
  
  return (
   <div ref={ref} style={compStyle}>
     Move mouse over me to get its current coordinates:
     {showCoords && (
       <p>{mouseState.clientX}, {mouseState.clientY}</p>
     )}
   </div>
  );
}

<MouseReporter />
```
