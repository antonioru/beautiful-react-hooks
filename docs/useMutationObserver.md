# useMutationObserver

Uses the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) API to watch for changes being made to the DOM tree

### Why? 💡

- Asynchronously observes changes of the given HTML Element.
- Takes care of cleaning the observable once the component is dismount.

### Basic Usage:

```jsx harmony
import { useRef, useState } from 'react'; 
import useMutationObserver from 'beautiful-react-hooks/useMutationObserver'; 

const UseMutationObserverExample = () => {
  const ref = useRef();
  const [content, setContent] = useState('Hello world');
  const [mutationCount, setMutationCount] = useState(0);

  const incrementMutationCount = () =>
    setMutationCount((prev) => prev + 1);

  useMutationObserver(ref, incrementMutationCount);

   return (
    <DisplayDemo>
      <div
        style={{ width: '100%' }}
        ref={ref}
      >
        <div
          style={{
            resize: 'both',
            overflow: 'auto',
            maxWidth: '100%',
            border: '1px solid black',
          }}
        >
          <h2>Resize</h2>
        </div>
      </div>
      <div>
        <h3>Mutation count: {mutationCount}</h3>
      </div>
    </DisplayDemo>
   );
};

<UseMutationObserverExample />
```
