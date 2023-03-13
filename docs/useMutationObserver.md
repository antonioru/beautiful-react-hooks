# useMutationObserver

A hook that employs the [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) API to monitor changes made to
the Document Object Model (DOM) tree.

This hook enables asynchronous observation of changes to a specified HTML Element. It automatically handles the clean-up of the observation
process when the associated component is unmounted.

### Why? 💡

- allows for real-time monitoring of changes to the DOM, without requiring constant polling or manual inspection of the element.
- provides more granular control over the types of changes being observed, allowing developers to selectively listen for specific events
  such as attribute modifications, node insertions or removals, and so on.

### Basic Usage:

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Typography } from 'antd';
import useMutationObserver from 'beautiful-react-hooks/useMutationObserver';

const UseMutationObserverExample = () => {
  const ref = useRef();
  const [content, setContent] = useState('Hello world');
  const [mutationCount, setMutationCount] = useState(0);

  const incrementMutationCount = () =>
    setMutationCount((prev) => prev + 1);

  useMutationObserver(ref, incrementMutationCount);

  return (
    <DisplayDemo title="useMutationObserver">
      <div style={{ width: '100%' }} ref={ref}>
        <div
          style={{
            resize: 'both',
            overflow: 'auto',
            background: '#FF934F',
            maxWidth: '100%',
            padding: 20,
            border: '1px solid black',
            borderRadius: 6,
            marginBottom: 20,
          }}
        >
          <Typography.Paragraph>Resize me</Typography.Paragraph>
        </div>
      </div>
      <Typography.Paragraph>Mutations: <Tag color="green">{mutationCount}</Tag></Typography.Paragraph>
    </DisplayDemo>
  );
};

<UseMutationObserverExample />
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
declare const useMutationObserver: <TElement extends HTMLElement>(ref: RefObject<TElement>, callback: MutationCallback, options?: MutationObserverInit) => void;
export default useMutationObserver;

```
<!-- Types:end -->