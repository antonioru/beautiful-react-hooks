# useViewportSpy

Uses the [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) API to tell whether the given DOM
Element (from useRef) is visible within the viewport.

### Why? 💡

- Asynchronously observes changes in the intersection of the given element with the document
- Can be used to perform animation when the component appear within the viewport

### Basic Usage:

```jsx harmony
import { useRef } from 'react';
import useViewportSpy from 'beautiful-react-hooks/useViewportSpy';

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref);

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: '20px 0', background: '#1D6C8B' }}>
        Observed element
      </div>
      <div style={{ margin: '20px 0' }}>
        is the observed element in viewport? {isVisible ? 'yes' : 'no'}
      </div>
    </DisplayDemo>
  );
};

<ViewportSpyComponent />
```

### Options

The second argument could possibly be an object
of [IntersectionObserver options](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

```jsx harmony
import { useRef } from 'react';
import useViewportSpy from 'beautiful-react-hooks/useViewportSpy';

const ViewportSpyComponent = () => {
  const ref = useRef();
  const isVisible = useViewportSpy(ref, { threshold: 0.6 });

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: '20px 0', background: '#1D6C8B' }}>
        Observed element
      </div>
      <div style={{ margin: '20px 0' }}>
        is the observed element in viewport? {isVisible ? 'yes' : 'no'}
      </div>
    </DisplayDemo>
  );
};

<ViewportSpyComponent />
```

#### ✅ Pro tip:

This hook can be used to perform animations when a component/element enters or exit the viewport. To deeply
understand [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)
please read [Using the Intersection Observer API to Trigger Animations and Transitions](https://alligator.io/js/intersection-observer)
