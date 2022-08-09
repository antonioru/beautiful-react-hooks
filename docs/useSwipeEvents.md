# useSwipeEvents

Returns a set of handler setters to control swipe events.<br/>
It possibly accepts a DOM ref to target the event(s) to. If the target is not provided the events will be globally attached to
the `document` object.

Available handler setters: `onSwipeLeft`, `onSwipeRight`, `onSwipeUp`, `onSwipeDown`,  `onSwipeStart`,  `onSwipeMove`,  `onSwipeEnd`;

### Why? 💡

- takes care of adding the mouse/touch listeners to handle swipe both globally or to a defined target
- takes care of cleaning the listener when the component unmounts
- allows performing abstractions on swipe related events

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
    <DisplayDemo>
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
    <DisplayDemo>
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
    <DisplayDemo>
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
