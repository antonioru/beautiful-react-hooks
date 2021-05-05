# useTouchState

Returns the touch objects from the current touch events. It accepts a DOM ref representing the events target (where attach the events to).

If a target is not provided the events will be globally attached to the `document` object.

### Why? 💡

- allow to easily get the touch state
- takes care of adding the mouse events listeners globally or to a defined target
- takes care of cleaning the listener when the component unmounts

### Basic Usage:

Provide a DOM ref as first parameter to `useTouchState`

```jsx harmony
import { useRef } from 'react';
import useTouchState from 'beautiful-react-hooks/useTouchState';

const TouchReporter = () => {
  const ref = useRef();
  const touches = useTouchState(ref);

  console.log(touches);

  return (
    <DisplayDemo>
      <div ref={ref}>
        Touch over me to get its current coordinates:
        {touches && touches[0] && (
          <p>x: {touches[0].clientX}, y: {touches[0].clientY}</p>
        )}
      </div>
    </DisplayDemo>
  );
};

<TouchReporter />
```

### Global events

Avoid providing any argument to `useTouchState`

```jsx harmony
import useTouchState from 'beautiful-react-hooks/useTouchState'; 

const TouchReporter = () => {
  const touches = useTouchState();
  
  return (
   <DisplayDemo>
     The current touch coordinates are:
     {touches && touches[0] && (
       <p>x: {touches[0].clientX}, y: {touches[0].clientY}</p>
     )}
   </DisplayDemo>
  );
};

<TouchReporter />
```


### Mastering the hook

#### ✅ When to use

- If need to easily receive the mouse position 
