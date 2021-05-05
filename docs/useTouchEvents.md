# useTouchEvents

Returns a set of handler setters to control touch events (*onTouchStart, onTouchMove, onTouchEnd*).<br/>
It possibly accepts a DOM ref to target the event(s) to.
If the target is not provided the events will be globally attached to the `document` object.

Available handler setters: `onTouchStart`, `onTouchMove`, `onTouchEnd`;

**Please note:** the returned handler setters should be immediately invoked in the component's body, do not try to call this functions
asynchronously.

### Why? 💡

- takes care of adding the touch events listeners globally or to a defined target
- takes care of cleaning the listener when the component unmounts
- allows performing abstractions on touch related events

### Basic Usage:

Provide a DOM ref as first parameter to `useTouchEvents`

```jsx harmony
import { useRef, useState } from 'react';
import useTouchEvents from 'beautiful-react-hooks/useTouchEvents';

const MyComponent = () => {
  const [touching, setTouching] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const ref = useRef();
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvents(ref);

  onTouchStart((event) => {
    setTouching(true);
  });

  onTouchMove((event) => {
    if (touching) {
      const { clientX, clientY } = event.touches[0];
      
      setCoordinates([clientX, clientY]);
    }
  });

  onTouchEnd(() => {
    setTouching(false);
  });

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: 10, background: '#1D6C8B' }}>
        Touch here! touching?: {touching ? 'yes' : 'no'}
        {touching && (
          <p>Coordinates: { coordinates[0] }, { coordinates[1] }</p>
        )}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Global events

Avoid providing any argument to `useTouchEvents` to attach the events globally

```jsx harmony
import { useState } from 'react';
import useTouchEvents from 'beautiful-react-hooks/useTouchEvents';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onTouchMove } = useTouchEvents();

  onTouchMove((event) => {
    const { clientX, clientY } = event.touches[0];

    setCoordinates([clientX, clientY]);
  });

  return (
    <DisplayDemo>
      The current touch coordinates are:
      <p>x:{coordinates[0]} y:{coordinates[1]}</p>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- When need to abstract touch related logics into custom hooks(s)

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any result but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `useTouchEvents` handler setters to replace the standard touch handler props.
- `useTouchEvents` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useTouchEvents` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React
  SyntheticEvent performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { touchStartHandler } = props;

  return (
    <div onTouchStart={touchStartHandler} />
  );
};
``` 
