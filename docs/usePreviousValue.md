# usePreviousValue

A hook that receives a variable, which can be either a prop or a state, and outputs its previous value from the last render cycle

### Why? 💡

- Enables monitoring of changes to component state/props
- Facilitates informed decisions on when to trigger component updates

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';
import usePreviousValue from 'beautiful-react-hooks/usePreviousValue';

const TestComponent = () => {
  const [seconds, setSeconds] = useState(0);
  const prevSeconds = usePreviousValue(seconds);

  useInterval(() => setSeconds(1 + seconds), 1000);

  return (
    <DisplayDemo title="usePreviousValue">
      <Typography.Paragraph>
        {seconds}s
      </Typography.Paragraph>
      <Typography.Paragraph>
        The previous value of the state 'seconds' was: <Tag color="green">{prevSeconds}</Tag>
      </Typography.Paragraph>
    </DisplayDemo>
  );
};

<TestComponent />
```

<!-- Types -->
### Types
    
```typescript static
/**
 * On each render returns the previous value of the given variable/constant.
 */
declare const usePreviousValue: <TValue>(value?: TValue | undefined) => TValue | undefined;
export default usePreviousValue;

```
<!-- Types:end -->