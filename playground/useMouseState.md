```jsx harmony
import { useRef } from 'react';
import { useMouseState } from 'beautiful-react-hooks'; 

// for demo purposes
const style = {
  padding: '20px',
  width: '350px',
  background: '#C8D5B9',
  textAlign: 'center',
};

const MouseReporter = () => {
  const ref = useRef();
  const mouseState = useMouseState(ref); 
  
  return (
   <div ref={ref} style={style}>
     Mouse over me to get the mouse position:
     {mouseState.pageX}, {mouseState.pageY}
   </div>
  );
}

<MouseReporter />
```
