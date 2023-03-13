# useRequestAnimationFrame

A hook that facilitates the execution of javascript animations.

Upon usage, this hook initiates a recurring call to the provided function, using the
built-in [window.requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) function under the
hood.

The provided function received two arguments: the current progress of the animation and a next function that must be executed to sustain the
animation.

The animation loop will terminate once the progress value reaches 100, although any other value can be specified using the `finishAt`
option.

### Why? 💡

- Easily manage requestAnimationFrame within a React component

### Basic Usage

```jsx harmony
import { useRef } from 'react';
import { Alert } from 'antd';
import useRequestAnimationFrame from 'beautiful-react-hooks/useRequestAnimationFrame';

const AnimationExample = () => {
  const ref = useRef();

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `translateX(${progress}px)`;
    next();
  });

  return (
    <DisplayDemo title="useRequestAnimationFrame">
      <div ref={ref}>
        <Alert color="primary" message="Animating content" />
      </div>
    </DisplayDemo>
  );
};

<AnimationExample />
```

### Options

The animation can be fine-tuned using an options object as the second argument.

Please note that setting `options.finishAt` to a value of `-1` will result in an infinite animation.

```jsx harmony
import { useRef } from 'react';
import { Alert } from 'antd';
import useRequestAnimationFrame from 'beautiful-react-hooks/useRequestAnimationFrame';

const AnimationExample = () => {
  const ref = useRef();
  const options = { increment: 0.5, startAt: 0, finishAt: -1 };

  useRequestAnimationFrame((progress, next) => {
    ref.current.style.transform = `rotate(${progress}deg)`;
    next();
  }, options);

  return (
    <DisplayDemo title="useRequestAnimationFrame">
      <div ref={ref}>
        <Alert color="primary" message="Animating content" />
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
import { Alert, Typography } from 'antd';
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
    <DisplayDemo title="useRequestAnimationFrame">
      <div ref={ref}>
        <Alert color="primary" message="Animating content" />
      </div>
      {isFinished && <Typography.Paragraph>Animation completed!</Typography.Paragraph>}
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

<!-- Types -->
### Types
    
```typescript static
import { type CallbackSetter, type GenericFunction } from './shared/types';
export interface UseRequestAnimationFrameOpts {
    increment?: number;
    startAt?: number;
    finishAt?: number;
}
/**
 * Takes care of running an animating function, provided as the first argument, while keeping track of its progress.
 */
declare const useRequestAnimationFrame: <T extends GenericFunction>(func: T, options?: UseRequestAnimationFrameOpts) => CallbackSetter<void>;
export default useRequestAnimationFrame;

```
<!-- Types:end -->