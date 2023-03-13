# useThrottledCallback

A hook that takes in a function as an argument and returns a new memoized version of the function that limits its invocation to once per
specified time interval, measured in milliseconds. By default, the time interval is set to 250ms if not defined.

### Why? 💡

- Manages the frequency of function execution, irrespective of the number of times a component is rendered.

## Basic Usage

```jsx harmony
import { useEffect, useState } from 'react';
import { Space, Alert, Typography, Tag } from 'antd';
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
    <DisplayDemo title="useThrottledCallback">
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window and see the update taking effect after the designated delay" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{width}</Tag><br />
          window height: <Tag color="green">{height}</Tag>
        </Typography.Paragraph>
      </Space>
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
import { Space, Alert, Typography, Tag } from 'antd';
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
import { Space, Alert, Typography, Tag } from 'antd';
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
    <DisplayDemo title="useThrottledCallback">
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window and see the update taking effect after the designated delay" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{width}</Tag><br />
          window height: <Tag color="green">{height}</Tag>
        </Typography.Paragraph>
      </Space>
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
import { Space, Alert, Typography, Tag } from 'antd';
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
    <DisplayDemo title="useThrottledCallback">
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window and see the update taking effect after the designated delay" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{width}</Tag><br />
          window height: <Tag color="green">{height}</Tag>
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<ThrottledFnComponent />
```

#### ✅ Pro tip:

To deep understanding the differences between `throttle` and `debounce`, what they are and when to use them please
read "[Debouncing and Throttling Explained Through Examples](https://css-tricks.com/debouncing-throttling-explained-examples/)"
by [David Corbacho](https://twitter.com/dcorbacho)

<!-- Types -->
### Types
    
```typescript static
/// <reference types="lodash" />
import { type DependencyList } from 'react';
import { type GenericFunction } from './shared/types';
interface ThrottleSettings {
    leading?: boolean | undefined;
    trailing?: boolean | undefined;
}
/**
 * Accepts a function and returns a new throttled yet memoized version of that same function that waits the defined time
 * before allowing the next execution.
 * If time is not defined, its default value will be 250ms.
 */
declare const useThrottledCallback: <TCallback extends GenericFunction>(fn: TCallback, dependencies?: DependencyList, wait?: number, options?: ThrottleSettings) => import("lodash").DebouncedFunc<TCallback>;
export default useThrottledCallback;

```
<!-- Types:end -->