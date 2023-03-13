# useDropZone

A hook that receives an HTML Element ref and transforms it into a drop-zone capable of accepting data from a dragged object

### Why? 💡

- Handles the addition of drop-related event listeners to the specified target
- Cleans up the listener upon component unmounting
- Facilitates the implementation of drop-related business logic

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
    <DisplayDemo title="useDropZone">
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
export interface UseDropZoneResult {
    readonly isOver: boolean;
    readonly onDrop: CallbackSetter<DragEvent>;
}
declare const useDropZone: <TElement extends HTMLElement>(targetRef: RefObject<TElement>) => Readonly<UseDropZoneResult>;
export default useDropZone;

```
<!-- Types:end -->