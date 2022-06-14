# useDrag

Accepts an HTML Element ref then makes it draggable. Returns a boolean reporting whether the element in being dragged or not.

### Why? 💡

- takes care of adding the drag-related events listeners to the defined target
- takes care of cleaning the listener when the component will unmount
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
    <DisplayDemo>
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
    <DisplayDemo>
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
    <DisplayDemo>
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

- When in need of implementing basic drag-related business logic
