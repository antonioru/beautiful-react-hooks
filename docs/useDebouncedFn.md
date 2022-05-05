# useDebouncedFn

Accepts a `func` and returns a new memoized version of that function that delays invoking `func` until after the defined 
time have elapsed since the last time the debounced function was invoked.

If time is not defined, its default value will be 100ms.

### Why? 💡

- To control how many times we allow a function to be executed over time regardless the number of renders the component 
is performing
- when we attaching listeners to a DOM event.

### Basic Usage

```jsx harmony
import { useEffect, useState } from 'react'; 
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedFn } from 'beautiful-react-hooks'; 

const DebouncedFnComponent = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   
   // there's no need to use `useCallback` since the returned function 
   // is already memoized
   const onWindowResizeHandler = useDebouncedFn(() => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
   }, 250);
   
   useWindowResize(onWindowResizeHandler);
   useEffect(() => {
     // do something
     // don't forget to cancel debounced
     return () => onWindowResizeHandler.cancel(); // or .flush()
   });
      
   return (
     <DisplayDemo>
       <Paragraph>window width: <strong>{width}</strong></Paragraph>
       <Paragraph>window height: <strong>{height}</strong></Paragraph>
     </DisplayDemo>
   );
};

<DebouncedFnComponent />
```

### Options

Since `useDebouncedFn` uses [lodash.debounce](https://www.npmjs.com/package/lodash.debounce);
under the hood, you can possibly define few options to customise its behaviour.

```jsx harmony
import { useState } from 'react'; 
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedFn } from 'beautiful-react-hooks'; 

const DebouncedFnComponent = () => {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   const options = {
     leading: false,
     trailing: true,
   };
   
   // there's no need to use `useCallback` since the returned function 
   // is already memoized
   const onWindowResizeHandler = useDebouncedFn(() => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
   }, 500, options);
   
   useWindowResize(onWindowResizeHandler);
      
   return (
     <DisplayDemo>
       <Paragraph>window width: {width}</Paragraph>
       <Paragraph>window height: {height}</Paragraph>
     </DisplayDemo>
   );
};

<DebouncedFnComponent />
```

### Dependencies

Since `useDebouncedFn` uses [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) 
under the hood, you can possibly define the callback dependencies.

```jsx harmony
import { useState } from 'react'; 
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedFn } from 'beautiful-react-hooks'; 

const DebouncedFnComponent = (props) => {
   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);
   
   
   // there's no need to use `useCallback` since the returned function 
   // is already memoized
   const onWindowResizeHandler = useDebouncedFn(() => {
     setWidth(window.innerWidth);
     setHeight(window.innerHeight);
   }, 500, null, [props.foo]);
   
   useWindowResize(onWindowResizeHandler);
      
   return (
     <DisplayDemo>
       <Paragraph>window width: {width}</Paragraph>
       <Paragraph>window height: {height}</Paragraph>
     </DisplayDemo>
   );
};

<DebouncedFnComponent foo="bar" />
```

#### ✅ Pro tip:

To deep understanding the differences between `throttle` and `debounce`, what they are and when to use this functions 
please read "[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)"
by [David Corbacho](https://twitter.com/dcorbacho)


### Mastering the hook

#### ✅ When to use
 
- When in need to control how many times we allow a function to be executed over time

