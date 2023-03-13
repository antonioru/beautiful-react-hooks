# useTouchState

A hook that returns relevant properties from the last touch event, such as clientX and clientY. To ensure that events are attached to the
intended target, please provide a DOM reference to the hook. If no target is specified, the events will be attached to the the `document`
object globally.

### Why? 💡

- Allows to quickly get relevant information on the last touch event
- Manages the addition of event listeners either globally or to a defined target
- Ensures the listener is cleaned up when the component unmounts

### Basic Usage:

Provide a DOM ref as first parameter to `useTouchState`

```jsx harmony
import { useRef } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouchState from 'beautiful-react-hooks/useTouchState';

const TouchReporter = () => {
  const ref = useRef();
  const touches = useTouchState(ref);
  const lastTouch = touches[0];

  return (
    <DisplayDemo title="useTouchState">
      <div ref={ref}>
        <Space direction="vertical">
          <Alert message="Touch this box to get the event coordinates" type="info" showIcon />
          {touches.length > 0 && lastTouch && (
            <>
              <Tag color="green">Touch X: {lastTouch.clientX}</Tag>
              <Tag color="green">Touch Y: {lastTouch.clientY}</Tag>
            </>
          )}
          {touches.length === 0 && (
            <Alert message="Use a touch device for this example" type="error" showIcon />
          )}
        </Space>
      </div>
    </DisplayDemo>
  );
};

<TouchReporter />
```

### Global events

Attach the touch events globally by simply not providing any dom reference to the `useTouchState` hook

```jsx harmony
import useTouchState from 'beautiful-react-hooks/useTouchState';
import { Tag, Space, Alert } from 'antd';

const TouchReporter = () => {
  const touches = useTouchState();
  const lastTouch = touches[0];

  return (
    <DisplayDemo title="useTouchState">
      <Space direction="vertical">
        <Alert message="Touch this box to get the event coordinates" type="info" showIcon />
        {touches.length > 0 && lastTouch && (
          <>
            <Tag color="green">Touch X: {lastTouch.clientX}</Tag>
            <Tag color="green">Touch Y: {lastTouch.clientY}</Tag>
          </>
        )}
        {touches.length === 0 && (
          <Alert message="Use a touch device for this example" type="error" showIcon />
        )}
      </Space>
    </DisplayDemo>
  );
};

<TouchReporter />
```

### Mastering the hook

#### ✅ When to use

- When you need to abstract touch-related logics into custom hooks(s)
- When you need to quickly get the last touch position

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Returns the current touches from the touch move event.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
declare const useTouchState: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined) => TouchList;
export default useTouchState;

```
<!-- Types:end -->