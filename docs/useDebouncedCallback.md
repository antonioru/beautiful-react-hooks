# useDebouncedCallback

A hook that accepts a `function` parameter and produces a new memoized variant of that function which postpones its invocation by the
specified duration.\
In case the duration is not specified, it will be set to the default value of 600ms.\

This hook is built on top of the `lodash.debounce` function. For further details, kindly refer to
the [Lodash documentation](https://lodash.com/docs/#debounce).

### Why? 💡

- To take full control over frequency at which a function can execute, independent of the number of renders performed by the component

### Basic Usage

```jsx harmony
import { useEffect, useState } from 'react';
import { Typography, Alert, Space, Tag } from 'antd';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

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
    <DisplayDemo title="useDebounceCallback">
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

<DebouncedFnComponent />
```

### Dependencies

Since `useDebouncedCallback` uses [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
under the hood, you can possibly define the callback dependencies.

```jsx harmony
import { useState } from 'react';
import { Typography, Alert, Space, Tag } from 'antd';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

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
    <DisplayDemo title="useDebounceCallback">
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

<DebouncedFnComponent foo="bar" />
```

### Debounce time

A custom debounce time can be easily defined as follows (500ms)

```jsx harmony
import { useState } from 'react';
import { Typography, Alert, Space, Tag } from 'antd';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

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
    <DisplayDemo title="useDebounceCallback">
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

<DebouncedFnComponent foo="bar" />
```

### Options

Since `useDebouncedCallback` uses [lodash.debounce](https://www.npmjs.com/package/lodash.debounce); under the hood, you can possibly define
few options to customise its behaviour.

```jsx harmony
import { useState } from 'react';
import { Typography, Alert, Space, Tag } from 'antd';
import useDebouncedCallback from 'beautiful-react-hooks/useDebouncedCallback';
import useWindowResize from 'beautiful-react-hooks/useWindowResize';

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
    <DisplayDemo title="useDebounceCallback">
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

<DebouncedFnComponent />
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
export interface DebounceOptions {
    leading?: boolean | undefined;
    maxWait?: number | undefined;
    trailing?: boolean | undefined;
}
/**
 * Accepts a function and returns a new debounced yet memoized version of that same function that delays
 * its invoking by the defined time.
 * If time is not defined, its default value will be 250ms.
 */
declare const useDebouncedCallback: <TCallback extends GenericFunction>(fn: TCallback, dependencies?: DependencyList, wait?: number, options?: DebounceOptions) => import("lodash").DebouncedFunc<TCallback>;
export default useDebouncedCallback;

```
<!-- Types:end -->