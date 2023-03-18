# useMouseEvents

A hook that provides an easy way to manage mouse events by returning a set of callback setters. The returned setters allow control over
various mouse events including `onMouseDown`, `onMouseEnter`, `onMouseLeave`, `onMouseMove`, `onMouseOut`, `onMouseOver`, and `onMouseUp`.

The hook optionally accepts a reference to a DOM element to target the desired event(s) to. If no target is provided, the events will be
attached globally to the document object.

It is important to note that the returned callback setters should be immediately invoked within the component's body, and should not be
called asynchronously.

### Why? 💡

- handles the addition of mouse event listeners either globally or to a specified target.
- takes care of cleaning up the listeners when the component is unmounted.
- enables the implementation of abstractions on mouse-related events.

### Basic Usage:

Provide a DOM ref as first parameter to `useMouseEvents`

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouseEvents from 'beautiful-react-hooks/useMouseEvents';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const ref = useRef();
  const { onMouseMove, onMouseLeave } = useMouseEvents(ref);

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  onMouseLeave(() => {
    setCoordinates([0, 0]);
  });

  return (
    <DisplayDemo title="useMouseEvent">
      <div ref={ref}>
        <Space direction="vertical">
          <Alert message="Move mouse over this box to get its current coordinates" type="info" showIcon />
          <Tag color="green">ClientX: {coordinates[0]}</Tag>
          <Tag color="green">ClientY: {coordinates[1]}</Tag>
        </Space>
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Global events

If no ref is provided to `useMouseEvents` it will use the window global object assign the events to

```jsx harmony
import { useState } from 'react';
import { Tag, Space, Alert } from 'antd';
import useMouseEvents from 'beautiful-react-hooks/useMouseEvents';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const { onMouseMove } = useMouseEvents();

  onMouseMove((event) => {
    const nextCoords = [event.clientX, event.clientY];
    setCoordinates(nextCoords);
  });

  return (
    <DisplayDemo title="useMouseEvent">
      <Space direction="vertical">
        <Alert message="Move mouse around to get its current global coordinates" type="info" showIcon />
        <Tag color="green">ClientX: {coordinates[0]}</Tag>
        <Tag color="green">ClientY: {coordinates[1]}</Tag>
      </Space>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- When you need to abstract mouse-related logics into custom hooks(s)

#### 🛑 What not to do

- Do not use the returned callback setters asynchronously, as doing so will have no effect and may result in bugs in your code.
- Avoid using `useMouseEvents` callback setters to replace standard mouse handler props.
- `useMouseEvents`  is designed to be used for abstracting more complex hooks that need to control the mouse, such as a drag-and-drop hook.
- Using `useMouseEvents` handlers instead of the classic props approach will result in decreased performance due to the loss of the React
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
 * Returns a frozen object of callback setters to handle the mouse events.<br/>
 * It accepts a DOM ref representing the events target. <br/>
 * If a target is not provided the events will be globally attached to the document object.
 * <br/>
 * ### Shall the `useMouseEvents` callbacks replace the standard mouse handler props?
 *
 * **They shall not!**<br />
 * **useMouseEvents is meant to be used to abstract more complex hooks that need to control mouse**, for instance:
 * a drag n drop hook.<br />
 * Using useMouseEvents handlers instead of the classic props approach it's just as bad as it sounds since you'll
 * lose the React SyntheticEvent performance boost.<br />
 * If you were doing something like the following:
 */
declare const useMouseEvents: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined, passive?: boolean) => Readonly<{
    onMouseDown: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseEnter: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseLeave: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseMove: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseOut: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseOver: import("./shared/types").CallbackSetter<MouseEvent>;
    onMouseUp: import("./shared/types").CallbackSetter<MouseEvent>;
}>;
export default useMouseEvents;

```

<!-- Types:end -->
