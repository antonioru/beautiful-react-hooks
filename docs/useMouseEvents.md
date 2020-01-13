# useMouseEvents 

Returns an object of handler setters to handle the mouse events.
It accepts a DOM ref representing the events target (where attach the events to).

If a target is not provided the events will be globally attached to the `document` object.

Returned handler setters: `onMouseDown`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOut`, `onMouseOver`, `onMouseUp`;

**Please note:** the returned handler setters should invoked immediately in the function component's body, do not try to
call this functions asynchronously.

### Why? 💡

- takes care of adding the mouse events listeners globally or to the defined target
- takes care of cleaning the listener when the component will unmount
- allow to perform abstractions on mouse related events

### Basic Usage:

Provide a DOM ref as first parameter to `useMouseEvents`

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
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates.
        {coordinates && <p>Coordinates x:{coordinates[0]} y:{coordinates[1]}</p>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Global events

Avoid providing any argument to `useMouseEvents`

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
    <DisplayDemo>
      The current mouse coordinates are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use
 
- If in need to abstract some mouse related logic into a custom hooks

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler 
 possibly leading to bugs in your code.
- Absolutely avoid using `useMouseEvents` handler setters to replace the standard mouse handler props. 
-  `useMouseEvents` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useMouseEvents` handlers instead of the classic props approach it's just as bad as it sounds since you'll
lose the React SyntheticEvent performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { mouseDownHandler } = props;
    
  return (
    <div onMouseDown={mouseDownHandler} />
  );
};
``` 
