# useResizeObserver

A hook that utilizes the [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver)  to monitor changes in the size
of the supplied element and yields DOMRect data.

### Why? 💡

- Monitors variations asynchronously in the DOM Rect of the specified HTML Element.
- Automatically disposes of the observer once the component unmounts.

### Basic Usage:

```jsx harmony
import { useRef } from 'react';
import { Input } from 'antd';
import useResizeObserver from 'beautiful-react-hooks/useResizeObserver';

const ResizeObserverExample = () => {
  const ref = useRef();
  const DOMRect = useResizeObserver(ref);

  return (
    <DisplayDemo title="useResizeObserver">
      <div ref={ref}>
        <Input.TextArea value="Resize me" />
      </div>
      {DOMRect && (
        <ul style={{ margin: '20px 0 10px 0', textAlign: 'left', padding: 0 }}>
          <li>Box width: {DOMRect.width}</li>
          <li>Box height: {DOMRect.height}</li>
          <li>Box left: {DOMRect.left}</li>
          <li>Box right: {DOMRect.right}</li>
          <li>Box top: {DOMRect.top}</li>
          <li>Box bottom: {DOMRect.bottom}</li>
        </ul>
      )}
    </DisplayDemo>
  );
};

<ResizeObserverExample />
```

### Debounce timout:

This hook employs a debounced callback to prevent extra-renders. By default, the timeout for the callback is set to 250ms. However, it's
possible to supersede the default timeout by passing a numeric value to useResizeObserver, in lieu of the HTMLElement reference.

```jsx harmony
import { useRef } from 'react';
import useResizeObserver from 'beautiful-react-hooks/useResizeObserver';

const ResizeObserverExample = () => {
  const ref = useRef();
  const DOMRect = useResizeObserver(ref, 1000);

  return (
    <DisplayDemo title="useResizeObserver">
      <div ref={ref}>
        <Input.TextArea value="Resize me" />
      </div>
      {DOMRect && (
        <ul style={{ margin: '20px 0 10px 0', textAlign: 'left', padding: 0 }}>
          <li>Box width: {DOMRect.width}</li>
          <li>Box height: {DOMRect.height}</li>
          <li>Box left: {DOMRect.left}</li>
          <li>Box right: {DOMRect.right}</li>
          <li>Box top: {DOMRect.top}</li>
          <li>Box bottom: {DOMRect.bottom}</li>
        </ul>
      )}
    </DisplayDemo>
  );
};

<ResizeObserverExample />
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
export type DOMRectValues = Pick<DOMRectReadOnly, 'bottom' | 'height' | 'left' | 'right' | 'top' | 'width'>;
/**
 * Uses the ResizeObserver API to observe changes within the given HTML Element DOM Rect.
 * @param elementRef
 * @param debounceTimeout
 * @returns {undefined}
 */
declare const useResizeObserver: <TElement extends HTMLElement>(elementRef: RefObject<TElement>, debounceTimeout?: number) => DOMRectValues | undefined;
export default useResizeObserver;

```
<!-- Types:end -->