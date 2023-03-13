# `useMouse`

A hook that combines the functionalities of [useMouseState](./useMouseState.md) and [useMouseEvents](./useMouseEvents.md), returning an
array where the first item is the mouse state and the second item is a wrapper of all the handler-setters.

`useMouse` is intended as a shortcut to avoid the need for using both `useMouse`State and `useMouse`Events separately.

### Why? 💡

- Provides an easy way to obtain the mouse position
- Automatically adds mouse event listeners either globally or to the specified target element
- Automatically removes the listeners when the component unmounts
- Enables abstractions on mouse-related events

### Basic Usage:

Provide a DOM ref as first parameter to ``useMouse``

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouse from 'beautiful-react-hooks/useMouse';

const MouseReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [position, { onMouseEnter, onMouseLeave }] = useMouse(ref);

  onMouseEnter(() => setShowCoords(true));
  onMouseLeave(() => setShowCoords(false));

  return (
          <DisplayDemo title="useMediaQuery">
            <div ref={ref}>
              <Space direction="vertical">
                <Alert message="Move mouse over this box to get its current coordinates" type="info" showIcon />
                <Tag color="green">ClientX: {position.clientX}</Tag>
                <Tag color="green">ClientY: {position.clientY}</Tag>
              </Space>
            </div>
          </DisplayDemo>
  );
};

<MouseReporter />
```

### Global events

If no ref is provided to `useMouse` it will use the window global object assign the events to

```jsx harmony
import { useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouse from 'beautiful-react-hooks/useMouse';

const MouseReporter = () => {
  const [mouseDown, setMouseDown] = useState(false);
  const [position, { onMouseDown, onMouseUp }] = useMouse();

  onMouseDown(() => setMouseDown(true));
  onMouseUp(() => setMouseDown(false));

  return (
          <DisplayDemo title="useMouse">
            <Space direction="vertical">
              <Alert message="Move mouse around to get its current global coordinates" type="info" showIcon />
              <Tag color="green">ClientX: {position.clientX}</Tag>
              <Tag color="green">ClientY: {position.clientY}</Tag>
            </Space>
          </DisplayDemo>
  );
};

<MouseReporter />
```

### Mastering the hook

#### ✅ When to use

- use `useMouse` to obtain the current mouse position.
- use `useMouse` to abstract custom mouse-related logic into a hook.

#### 🛑 What not to do

- Do not use the returned callback setters asynchronously, as doing so will have no effect and may result in bugs in your code.
- Avoid using `useMouse` callback setters to replace standard mouse handler props.
- `useMouse`  is designed to be used for abstracting more complex hooks that need to control the mouse, such as a drag-and-drop hook.
- Using `useMouse` handlers instead of the classic props approach will result in decreased performance due to the loss of the React
  SyntheticEvent performance boost. If you were using a classic props approach before, continue to do so.

```jsx harmony static noedit
const MyComponent = (props) => {
  const { mouseDownHandler } = props;

  return (
          <div onMouseDown={mouseDownHandler} />
  );
};
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Returns an array where the first item is the mouse state from the `useMouseState` hook and the second item
 * is the object of callback setters from the `useMouseEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
declare const useMouse: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined) => ({
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
} | Readonly<{
    onMouseDown: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseEnter: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseLeave: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseMove: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseOut: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseOver: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseUp: import("./shared/types").CallbackSetter<MouseEvent>;
}>)[];
export default useMouse;

```
<!-- Types:end -->