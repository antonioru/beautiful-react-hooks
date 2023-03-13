# useTouch

A hook that combines the functionalities of [useTouchState](./useTouchState.md) and [useTouchEvents](./useTouchEvents.md), returning an
array where the first item is the mouse state and the second item is a wrapper of all the handler-setters.

`useTouch` is intended as a shortcut to avoid the need for using both `useTouch`State and `useTouch`Events separately.

### Why? 💡

- Provides an easy way to obtain the mouse position
- Automatically adds mouse event listeners either globally or to the specified target element
- Automatically removes the listeners when the component unmounts
- Enables abstractions on mouse-related events

### Basic Usage:

Provide a DOM ref as first parameter to `useTouch`

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouch from 'beautiful-react-hooks/useTouch';

const TouchReporter = () => {
  const ref = useRef();
  const [showCoords, setShowCoords] = useState(false);
  const [touches, { onTouchStart, onTouchEnd }] = useTouch(ref);

  onTouchStart(() => setShowCoords(true));
  onTouchEnd(() => setShowCoords(false));

  return (
          <DisplayDemo>
            <div ref={ref}>
              <Space direction="vertical">
                <Alert message="Swipe this box to get the event coordinates" type="info" showIcon />
                {showCoords && touches.length > 0 && ([
                  <Tag color="green">Touch X: {touches[0].clientX}</Tag>,
                  <Tag color="green">Touch Y: {touches[0].clientY}</Tag>
                ])}
              </Space>
            </div>
          </DisplayDemo>
  );
};

<TouchReporter />
```

### Global events

If no ref is provided to `useTouch` it will use the window global object assign the events to

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouch from 'beautiful-react-hooks/useTouch';

const TouchReporter = () => {
  const [showCoords, setShowCoords] = useState(false);
  const [touches, { onTouchStart, onTouchEnd }] = useTouch();

  onTouchStart(() => setShowCoords(true));
  onTouchEnd(() => setShowCoords(false));

  return (
          <DisplayDemo>
            <Space direction="vertical">
              <Alert message="Swipe this box to display the event coordinates" type="info" showIcon />
              {touches.length > 0 && ([
                <Tag color="green">Touch X: {touches[0].clientX}</Tag>,
                <Tag color="green">Touch Y: {touches[0].clientY}</Tag>
              ])}
            </Space>
          </DisplayDemo>
  );
};

<TouchReporter />
```

### Mastering the hook

#### ✅ When to use

- When you need to abstract touch-related logics into custom hooks(s)

#### 🛑 What not to do

- Do not use the returned callback setters asynchronously, as doing so will have no effect and may result in bugs in your code.
- Avoid using `useTouch` callback setters to replace standard mouse handler props.
- `useTouch`  is designed to be used for abstracting more complex hooks that need to control the mouse, such as a drag-and-drop hook.
- Using `useTouch` handlers instead of the classic props approach will result in decreased performance due to the loss of the React
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
import { type UseTouchEventsReturn } from './useTouchEvents';
/**
 * Returns an array where the first item is the touch state from the `useTouchState` hook and the second item
 * is the object of callback setters from the `useTouchEvents` hook.
 * It is intended as a shortcut to those hooks.
 */
declare const useTouch: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined) => [TouchList, Readonly<UseTouchEventsReturn>];
export default useTouch;

```
<!-- Types:end -->