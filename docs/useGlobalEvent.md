# useGlobalEvent

Accepts an event name to be attached to the window global object, then returns a handler setter 
for that event.

### Why? 💡

- takes care of adding a listener for a given event to the window object
- takes care of removing the listener when the component will unmount

### Basic Usage:

`useGlobalEvent` returns a handler setter for the defined event to be immediately invoked.

**Please note**: the handler setter is only meant to change the callback reference, it does not cause the component 
rerender nor not be invoked asynchronously.

```jsx harmony
import { useState } from 'react';
import { useGlobalEvent } from 'beautiful-react-hooks'; 

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent('resize');
  
  onWindowResize((event) => {
    setWindowWidth(window.innerWidth);
  });
  
   return (
     <DisplayDemo>
       Current window width: {windowWidth}
     </DisplayDemo>
   );
};

<TestComponent />
```

### Options:

Since `useGlobalEvent` uses [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 
under the hood, it's possible to specify the listener characteristics by passing an options object as second parameter.

```jsx harmony
import { useState } from 'react';
import { useGlobalEvent } from 'beautiful-react-hooks'; 

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const options = { capture: true, passive: true, once: true };
  const onWindowResize = useGlobalEvent('resize', options);
  
  onWindowResize((event) => {
    setWindowWidth(window.innerWidth);
  });
  
   return (
     <DisplayDemo>
       Current window width: {windowWidth}
     </DisplayDemo>
   );
};

<TestComponent />
```

### Defining the callback:

The third parameter allow to define the callback avoiding the use of the returned handler setter.

```jsx harmony
import { useState } from 'react';
import { useGlobalEvent } from 'beautiful-react-hooks'; 

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useGlobalEvent('resize', null, (event) => {
    setWindowWidth(window.innerWidth);
  });
  
  return (
    <DisplayDemo>
     Current window width: {windowWidth}
    </DisplayDemo>
  );
};

<TestComponent />
```

### Mastering the hook

#### ✅ When to use
 
- If in need to perform a function every x number of milliseconds regardless the component re-renders

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler 
 possibly leading to bugs in your code
