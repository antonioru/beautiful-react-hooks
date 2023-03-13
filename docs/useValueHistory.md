# useValueHistory

A hook that takes a variable, which can be a prop or a state, and returns an array of its previous values. This hook is useful for tracking
changes in a variable across multiple renders and allows developers to compare the current value with its previous values.

Overall, the "usePrevious" hook is a helpful tool for debugging and improving the performance of React components that rely on the history
of a specific variable

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Tag, Typography } from 'antd';
import useValueHistory from 'beautiful-react-hooks/useValueHistory';
import useInterval from 'beautiful-react-hooks/useInterval';

const TestComponent = () => {
  const [count, setCount] = useState(0);
  const countHistory = useValueHistory(count);

  useInterval(() => setCount(1 + count), 500);

  return (
    <DisplayDemo title={useValueHistory}>
      <Typography.Paragraph>Count: <Tag color="blue">{count}</Tag></Typography.Paragraph>
      <Typography.Paragraph>The history of the `count` state is:</Typography.Paragraph>
      <Tag color="green">
        {countHistory.join(', ')}
      </Tag>
    </DisplayDemo>
  );
};

<TestComponent />
```

<!-- Types -->
### Types
    
```typescript static
/**
 * Accepts a variable (possibly a prop or a state) and returns its history (changes through updates).
 */
declare const useValueHistory: <TValue = unknown>(value: TValue, distinct?: boolean) => TValue[];
export default useValueHistory;

```
<!-- Types:end -->