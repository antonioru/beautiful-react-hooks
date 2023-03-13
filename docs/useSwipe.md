# useSwipe

A hook that provides access to the current state of swipe gestures, regardless of whether the user is on a mobile or desktop device

### Why? 💡

- facilitates the retrieval of the most recent swipe data
- registers global or target-specific listeners for both mouse and touch events
- automatically removes listeners upon unmounting of the component
- enables abstraction of swipe-related logic

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
    <DisplayDemo title="useSwipe">
      <div ref={ref} style={{ padding: 20, background: '#A1B5D8' }}>
        Swipe me!
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha-x: {swipeState.alphaX}, Alpha-y: {swipeState.alphaY} </p>
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

To register global listeners, simply invoke the hook without passing any arguments

```jsx harmony
import { useRef, useState } from 'react';
import useSwipe from 'beautiful-react-hooks/useSwipe';

const SwipeReporter = () => {
  const swipeState = useSwipe();
  const showDetail = swipeState.count > 0 || swipeState.swiping;

  return (
    <DisplayDemo title="useSwipe">
      <div style={{ padding: 20, background: '#A1B5D8' }}>
        Swipe everywehere you want!
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha-x: {swipeState.alphaX}, Alpha-y: {swipeState.alphaY} </p>
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
    <DisplayDemo title="useSwipe">
      <div ref={ref} style={{ padding: 20, background: '#A1B5D8' }}>
        Swipe me, horizontally...
        {showDetail && (
          <div>
            <p>Swipe information:</p>
            <p>Is swiping: {swipeState.swiping ? 'yes' : 'no'}</p>
            <p>Direction: {swipeState.direction}</p>
            <p>Alpha-x: {swipeState.alphaX}, Alpha-y: {swipeState.alphaY} </p>
            <p>Swipe count: {swipeState.count}</p>
          </div>
        )}
      </div>
    </DisplayDemo>
  );
};

<SwipeReporter />
```

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
import { type Direction } from './shared/swipeUtils';
/**
 * The options that can be passed to the hook
 */
export interface UseSwipeOptions {
    direction?: 'both' | 'horizontal' | 'vertical';
    threshold?: number;
    preventDefault?: boolean;
    passive?: boolean;
}
/**
 * The result of the hook
 */
export interface SwipeState {
    swiping: boolean;
    direction?: Direction;
    alphaX: number;
    alphaY: number;
    count: number;
}
/**
 * useSwipe hook
 */
declare const useSwipe: <TElement extends HTMLElement>(targetRef?: RefObject<TElement> | undefined, options?: UseSwipeOptions) => SwipeState;
export default useSwipe;

```
<!-- Types:end -->