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

`useTimeout` is a [curry-ed](https://en.wikipedia.org/wiki/Currying) hook that accepts a `function` and
 a `delay time` (*in milliseconds*), then delays the execution of the given function by the defined time.
 
 It also accepts an object of options to possibly customise the `setTimeout` behaviour.

 
### Basic Usage:

Use the `function` to be delayed as first parameter and the delay time as second parameter.

```jsx harmony
import { useState } from 'react'; 
import { useTimeout } from 'beautiful-react-hooks'; 

const DelayedContentComponent = () => {
   const [showContent, setShowContent] = useState(false);
   
   // delay the function by 2000ms
   useTimeout(() => {
     setShowContent(true);
   }, 1000);
   
   return (
     <div style={compStyle}>
       <p>Content delay...</p>
       {showContent && <p>Shown after 1 second...</p>}
     </div>
   );
};

<DelayedContentComponent />
```

### Currying:

Since `useTimeout` is a [curry-ed](https://en.wikipedia.org/wiki/Currying) hook, 
it's possible to omit the first parameter and define the delay time only. 

By doing so, it will return a new function which execution will be delayed by the defined time.

This approach might look quite familiar if you're confident with *functional programming*.

```jsx harmony
import { useState } from 'react'; 
import { useTimeout } from 'beautiful-react-hooks'; 

const DelayedContentComponent = () => {
   const [showContent, setShowContent] = useState(false);
   const after4Seconds = useTimeout(2000);
   
   after4Seconds(() => {
     setShowContent(true);
   });
   
   return (
     <div style={compStyle}>
       <p>Content delay...</p>
       {showContent && <p>Shown after 2 seconds...</p>}
     </div>
   );
};

<DelayedContentComponent />
```

### Options:

`useTimeout` might accept few options provided as eventual parameter.

#### cancelOnUnmount

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react'; 
import { useTimeout } from 'beautiful-react-hooks'; 

const DelayedContentComponent = () => {
   const [showContent, setShowContent] = useState(false);
   const after3Seconds = useTimeout(3000, { cancelOnUnmount: true });
   
   after3Seconds(() => {
     setShowContent(true);
   });
   
   return (
     <div style={compStyle}>
       <p>Content delay...</p>
       {showContent && <p>Shown after 3 seconds...</p>}
     </div>
   );
};

<DelayedContentComponent />
```

#### cancelPrevious

Defines whether the current render should clear the previous timeout references.

**default**: `false`

```jsx harmony
import { useState } from 'react'; 
import { useTimeout } from 'beautiful-react-hooks'; 

const DelayedContentComponent = () => {
   const [showContent, setShowContent] = useState(false);
   const after4Seconds = useTimeout(4000, { cancelPrevious: true });
   
   after4Seconds(() => {
     setShowContent(true);
   });
   
   return (
     <div style={compStyle}>
       <p>Content delay...</p>
       {showContent && <p>Shown after 4 seconds...</p>}
     </div>
   );
};

<DelayedContentComponent />
```

### Mastering the hooks

#### ✅ When to use
 
- If in need to perform a function after a specified number of milliseconds regardless the component re-renders

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
