# useDefaultedState

A hook that functions similar to `useState`, with the added capability to receive a defaultValue and potentially an initialState.\
This hook guarantees that the state returned is always set to defaultValue in the event of it being null or undefined.

### Why? 💡

- Avoids side-effects by ensuring a default state value

### Basic Usage:

```jsx harmony
import { Typography, Button } from 'antd';
import useDefaultedState from 'beautiful-react-hooks/useDefaultedState';

/**
 * useDefaultedState example component
 */
const DefaultedStateExample = () => {
  const placeholder = { name: 'John Doe' };
  const data = { name: 'Antonio Rù' };
  const [user, setUser] = useDefaultedState(placeholder, data);

  const Actions = [
    <Button type="primary" onClick={() => setUser()}>Change to 'undefined'</Button>,
  ]

  return (
    <DisplayDemo title="useDefaultedState" actions={Actions}>
      <Typography.Paragraph>The user name is: {user.name}</Typography.Paragraph>
    </DisplayDemo>
  );
};

<DefaultedStateExample />
```

### Mastering the hook

#### ✅ When to use

- If you require a secure state that must never be null or undefined

<!-- Types -->
### Types
    
```typescript static
/**
 * Returns a safe state by making sure the given value is not null or undefined
 */
declare const useDefaultedState: <TValue>(defaultValue: TValue, initialState?: TValue | undefined) => [TValue, (nextState: TValue) => void];
export default useDefaultedState;

```
<!-- Types:end -->