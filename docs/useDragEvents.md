# useDragEvents

Returns an object of handler setters to handle the drag-related events. It accepts a DOM ref representing the events target (where attach
the events to).

Returned handler setters: `onDrag`, `onDrop`, `onDragEnter`, `onDragEnd`, `onDragExit`, `onDragLeave`, `onDragOver`, `onDragStart`;

**Please note:** the returned handler setters should invoked immediately in the function component's body, do not try to call this functions
asynchronously.

### Why? 💡

- takes care of adding the drag-related events listeners to the defined target
- takes care of cleaning the listener when the component will unmount
- allow to perform abstractions on drag-related events

### Basic Usage:

Provide a DOM ref as first parameter to `useDragEvents`

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
    <DisplayDemo>
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

The second argument of `useDragEvents` defines whether to set the `draggable` attribute to the target element. By default, this is set
to `true`.

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
    <DisplayDemo>
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

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `useDragEvents` handler setters to replace the standard drag handler props.
- `useDragEvents` is meant to be used to abstract more complex hooks that need to control the drag n drop, for example:
  the drag-around hook.
- Using `useDragEvents` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React
  SyntheticEvent performance boost.<br />
- If you were doing something like the following, please keep doing it:

```jsx harmony static noedit
const MyComponent = (props) => {
  const { dragStartHandler } = props;

  return (
    <div onDragStart={dragStartHandler} />
  );
};
``` 
