# useTouchEvents

A hook that provides an easy way to manage touch events by returning a set of callback setters. The returned setters allow control over
various mouse events including `onTouchStart`, `onTouchMove`, `onTouchEnd`;

The hook optionally accepts a reference to a DOM element to target the desired event(s) to. If no target is provided, the events will be
attached globally to the document object.

It is important to note that the returned callback setters should be immediately invoked within the component's body, and should not be
called asynchronously.

### Why? 💡

- handles the addition of touch event listeners either globally or to a specified target.
- takes care of cleaning up the listeners when the component is unmounted.
- enables the implementation of abstractions on touch-related events.

### Basic Usage:

Provide a DOM ref as first parameter to `useTouchEvents`

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouchEvents from 'beautiful-react-hooks/useTouchEvents';

const MyComponent = () => {
  const [touching, setTouching] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const ref = useRef();
  const { onTouchStart, onTouchMove, onTouchEnd } = useTouchEvents(ref);

  onTouchStart((event) => {
    setTouching(true);
  });

  onTouchMove((event) => {
    if (touching) {
      const { clientX, clientY } = event.touches[0];

      setCoordinates([clientX, clientY]);
    }
  });

  onTouchEnd(() => {
    setTouching(false);
  });

  return (
          <DisplayDemo title="useTouchEvents">
            <div ref={ref}>
              <Space direction="vertical">
                <Alert message="Touch this box to get the event coordinates" type="info" showIcon />
                <Tag color="green">Is touching: {touching ? 'no' : 'yes'}</Tag>
                <Tag color="green">Touch X: {coordinates[0]}</Tag>
                <Tag color="green">Touch Y: {coordinates[1]}</Tag>
              </Space>
            </div>
          </DisplayDemo>
  );
};

<MyComponent />
```

### Global events

If no ref is provided to `useTouchEvents` it will use the window global object assign the events to

```jsx harmony
import { useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useTouchEvents from 'beautiful-react-hooks/useTouchEvents';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onTouchMove } = useTouchEvents();

  onTouchMove((event) => {
    const { clientX, clientY } = event.touches[0];

    setCoordinates([clientX, clientY]);
  });

  return (
          <DisplayDemo title="useTouchEvents">
            <Space direction="vertical">
              <Alert message="Swipe this box to get the event coordinates" type="info" showIcon />
              <Tag color="green">Touch X: {coordinates[0]}</Tag>
              <Tag color="green">Touch Y: {coordinates[1]}</Tag>
            </Space>
          </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- When you need to abstract touch-related logics into custom hooks(s)

#### 🛑 What not to do

- Do not use the returned callback setters asynchronously, as doing so will have no effect and may result in bugs in your code.
- Avoid using `useTouchEvents` callback setters to replace standard mouse handler props.
- `useTouchEvents`  is designed to be used for abstracting more complex hooks that need to control the mouse, such as a drag-and-drop hook.
- Using `useTouchEvents` handlers instead of the classic props approach will result in decreased performance due to the loss of the React
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
import { type CallbackSetter } from './shared/types';
/**
 * Returns a frozen object of callback setters to handle the touch events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useTouchEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useTouchEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useTouchEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 *
 */
declare const useTouchEvents: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined, passive?: boolean) => Readonly<UseTouchEventsReturn>;
/**
 * The return object of the `useTouchEvents` hook.
 */
export interface UseTouchEventsReturn {
    onTouchStart: CallbackSetter<TouchEvent>;
    onTouchEnd: CallbackSetter<TouchEvent>;
    onTouchCancel: CallbackSetter<TouchEvent>;
    onTouchMove: CallbackSetter<TouchEvent>;
}
export default useTouchEvents;

```
<!-- Types:end -->