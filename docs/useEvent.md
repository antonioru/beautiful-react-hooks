# useEvent

A hook that allows you to specify an HTML element and an event name. It sets up a listener so that when that event happens on that element,
your code will be notified and can take action. Essentially, it lets you "listen" for events on a specific HTML element

### Why? 💡

- Automatically adds the event listener to the element, so you don't have to do it manually
- Automatically removes the event listener when the component unmounts

### Basic Usage:

`useEvents` returns a callback setter for the defined event to be immediately invoked.

**Please note**: the callback setter is only meant to change the callback reference, it does not cause the component rerender unless
differently specified in the function's body. It's not invoked asynchronously

```jsx harmony
import { useState, useRef } from 'react';
import useEvent from 'beautiful-react-hooks/useEvent';

const TestComponent = () => {
  const targetRef = useRef()
  const [clicksNo, setClicksNo] = useState(0)
  const onTargetClick = useEvent(targetRef, 'click');

  onTargetClick((event) => {
    setClicksNo(clicksNo + 1);
  });

  return (
          <DisplayDemo title="useEvent">
            <div ref={targetRef}>
              Click on this text to increase the number of clicks: {clicksNo}
            </div>
          </DisplayDemo>
  );
};

<TestComponent />
```

### Options:

Since `useEvent` uses [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
under the hood, it's possible to specify the listener characteristics by passing an options object as third parameter.

```jsx harmony
import { useState, useRef } from 'react';
import useEvent from 'beautiful-react-hooks/useEvent';

const TestComponent = () => {
  const targetRef = useRef()
  const [clicksNo, setClicksNo] = useState(0)
  const onTargetClick = useEvent(targetRef, 'click', {
    capture: true,
    passive: true,
    once: true
  });

  onTargetClick((event) => {
    setClicksNo(clicksNo + 1);
  });

  return (
          <DisplayDemo title="useEvent">
            <div ref={targetRef}>
              Click on this text to increase the number of clicks: {clicksNo}
            </div>
          </DisplayDemo>
  );
};

<TestComponent />
```

### Mastering the hook

#### ✅ When to use

- When in need of listening to a specific event from an HTMLElement

#### 🛑 What not to do

- When you can archive the same result by using a callback, **please remember listening/firing events directly to/from HTMLElement(s) in
  React is considered an anti-pattern**
- You can't use the returned callback setter asynchronously, it will not have any effect but changing the handler possibly leading to bugs
  in your code

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Accepts the reference to an HTML Element and an event name then performs the necessary operations to listen to the event
 * when fired from that HTML Element.
 */
declare const useEvent: <TEvent extends Event, TElement extends HTMLElement = HTMLElement>(ref: RefObject<TElement>, eventName: string, options?: AddEventListenerOptions) => import("./shared/types").CallbackSetter<TEvent>;
export default useEvent;

```
<!-- Types:end -->