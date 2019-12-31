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
import { useRef, useState } from 'react';
import { useMouseEvents } from 'beautiful-react-hooks'; 

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState();
  const ref = useRef();
  const { onMouseMove, onMouseLeave } = useMouseEvents(ref);

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  onMouseLeave(() => {
    setCoordinates(undefined);
  });

  return (
    <div ref={ref} style={compStyle}>
      Move mouse over me to get its current coordinates.
      {coordinates && <p>Coordinates x:{coordinates[0]} y:{coordinates[1]}</p>}
    </div>
  );
}

<MyComponent />
```

### Global the global document (no ref) 

```jsx harmony
import { useState } from 'react';
import { useMouseEvents } from 'beautiful-react-hooks'; 

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseEvents();

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <div style={compStyle}>
      The current mouse coordinates are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </div>
  );
}

<MyComponent />
```
