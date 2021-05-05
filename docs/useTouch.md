# useTouch

Returns an array where the first item is the touch state from [useTouchState](./useTouchState.md) and the second item is the object of
handler setters from [useTouchEvents](./useTouchEvents.md).

It is intended as a shortcut to those hooks.

### Why? 💡

- allow to easily receive the touches state
- takes care of adding the touch events listeners globally or to the defined target
- takes care of cleaning the listener when the component will unmount
- allows performing abstractions on mouse related events

### Basic Usage:

Provide a DOM ref as first parameter to `useTouch`

```jsx harmony
import { useRef, useState } from 'react';
import useTouch from 'beautiful-react-hooks/useTouch';

const TouchReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [touches, { onTouchStart, onTouchEnd }] = useTouch(ref);

  onTouchStart(() => setShowCoords(true));
  onTouchEnd(() => setShowCoords(false));
  
  return (
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates:
        {showCoords && touches[0] && (
          <p>{touches[0].clientX}, {touches[0].clientY}</p>
        )}
      </div>
    </DisplayDemo>
  );
};

<TouchReporter />
```

### Global events

Avoid providing any argument to `useTouch`

```jsx harmony
import { useRef, useState } from 'react';
import useTouch from 'beautiful-react-hooks/useTouch';

const TouchReporter = () => {
  const [showCoords, setShowCoords] = useState(false);
  const [touches, { onTouchStart, onTouchEnd }] = useTouch();

  onTouchStart(() => setShowCoords(true));
  onTouchEnd(() => setShowCoords(false));
  
  return (
    <DisplayDemo>
      <div>
        Move mouse over me to get its current coordinates:
        {showCoords && touches[0] && (
          <p>{touches[0].clientX}, {touches[0].clientY}</p>
        )}
      </div>
    </DisplayDemo>
  );
};

<TouchReporter />
```

### Mastering the hook

#### ✅ When to use

- If in need to get the mouse current position
- If in need to abstract some mouse related logic into a custom hooks

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `useTouch` handler setters to replace the standard mouse handler props.
- `useTouch` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useTouch` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React SyntheticEvent
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
