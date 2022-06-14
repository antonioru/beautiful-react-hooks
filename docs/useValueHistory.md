# useValueHistory

Accepts a variable (*possibly a prop or a state*) and returns its history (changes through updates).

### Why? 💡

- You want to keep track of the history of a value

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import useValueHistory from 'beautiful-react-hooks/useValueHistory';
import useInterval from 'beautiful-react-hooks/useInterval';

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const countHistory = useValueHistory(count);

  useInterval(() => setCount(1 + count), 500);

  return (
    <DisplayDemo>
      <p>Count: {count}</p>
      <p>The history of the `count` state is:</p>
      <blockquote>
        {countHistory.join(', ')}
      </blockquote>
    </DisplayDemo>
  );
};

<TestComponent />
```
