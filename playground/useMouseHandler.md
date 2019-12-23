### Targeting a ref

```jsx harmony
import { useRef, useState } from 'react';
import { useMouseHandler } from 'beautiful-react-hooks'; 

// for demo purposes
const style = {
  padding: '20px',
  width: '350px',
  background: '#F8BDC4',
  textAlign: 'center',
};

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState();
  const ref = useRef();
  const { onMouseMove, onMouseLeave } = useMouseHandler(ref);

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  onMouseLeave(() => {
    setCoordinates(undefined);
  });

  return (
    <div ref={ref} style={style}>
      Mouse over me!
      {coordinates && <p>Coordinates x:{coordinates[0]} y:{coordinates[1]}</p>}
    </div>
  );
}

<MyComponent />
```

### Global listener 

```jsx harmony
import { useState } from 'react';
import { useMouseHandler } from 'beautiful-react-hooks'; 

// for demo purposes
const style = {
  padding: '20px',
  width: '350px',
  background: '#C8D5B9',
  textAlign: 'center',
};

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseHandler();

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <div style={style}>
      The current mouse coordinates are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </div>
  );
}

<MyComponent />
```
