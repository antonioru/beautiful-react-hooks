# useTimeout

An async-utility hook that accepts a callback `function` and a `delay time` (*in milliseconds*), then delays the execution of the given
function by the defined time.

### 💡 Why?

- takes care of performing the given callback regardless the component re-renders;
- cancels the timeout when component unmount (or not, depends by the defined options);
- returns the timeout state (cleared/not cleared)
- returns a method to possibly cancel the set timeout (cause the component re-render)

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);

  // delay the function by 2000ms
  useTimeout(() => {
    setShowContent(true);
  }, 2000);

  return (
    <DisplayDemo>
      <p>Content will show in 2 seconds...</p>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### State & clear method:

The hook returns the state of the timeout (a boolean, cleared/not cleared) and a method to possibly clear it.

**Note:** programmatically clearing the timeout will cause the component re-render.

```jsx harmony
import { useState } from 'react';
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const [isCleared, clearTimeoutRef] = useTimeout(() => {
    setShowContent(true);
  }, 5000);

  return (
    <DisplayDemo>
      <p>Content will show in 5 seconds...</p>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
      {!isCleared && <button onClick={clearTimeoutRef}>Press here to cancel timeout</button>}
      {isCleared && <p>Cleared</p>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Options:

`useTimeout` might accept a options object provided as eventual parameter.

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import useTimeout from 'beautiful-react-hooks/useTimeout';

const DelayedContentComponent = () => {
  const [showContent, setShowContent] = useState(false);
  const options = { cancelOnUnmount: false };

  useTimeout(() => setShowContent(true), 3000, options);

  return (
    <DisplayDemo>
      <p>Content will show in 3 seconds but not be cleared on unmount</p>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>
  );
};

<DelayedContentComponent />
```

### Mastering the hook

#### ✅ When to use

- If in need to perform a function after a specified number of milliseconds regardless the component re-renders

#### 🛑 When not to use

- You can't use it asynchronously since this will break the [rules of hooks](https://reactjs.org/docs/hooks-rules.html)
