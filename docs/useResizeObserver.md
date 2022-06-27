# useResizeObserver

Uses the [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) API to observe changes to the size of the provided element and returns DOMRect data

### Why? 💡

- Asynchronously observes changes in the DOM Rect of the given HTML Element.
- Takes care of cleaning the observable once the component is dismount.

### Basic Usage:

```jsx harmony
import { useRef } from 'react'; 
import useResizeObserver from 'beautiful-react-hooks/useResizeObserver'; 

const ResizeObserverExample = () => {
   const ref = useRef();
   const DOMRect = useResizeObserver(ref);

   return (
     <DisplayDemo>
        <textarea ref={ref} value="Resize me" />
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

useResizeObserver uses a debounced callback to avoid useless renders, by default the callback timeout is set to
`250ms`. 
By passing a numeric value to useResizeObserver, other than the HTMLElement reference, it's possible to override the
default timeout, as per the following example:

```jsx harmony
import { useRef } from 'react'; 
import useResizeObserver from 'beautiful-react-hooks/useResizeObserver'; 

const ResizeObserverExample = () => {
   const ref = useRef();
   const DOMRect = useResizeObserver(ref, 1000);

   return (
     <DisplayDemo>
        <textarea ref={ref} value="Resize me" />
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
