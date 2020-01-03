Returns an array where the first item is the [ref](https://reactjs.org/docs/hooks-reference.html#useref) to a
callback function and the second one is setter for that function.

Although it looks quite similar to a [useState](https://reactjs.org/docs/hooks-reference.html#usestate), in this case the setter just makes sure the given callback is indeed 
a new function.<br />
**Setting a callback ref does not imply your component to re-render.**

`useCallbackRef` is useful when abstracting other custom hooks to possibly implement callback setters.

### Why would you do that?

It's not always necessary but sometimes you want your hook to return a new function accordingly to the
parameters received by the hook, check [useTimeout](./useTimeout.md) for example.


### Basic Usage

```jsx harmony static
import { useState } from 'react';
import { useCallbackRef } from 'beautiful-react-hooks'; 

const useSomething = () => {
  const [ callbackRef, setSomething ] = useCallbackRef();

  useEffect(() => {
   something.addEventListener('change', () => {
     if(callbackRef.current) {
       callbackRef.current();
     }
   });
  }, []);

  return setSomething;
}

const MyComponent = () => {
  const onSomethingChange = useSomething();

  onSomethingChange(() => {
    doSomething();
  });

  return (
   <div>
     My component
   </div>
  );
}

<MyComponent />
```
