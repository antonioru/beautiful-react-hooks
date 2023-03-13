# useSwipeEvents

A hook that provides a set of callback setters to manage swipe events. It can optionally receive a DOM ref to specify the target element for
the event(s). If no target is provided, the events will be attached globally to the `document` object.

Available callback setters: `onSwipeLeft`, `onSwipeRight`, `onSwipeUp`, `onSwipeDown`,  `onSwipeStart`,  `onSwipeMove`,  `onSwipeEnd`;

### Why? 💡

- simplifies the handling of swipe gestures by adding mouse and touch listeners for swipe events globally or to a defined target.
- handles the cleanup of listeners when the component unmounts, avoiding memory leaks and unwanted behaviors.
- enables the creation of abstractions on swipe-related events, allowing you to focus on implementing your desired functionality without
  worrying about the details of swipe detection.

### Basic Usage:

Provide a DOM ref as first parameter to `useSwipeEvents`

```jsx harmony
import { useRef, useState } from 'react';
import useSwipeEvents from 'beautiful-react-hooks/useSwipeEvents';

const SwipeReporter = () => {
  const ref = useRef();
  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeMove, onSwipeDown } = useSwipeEvents(ref);
  const [lastSwipeInfo, setLastSwipeInfo] = useState();

  onSwipeLeft(setLastSwipeInfo);
  onSwipeRight(setLastSwipeInfo);
  onSwipeUp(setLastSwipeInfo);
  onSwipeDown(setLastSwipeInfo);

  onSwipeMove(console.log);

  return (
    <DisplayDemo title="useSwipeEvents">
      <div ref={ref} style={{ padding: 20, background: '#CF7A95' }}>
        Swipe me!
      </div>
      {lastSwipeInfo && (<>
        <p>Last swipe direction: {lastSwipeInfo.direction}</p>
        <p>Alpha-x: {lastSwipeInfo.alphaX}, Alpha-y: {lastSwipeInfo.alphaY} </p>
      </>)}
    </DisplayDemo>
  );
};

<SwipeReporter />
```

### Global events

Avoid providing any argument to `useMouseEvents` to attach the events globally

```jsx harmony
import { useRef, useState } from 'react';
import useSwipeEvents from 'beautiful-react-hooks/useSwipeEvents';

const SwipeReporter = () => {
  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown } = useSwipeEvents();
  const [lastSwipeInfo, setLastSwipeInfo] = useState();

  onSwipeLeft(setLastSwipeInfo);
  onSwipeRight(setLastSwipeInfo);
  onSwipeUp(setLastSwipeInfo);
  onSwipeDown(setLastSwipeInfo);

  return (
    <DisplayDemo title="useSwipeEvents">
      <div style={{ padding: 20, background: '#CF7A95' }}>
        Swipe around!
      </div>
      {lastSwipeInfo && (<>
        <p>Last swipe direction: {lastSwipeInfo.direction}</p>
        <p>Alpha-x: {lastSwipeInfo.alphaX}, Alpha-y: {lastSwipeInfo.alphaY} </p>
      </>)}
    </DisplayDemo>
  );
};

<SwipeReporter />
```

### Options

* **threshold**: defines the minimum amount of pixel "to move" to start swiping. _default: 15_.
* **preventDefault**: prevents the default behaviour of the mouse/touch events. _default: true_.

```jsx harmony
import { useRef, useState } from 'react';
import useSwipeEvents from 'beautiful-react-hooks/useSwipeEvents';

const SwipeReporter = () => {
  const ref = useRef();
  const options = { threshold: 25, preventDefault: false, usePassiveEvents: true };
  const { onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown } = useSwipeEvents(ref, options);
  const [lastSwipeInfo, setLastSwipeInfo] = useState();

  onSwipeLeft(setLastSwipeInfo);
  onSwipeRight(setLastSwipeInfo);
  onSwipeUp(setLastSwipeInfo);
  onSwipeDown(setLastSwipeInfo);

  return (
    <DisplayDemo title="useSwipeEvents">
      <div ref={ref} style={{ padding: 20, background: '#CF7A95' }}>
        Swipe me!
      </div>
      {lastSwipeInfo && (<>
        <p>Last swipe direction: {lastSwipeInfo.direction}</p>
        <p>Alpha-x: {lastSwipeInfo.alphaX}, Alpha-y: {lastSwipeInfo.alphaY} </p>
      </>)}
    </DisplayDemo>
  );
};

<SwipeReporter />
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
import { type CallbackSetter } from './shared/types';
/**
 * The swipe event state interface
 */
export interface SwipeEventState {
    clientX?: number;
    clientY?: number;
    direction: 'right' | 'left' | 'up' | 'down';
    alphaX: number;
    alphaY: number;
}
/**
 * The result of the hook
 */
interface UseSwipeEventsReturn {
    onSwipeLeft: CallbackSetter<SwipeEventState>;
    onSwipeRight: CallbackSetter<SwipeEventState>;
    onSwipeUp: CallbackSetter<SwipeEventState>;
    onSwipeDown: CallbackSetter<SwipeEventState>;
    onSwipeMove: CallbackSetter<SwipeEventState>;
    onSwipeStart: CallbackSetter<SwipeEventState>;
    onSwipeEnd: CallbackSetter<SwipeEventState>;
}
export interface UseSwipeEventsOpts {
    threshold?: number;
    preventDefault?: boolean;
    passive?: boolean;
}
/**
 * useSwipeEvents
 * @param ref
 * @param options
 */
declare const useSwipeEvents: <TElement extends HTMLElement>(ref?: RefObject<TElement> | undefined, options?: UseSwipeEventsOpts) => Readonly<UseSwipeEventsReturn>;
export default useSwipeEvents;

```
<!-- Types:end -->