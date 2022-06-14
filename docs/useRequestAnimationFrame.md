# useRequestAnimationFrame

Takes care of running an animating function, provided as the first argument, while keeping track of its progress.

When used `useRequestAnimationFrame` immediately starts a looping call the provided function by using
[window.requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) under the hood.

The provided function receives the animation progress and a `next` function to be performed to keep the animation alive.

The loop ends when the animation progress reaches the value of 100. (or any other value provided as `finishAt`, check the options)

### Why? 💡

- Easily manage a requestAnimationFrame function within a React component

### Basic Usage

```jsx harmony
import { useRef } from 'react';
import { Alert } from 'beautiful-react-ui';
import useRequestAnimationFrame from 'beautiful-react-hooks/useRequestAnimationFrame';

const AnimationExample = () => {
  const ref = useRef();

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `translateX(${progress}px)`;
    next();
  });

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
    </DisplayDemo>
  );
};

<AnimationExample />
```

### Options

An object of options can be used as second argument to control the animation.

**Please note**: options.finishAt = -1 will cause an infinite animation

```jsx harmony
import { useRef } from 'react';
import { Alert } from 'beautiful-react-ui';
import useRequestAnimationFrame from 'beautiful-react-hooks/useRequestAnimationFrame';

const AnimationExample = () => {
  const ref = useRef();
  const options = { increment: 0.5, startAt: 0, finishAt: -1 };

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `rotate(${progress}deg)`;
    next();
  }, options);

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
    </DisplayDemo>
  );
};

<AnimationExample />
```

### onFinish callback

The hook returns an function to possibly set a callback when the animation finishes:

```jsx harmony
import { useRef, useState } from 'react';
import { Alert, Paragraph } from 'beautiful-react-ui';
import useRequestAnimationFrame from 'beautiful-react-hooks/useRequestAnimationFrame';

const AnimationExample = () => {
  const ref = useRef();
  const [isFinished, setIsFinished] = useState(false);
  const onFinish = useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `translateX(${progress}px)`;
    next();
  });

  onFinish(() => setIsFinished(true));

  return (
    <DisplayDemo>
      <div ref={ref}>
        <Alert color="primary">Animating content</Alert>
      </div>
      {isFinished && <Paragraph>Animation completed!</Paragraph>}
    </DisplayDemo>
  );
};

<AnimationExample />
```

#### ✅ Pro tip:

Control the speed of your animation by changing the increment value

### Mastering the hook

#### ✅ When to use

- When in need to perform requestAnimationFrame without re-rendering the component on each frame
