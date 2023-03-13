# useMouseState

A hook that returns relevant properties from the current mouse position, such as clientX and clientY. To ensure that events are attached to
the intended target, please provide a DOM reference to the hook. If no target is specified, the events will be attached to the
the `document` object globally.

### Why? 💡

- Allows to quickly get the mouse position
- Manages the addition of mouse event listeners either globally or to a defined target
- Ensures the listener is cleaned up when the component unmounts

### Basic Usage:

Provide a DOM ref as first parameter to `useMouseState`

```jsx harmony
import { useRef } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouseState from 'beautiful-react-hooks/useMouseState';

const MouseReporter = () => {
  const ref = useRef();
  const { clientX, clientY } = useMouseState(ref);

  return (
    <DisplayDemo title="useMediaQuery">
      <div ref={ref}>
        <Space direction="vertical">
          <Alert message="Move mouse over this box to get its current coordinates" type="info" showIcon />
          <Tag color="green">ClientX: {clientX}</Tag>
          <Tag color="green">ClientY: {clientY}</Tag>
        </Space>
      </div>
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Global events

Attach the mouse events globally by simply not providing any dom reference to the `useMouseState` hook

```jsx harmony
import { Tag, Space, Alert } from 'antd';
import useMouseState from 'beautiful-react-hooks/useMouseState';

const MouseReporter = () => {
  const { clientX, clientY } = useMouseState();

  return (
    <DisplayDemo title="useMouseState">
      <Space direction="vertical">
        <Alert message="Move mouse around to get its current global coordinates" type="info" showIcon />
        <Tag color="green">ClientX: {clientX}</Tag>
        <Tag color="green">ClientY: {clientY}</Tag>
      </Space>
    </DisplayDemo>
  );
};

<MouseReporter />
```

### Mastering the hook

#### ✅ When to use

- When you need to abstract mouse-related logics into custom hooks(s)
- When you need to quickly get the current mouse position

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Returns the current state (position) of the mouse pointer.
 * It possibly accepts a DOM ref representing the mouse target.
 * If a target is not provided the state will be caught globally.
 */
declare const useMouseState: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined) => {
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
};
export default useMouseState;

```
<!-- Types:end -->