# useThrottledCallback

Accepts a function and returns a new memoized version of that function that waits the defined time before allowing the next execution. If
time is not defined, its default value will be 250ms.

### Why? 💡

- Controls how many times we allow a function to be executed over time regardless the number of renders the component is performing

## Basic Usage

```jsx harmony
import { useEffect, useState } from 'react';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const ThrottledFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useThrottledCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  });

  onWindowResize(onWindowResizeHandler);

  useEffect(() => {
    // do something
    // don't forget to cancel debounced
    return () => onWindowResizeHandler.cancel(); // or .flush()
  });

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent />
```

## Dependencies

Since `useThrottledCallback` uses [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
under the hood, you can possibly define the callback dependencies.

```jsx harmony
import { useState } from 'react';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const ThrottledFnComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useThrottledCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight]);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent foo="bar" />
```

### Throttled time

A custom throttled time can be easily defined as follows (500ms)

```jsx harmony
import { useState } from 'react';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const ThrottledFnComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useThrottledCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight], 500);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent foo="bar" />
```

## Options

Since `useThrottledCallback` uses [lodash.throttle](https://www.npmjs.com/package/lodash.throttle)
under the hood, you can possibly define few options to customise its behaviour.

```jsx harmony
import { useState } from 'react';
import useThrottledCallback from 'beautiful-react-hooks/useThrottledCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

const ThrottledFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();
  const options = {
    leading: false,
    trailing: true,
  };

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useThrottledCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight], 500, options);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <p>window width: {width}</p>
      <p>window height: {height}</p>
    </DisplayDemo>
  );
};

<ThrottledFnComponent />
```

#### ✅ Pro tip:

To deep understanding the differences between `throttle` and `debounce`, what they are and when to use this functions please
read "[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)"
by [David Corbacho](https://twitter.com/dcorbacho)

### Mastering the hook

#### ✅ When to use

- The classic example would be an infinite scroll over a paginated API call
