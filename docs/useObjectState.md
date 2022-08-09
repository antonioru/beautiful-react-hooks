# useObjectState

React state hook that creates setState method which works similar to how useState works, merges object changes into the current state.

### Why? 💡

- takes care of automatically destruct the previous state and override this with a new one,

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { Button } from 'beautiful-react-ui';
import useObjectState from 'beautiful-react-hooks/useObjectState';

const UseObjectStateComponent = () => {
  const [state, setState] = useObjectState({ count: 0, title: 'Test title' })

  const reset = () => setState({ count: 0 })

  const increment = () => setState({ count: state.count + 1 })

  const decrement = () => setState({ count: state.count - 1 })

  return (
    <DisplayDemo>
      <p>State:</p>
      <p>{JSON.stringify(state, null, 2)}</p>
      <Button onClick={increment}>
        Increment counter
      </Button>
      <Button onClick={decrement}>
        Decrement counter
      </Button>
      <Button onClick={reset}>
        Reset counter
      </Button>
    </DisplayDemo>
  );
};

<UseObjectStateComponent />
```

### Mastering the hook

#### ✅ When to use

- When in need of manage the state which is an object,
