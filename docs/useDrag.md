# useDrag

A hook that receives a reference to an HTML Element (using React's useRef) and enables it to be dragged.\
The hook returns a boolean value indicating whether the element is currently being dragged or not.

### Why? 💡

- takes care of attaching drag-related event listeners to the specified target
- takes care of emoving the listener when the component is unmounted.
- allow to easily implement draggable business logic

### Basic Usage:

Provide a DOM ref as first parameter to `useDrag`

```jsx harmony
import { useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref);

  return (
    <DisplayDemo title="useDrag">
      <div ref={ref} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Drag image:

```jsx harmony
import { useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref, {
    dragImage: 'https://beautifulinteractions.com/img/logo-colorful.svg',
    dragImageXOffset: 5,
    dragImageYOffset: 5,
  });

  return (
    <DisplayDemo title="useDrag">
      <div ref={ref} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Data transfer:

```jsx harmony
import { useRef } from 'react';
import useDrag from 'beautiful-react-hooks/useDrag';

const MyComponent = () => {
  const ref = useRef();
  const isDragged = useDrag(ref, {
    transfer: { id: 'item-id', foo: 'bar' },
    transferFormat: 'text/plain',
  });

  return (
    <DisplayDemo title="useDrag">
      <div ref={ref} style={{ padding: '20px 0', background: isDragged ? '#BE496E' : '#1D6C8B' }}>
        Draggable item...
        {isDragged && <span>is being dragged</span>}
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Mastering the hook

#### ✅ When to use

- If you require basic drag-related business logic

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
export interface UseDragOptions {
    dragImage?: string;
    dragImageXOffset?: number;
    dragImageYOffset?: number;
    transfer?: string | number | Record<string, any>;
    transferFormat?: string;
}
declare const useDrag: <TElement extends HTMLElement>(targetRef: RefObject<TElement>, options?: UseDragOptions) => boolean;
export default useDrag;

```
<!-- Types:end -->