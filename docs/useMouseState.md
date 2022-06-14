# useMouseState

Returns a summary of the mouse current position properties (such as clientX, clientY). It accepts a DOM ref representing the events target (
where attach the events to).

If a target is not provided the events will be globally attached to the `document` object.

### Why? 💡

- allow to easily inspect the mouse position
- takes care of adding the mouse events listeners globally or to a defined target
- takes care of cleaning the listener when the component unmounts

### Basic Usage:

Provide a DOM ref as first parameter to `useMouseState`

```jsx harmony
import { useRef } from 'react';
import useMouseState from 'beautiful-react-hooks/useMouseState';

const MouseReporter = () => {
  const ref = useRef();
  const { clientX, clientY } = useMouseState(ref);

  return (
    <DisplayDemo>
      <div ref={ref}>
        Move mouse over me to get its current coordinates:
        {clientX}, {clientY}
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Global events

Avoid providing any argument to `useMouseState`

```jsx harmony
import useMouseState from 'beautiful-react-hooks/useMouseState';

const MouseReporter = () => {
  const { clientX, clientY } = useMouseState();

  return (
    <DisplayDemo>
      The current mouse coordinates are:
      {clientX}, {clientY}
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Mastering the hook

#### ✅ When to use

- When need to abstract touch related logics into custom hooks(s)

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `useMouseEvents` handler setters to replace the standard mouse handler props.
- `useMouseEvents` is meant to be used to abstract more complex hooks that need to control the mouse, for example: a drag n drop hook.
- Using `useMouseEvents` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React
  SyntheticEvent performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { mouseDownHandler } = props;

  return (
    <div onMouseDown={mouseDownHandler} />
  );
};
``` 
