# useMouseState

Returns an object of mouse position properties (such as clientX, clientY).
It accepts a DOM ref representing the events target (where attach the events to).

If a target is not provided the events will be globally attached to the `document` object.

### Why? 💡

- allow to easily receive the mouse position 
- takes care of adding the mouse events listeners globally or to the defined target
- takes care of cleaning the listener when the component will unmount


### Basic Usage:

Provide a DOM ref as first parameter to `useMouseState`


```jsx harmony
import { useRef } from 'react';
import { useMouseState } from 'beautiful-react-hooks'; 

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
import { useMouseState } from 'beautiful-react-hooks'; 

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
 
- If need to easily receive the mouse position 
