# useMouse

Returns an array where the first item is the mouse state from [useMouseState](./useMouseState.md) and the second item is an wrapper of all
the handler-setters from [useMouseEvents](./useMouseEvents.md).

`useMouse` is in fact intended as a shortcut to those hooks.

### Why? 💡

- allow to easily receive the mouse position
- takes care of adding the mouse events listeners globally or to the defined target
- takes care of cleaning the listener when the component will unmount
- allows performing abstractions on mouse related events

### Basic Usage:

Provide a DOM ref as first parameter to `useMouse`

```jsx harmony
import { useRef, useState } from 'react';
import { useMouse } from 'beautiful-react-hooks';

const MouseReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref);

  onMouseEnter(() => setShowCoords(true));
  onMouseLeave(() => setShowCoords(false));

  return (
    <DisplayDemo>
      <div ref={ref}>
        Move the mouse over this text to get its current coordinates:
        {showCoords && (
          <p>{position.clientX}, {position.clientY}</p>
        )}
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Global events

If no ref is provided to `useMouse` it will use the window global object assign the events to

```jsx harmony
import { useState } from 'react';
import { useMouse } from 'beautiful-react-hooks';

const MouseReporter = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [position, { onMouseDown, onMouseUp }] = useMouse();

  onMouseDown(() => setMouseDown(true));
  onMouseUp(() => setMouseDown(false));

  return (
    <DisplayDemo>
      <div>
        The current mouse global coordinates are: {position.clientX}, {position.clientY}
        {mouseDown && (
          <p>
            Holding click
          </p>
        )}
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Mastering the hook

#### ✅ When to use

- If in need to get the mouse current position
- If in need to abstract some mouse related logic into a custom hooks

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `useMouse` handler setters to replace the standard mouse handler props.
- `useMouse` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useMouse` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React SyntheticEvent
  performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { mouseDownHandler } = props;

  return (
    <div onMouseDown={mouseDownHandler} />
  );
};
``` 
