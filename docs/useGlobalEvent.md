# useGlobalEvent

A hook that streamlines event handling in your application, ensuring that event listeners are added and removed at the appropriate times,
without requiring you to manage them manually.\
Simply provide the name of the event you want to attach to the `window` object, and the hook will take care of the rest.

### Why? 💡

- Simplifies the process of adding a listener for a specific event to the `window` object.
- Automates the removal of the listener when the component is unmounted.

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography, Alert, Tag, Space } from 'antd';
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent';

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const onWindowResize = useGlobalEvent('resize');

  onWindowResize((event) => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <DisplayDemo title="useGlobalEvent">
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window to update the state" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{windowWidth}</Tag><br />
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<TestComponent />
```

### Options:

Since `useGlobalEvent` uses [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
under the hood, it's possible to specify the listener characteristics by passing an options object as second parameter.

```jsx harmony
import { useState } from 'react';
import { Typography, Alert, Tag, Space } from 'antd';
import useGlobalEvent from 'beautiful-react-hooks/useGlobalEvent';

const TestComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const options = { capture: true, passive: true, once: true };
  const onWindowResize = useGlobalEvent('resize', options);

  onWindowResize((event) => {
    setWindowWidth(window.innerWidth);
  });

  return (
    <DisplayDemo title="useGlobalEvent">
      <Space direction="vertical" size="middle">
        <Alert type="info" message="Resize the browser window to update the state" showIcon />

        <Typography.Paragraph>
          window width: <Tag color="green">{windowWidth}</Tag><br />
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<TestComponent />
```

### Mastering the hook

#### ✅ When to use

- To capture a specific event from the `window` global object.

#### 🛑 What not to do

- Avoid using the returned callback setter asynchronously, as it will only change the handler and may cause bugs in your code.

<!-- Types -->
### Types
    
```typescript static
import { type CallbackSetter } from './shared/types';
/**
 * Accepts an event name then returns a callback setter for a function to be performed when the event triggers.
 */
declare const useGlobalEvent: <TEvent extends Event>(eventName: keyof WindowEventMap, opts?: AddEventListenerOptions) => CallbackSetter<TEvent>;
export default useGlobalEvent;

```
<!-- Types:end -->