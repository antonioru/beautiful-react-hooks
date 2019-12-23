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

### Targeting an element ref

```jsx harmony
import { useRef } from 'react';
import { useMouseState } from 'beautiful-react-hooks'; 

const MouseReporter = () => {
  const ref = useRef();
  const mouseState = useMouseState(ref); 
  
  return (
   <div ref={ref} style={compStyle}>
     Move mouse over me to get its current coordinates:
     {mouseState.clientX}, {mouseState.clientY}
   </div>
  );
}

<MouseReporter />
```

### Global the global document (no ref) 

```jsx harmony
import { useMouseState } from 'beautiful-react-hooks'; 

const MouseReporter = () => {
  const mouseState = useMouseState(); 
  
  return (
   <div style={compStyle}>
     The current mouse coordinates are:
     {mouseState.clientX}, {mouseState.clientY}
   </div>
  );
}

<MouseReporter />
```
