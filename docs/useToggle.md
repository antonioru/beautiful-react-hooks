# useToggle

A hook that encapsulates the business logic of dealing with boolean values.

Provides a higher-level interface for dealing with boolean logic in React function component.

### Why? 💡

- Having multiple boolean states in an application often leads to code redundancy. This hook consolidates the implementation details of a
  singular boolean state, promoting code reusability and reducing code bloat.

### Basic Usage:

```jsx harmony
import { Typography, Tag, Button } from 'antd'
import useToggle from 'beautiful-react-hooks/useToggle'

const ComponentWillUnmount = () => {
  const [value, toggleValue] = useToggle()
  const tagColor = value ? 'green' : 'red'

  return (
          <DisplayDemo title="useToggle">
            <Typography.Paragraph>
              Toggle is <Tag color={tagColor}>{value ? 'on' : 'off'}</Tag>
            </Typography.Paragraph>
            <Button type="primary" onClick={toggleValue}>toggle value</Button>
          </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

### Initial state

```jsx harmony
import { Button, Typography, Tag } from 'antd'
import useToggle from 'beautiful-react-hooks/useToggle'

const ComponentWillUnmount = () => {
  const [value, toggleValue] = useToggle(true)
  const tagColor = value ? 'green' : 'red'

  return (
          <DisplayDemo title="useToggle">
            <Typography.Paragraph>
              Toggle is <Tag color={tagColor}>{value ? 'on' : 'off'}</Tag>
            </Typography.Paragraph>
            <Button type="primary" onClick={toggleValue}>toggle value</Button>
          </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

<!-- Types -->
### Types
    
```typescript static
/**
 * A quick and simple utility for toggle states
 */
declare const useToggle: (initialState?: boolean) => [boolean, () => void];
export default useToggle;

```
<!-- Types:end -->