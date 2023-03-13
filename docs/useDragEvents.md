# useDragEvents

A hook that provides a collection of functions designed to simplify the management of drag-related events.\
It takes a reference to target element where the events are to be attached.\
This hook facilitates the handling of drag events, making it easier for developers to incorporate drag-and-drop functionality into their web
applications.

**Please note:** the returned callback setters should be invoked immediately in the function component's body, do not try to call this
functions asynchronously.

### Why? 💡

- Takes care of attaching the drag-related event listeners to the specified target element
- Automatically removes the event listeners when the component is unmounted
- Enables the ability to abstract the handling of drag-related events

### Basic Usage:

Provide a DOM element ref as first parameter to `useDragEvents`

```jsx harmony
import { useRef, useState } from 'react';
import useDragEvents from 'beautiful-react-hooks/useDragEvents';

const MyComponent = () => {
  const ref = useRef();
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(ref);

  onDragStart((event) => {
    setIsDragged(true);
  });

  onDragEnd((event) => {
    setIsDragged(false);
  });

  return (
    <DisplayDemo title="useDragEvents">
      <div ref={ref} style={{ padding: '20px 0', background: '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Draggable attribute:

the second parameter determines whether the target element should have the `draggable` attribute set. By default, this is set to `true`.

**Please note**:

The following code is meant to be just as an example, **do not use this hooks to substitute the standard props approach**, please
read [mastering the hook](#Mastering_the_hook) below.

```jsx harmony
import { useRef, useState } from 'react';
import useDragEvents from 'beautiful-react-hooks/useDragEvents';

const MyComponent = () => {
  const draggableRef = useRef();
  const dropzoneRef = useRef();
  const [droppedTimes, setDroopedTimes] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const { onDragStart, onDragEnd } = useDragEvents(draggableRef);
  const { onDrop, onDragOver } = useDragEvents(dropzoneRef, false);

  onDragStart((event) => {
    setIsDragged(true);
  });

  onDragEnd((event) => {
    setIsDragged(false);
  });

  onDragOver((event) => {
    event.preventDefault();
  });

  onDrop((event) => {
    setDroopedTimes(1 + droppedTimes);
  });

  return (
    <DisplayDemo title="useDragEvents">
      <div ref={draggableRef} style={{ padding: '20px 0', background: '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>

      <div ref={dropzoneRef} style={{ padding: '20px 0', marginTop: '20px', background: '#BE496E' }}>
        Drop zone!
        Dropped items: {droppedTimes}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- If in need to abstract some drag-n-drop related logic into a custom hooks

#### 🛑 What not to do

- Using the returned callback setter asynchronously won't have any effect and could introduce bugs into your code, so it should be avoided.
- Standard drag handler props (like `onDragStart`) should not be replaced with useDragEvents callback setters.
- useDragEvents is designed to be used for more complex hooks that require control over drag and drop.
- Replacing classic props with useDragEvents handlers can lead to a loss in performance due to the lack of React SyntheticEvent support.
- If you were already using a method similar to the following, it is recommended to continue doing so:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { dragStartHandler } = props;

  return (
    <div onDragStart={dragStartHandler} />
  );
};
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
import { type CallbackSetter } from './shared/types';
export interface UseDragEventsResult {
    onDrag: CallbackSetter<DragEvent>;
    onDrop: CallbackSetter<DragEvent>;
    onDragEnter: CallbackSetter<DragEvent>;
    onDragEnd: CallbackSetter<DragEvent>;
    onDragExit: CallbackSetter<DragEvent>;
    onDragLeave: CallbackSetter<DragEvent>;
    onDragOver: CallbackSetter<DragEvent>;
    onDragStart: CallbackSetter<DragEvent>;
}
/**
 * Returns an object of callback setters to handle the drag-related events.
 * It accepts a DOM ref representing the events target (where attach the events to).
 *
 * Returned callback setters: `onDrag`, `onDrop`, `onDragEnter`, `onDragEnd`, `onDragExit`, `onDragLeave`,
 * `onDragOver`, `onDragStart`;
 */
declare const useDragEvents: <TElement extends HTMLElement>(targetRef: RefObject<TElement>, isDraggable?: boolean) => Readonly<UseDragEventsResult>;
export default useDragEvents;

```
<!-- Types:end -->