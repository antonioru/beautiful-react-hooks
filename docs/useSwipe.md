# useSwipe

Returns the state of the swipe gesture both on mobile or desktop.<br/>

### Why? 💡

- allows to easily receive the last swipe information
- takes care of adding the listeners both for mouse and touch events globally or to the defined target
- takes care of cleaning the listener when the component will unmount
- allows performing abstractions on swipe related logics

### Basic Usage:

Provide a DOM ref as first parameter to `useSwipe`

```jsx harmony
import { useRef, useState } from 'react';
import useSwipe from 'beautiful-react-hooks/useSwipe';

const SwipeReporter = () => {
  const ref = useRef();
  const swipeState = useSwipe(ref);
  const showDetail = swipeState.count > 0 || swipeState.swiping;

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: 20, background: '#CF7A95' }}>
        Swipe me!
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha: {Array.isArray(swipeState.alpha)
              ? (<span>x: {swipeState.alpha[0]}, y: {swipeState.alpha[1]} </span>)
              : (<span>{swipeState.alpha}</span>)
            }
            </p>
            <p>Swipe count: {swipeState.count}</p>
          </div>
        )}
      </div>
    </DisplayDemo>
  );
};

<SwipeReporter />
```

### Global events

Avoid providing any argument to `useSwipe`

```jsx harmony
import { useRef, useState } from 'react';
import useSwipe from 'beautiful-react-hooks/useSwipe';

const SwipeReporter = () => {
  const swipeState = useSwipe();
  const showDetail = swipeState.count > 0 || swipeState.swiping;

  return (
    <DisplayDemo>
      <div style={{ padding: 20, background: '#CF7A95' }}>
        Swipe everywehere you want!
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha: {Array.isArray(swipeState.alpha)
              ? (<span>x: {swipeState.alpha[0]}, y: {swipeState.alpha[1]} </span>)
              : (<span>{swipeState.alpha}</span>)
            }
            </p>
            <p>Swipe count: {swipeState.count}</p>
          </div>
        )}
      </div>
    </DisplayDemo>
  );
};

<SwipeReporter />
```

### Options

* **direction**: defines the swiping direction, can be `horizontal`, `vertical`, `both`. _default: "both"_.
* **threshold**: defines the minimum amount of pixel "to move" to start swiping. _default: 15_.
* **preventDefault**: prevents the default behaviour of the mouse/touch events. _default: true_.

```jsx harmony
import { useRef, useState } from 'react';
import useSwipe from 'beautiful-react-hooks/useSwipe';

const SwipeReporter = () => {
  const ref = useRef();
  const options = { direction: 'horizontal', threshold: 10, preventDefault: true };
  const swipeState = useSwipe(ref, options);
  const showDetail = swipeState.count > 0 || swipeState.swiping;

  return (
    <DisplayDemo>
      <div ref={ref} style={{ padding: 20, background: '#CF7A95' }}>
        Swipe me, horizontally...
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha: {Array.isArray(swipeState.alpha)
              ? (<span>x: {swipeState.alpha[0]}, y: {swipeState.alpha[1]} </span>)
              : (<span>{swipeState.alpha}</span>)
            }
            </p>
            <p>Swipe count: {swipeState.count}</p>
          </div>
        )}
      </div>
    </DisplayDemo>
  );
};

<SwipeReporter />
```
