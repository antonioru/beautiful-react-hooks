# useDebouncedCallback

Takes a `function` and returns a new memoized version of that function that delays its invoking by the defined time. If time is not defined,
its default value will be 250ms.

### Why? 💡

- Controls how many times we allow a function to be executed over time regardless the number of renders the component is performing

### Basic Usage

```jsx harmony
import { useEffect, useState } from 'react';
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks';

const DebouncedFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useDebouncedCallback(() => {
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
      <Paragraph>window width: <strong>{width}</strong></Paragraph>
      <Paragraph>window height: <strong>{height}</strong></Paragraph>
    </DisplayDemo>
  );
};

<DebouncedFnComponent />
```

### Dependencies

Since `useDebouncedCallback` uses [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
under the hood, you can possibly define the callback dependencies.

```jsx harmony
import { useState } from 'react';
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks';

const DebouncedFnComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();
  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight]);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <Paragraph>window width: {width}</Paragraph>
      <Paragraph>window height: {height}</Paragraph>
    </DisplayDemo>
  );
};

<DebouncedFnComponent foo="bar" />
```

### Debounce time

A custom debounce time can be easily defined as follows (500ms)

```jsx harmony
import { useState } from 'react';
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks';

const DebouncedFnComponent = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize();

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight], 500);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <Paragraph>window width: {width}</Paragraph>
      <Paragraph>window height: {height}</Paragraph>
    </DisplayDemo>
  );
};

<DebouncedFnComponent foo="bar" />
```

### Options

Since `useDebouncedCallback` uses [lodash.debounce](https://www.npmjs.com/package/lodash.debounce); under the hood, you can possibly define
few options to customise its behaviour.

```jsx harmony
import { useState } from 'react';
import { Paragraph } from 'beautiful-react-ui';
import { useWindowResize, useDebouncedCallback } from 'beautiful-react-hooks';

const DebouncedFnComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const onWindowResize = useWindowResize()
  const options = {
    leading: false,
    trailing: true,
  };

  // there's no need to use `useCallback` since the returned function 
  // is already memoized
  const onWindowResizeHandler = useDebouncedCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, [setWidth, setHeight], 500, options);

  onWindowResize(onWindowResizeHandler);

  return (
    <DisplayDemo>
      <Paragraph>window width: {width}</Paragraph>
      <Paragraph>window height: {height}</Paragraph>
    </DisplayDemo>
  );
};

<DebouncedFnComponent />
```

#### ✅ Pro tip:

To deep understanding the differences between `throttle` and `debounce`, what they are and when to use this functions please
read "[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)"
by [David Corbacho](https://twitter.com/dcorbacho)

### Mastering the hook

#### ✅ When to use

- The classic example would be an API call that would be performed when typing on a search field
