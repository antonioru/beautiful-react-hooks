# useDropZone

Accepts an HTML Element ref then makes it a drop-zone receiving data from dragged object.

### Why? 💡

- takes care of adding the drop-related events listeners to the defined target
- takes care of cleaning the listener when the component will unmount
- allow to easily implement drop-related business logic

### Basic Usage:

Provide a DOM ref as first parameter to `useDropZone`

```jsx harmony
import { useState, useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';
import useDropZone from 'beautiful-react-hooks/useDropZone';

const MyComponent = () => {
  const dragRef = useRef();
  const dropRef = useRef();
  const isDragged = useDrag(dragRef, { transfer: { data: 'foo' }, transferFormat: 'text' });
  const { isOver, onDrop } = useDropZone(dropRef);
  const [data, setData] = useState();

  onDrop((event) => {
    event.preventDefault();
    const nextData = event.dataTransfer.getData('text');
    setData(nextData);
  });

  return (
    <DisplayDemo>
      <div ref={dragRef} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        {!isDragged && <span>Drag to send data</span>}
        {isDragged && <span>is being dragged</span>}
      </div>
      <div ref={dropRef} style={{ padding: '20px 0', marginTop: '4rem', background: isOver ? '#BE496E' : 'white' }}>
        {!data && 'Drop here to receive data'}
        {data && `Received: ${data}`}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- When in need of implementing basic drop-related business logic such as file drop

#### 🛑 What not to do

- You can't use the returned handler setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs in
  your code.
- Absolutely avoid using `onDrop` handler setters to replace the standard drop handler props.
- `useDropZone` is meant to be used to abstract more complex hooks that need to control the drag n drop, for example:
  the drag-around hook.
- Using `useDropZone` handlers instead of the classic props approach it's just as bad as it sounds since you'll lose the React
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
