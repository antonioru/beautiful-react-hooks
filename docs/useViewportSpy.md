# useViewportSpy

A hook that uses the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) API to tell whether the
provided DOM Element is visible within the viewport.

### Why? 💡

- Asynchronously observes changes in the intersection of the given element with the document
- Can be used to perform animation when the component appear into the viewport

### Basic Usage:

```jsx harmony
import { useRef } from 'react';
import { Space, Typography, Tag } from 'antd';
import useViewportSpy from 'beautiful-react-hooks/useViewportSpy';

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref);

  return (
    <DisplayDemo>
      <Space direction="vertical">
        <div ref={ref} style={{ padding: 20, background: '#FF6B6C', borderRadius: 5 }}>
          Observed element
        </div>
        <Typography.Paragraph>
          is the observed element in viewport?
          <Tag color={isVisible ? 'green' : 'red'}>{isVisible ? 'yes' : 'no'}</Tag>
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<ViewportSpyComponent />
```

### Options

Pass [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver) as second
parameter to customize the behavior of the hook

```jsx harmony
import { useRef } from 'react';
import { Space, Typography, Tag } from 'antd';
import useViewportSpy from 'beautiful-react-hooks/useViewportSpy';

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref, { threshold: 0.6 });

  return (
    <DisplayDemo>
      <Space direction="vertical">
        <div ref={ref} style={{ padding: 20, background: '#FF6B6C', borderRadius: 5 }}>
          Observed element
        </div>
        <Typography.Paragraph>
          is the observed element in viewport?
          <Tag color={isVisible ? 'green' : 'red'}>{isVisible ? 'yes' : 'no'}</Tag>
        </Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<ViewportSpyComponent />
```

#### ✅ Pro tip:

This hook can be used to perform animations when a component/element enters or exit the viewport. To deeply
understand [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
please read [Using the Intersection Observer API to Trigger Animations and Transitions](https://alligator.io/js/intersection-observer)

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Uses the IntersectionObserverMock API to tell whether the given DOM Element (from useRef) is visible within the
 * viewport.
 */
declare const useViewportSpy: <TElement extends HTMLElement>(ref: RefObject<TElement>, options?: IntersectionObserverInit) => boolean | undefined;
export default useViewportSpy;

```
<!-- Types:end -->