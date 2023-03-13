# useObjectState

A hook has been developed to emulate the behavior of the now deprecated class Component.setState method. This hook aims to facilitate the
migration process of legacy class components to the new function components paradigm.

### Why? 💡

- Automates the process of destructing the previous state and replacing it with a new one, alleviating the burden of manually handling these
  operations in function components
- Allow developers to seamlessly transition their codebase from class components to function components without needing to restructure the
  existing codebase

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { Button, Typography } from 'antd';
import useObjectState from 'beautiful-react-hooks/useObjectState';

const UseObjectStateComponent = () => {
  const [state, setState] = useObjectState({ count: 0, title: 'Test title' })

  const reset = () => setState({ count: 0 })

  const increment = () => setState({ count: state.count + 1 })

  const decrement = () => setState({ count: state.count - 1 })

  const Actions = [
    <Button onClick={increment}>
      Increment counter
    </Button>,
    <Button onClick={decrement}>
      Decrement counter
    </Button>,
    <Button onClick={reset}>
      Reset counter
    </Button>
  ]

  return (
    <DisplayDemo title="useObjectState" actions={Actions}>
      <Typography.Paragraph>State:</Typography.Paragraph>
      <pre>{JSON.stringify(state, null, '\t')}</pre>
    </DisplayDemo>
  );
};

<UseObjectStateComponent />
```

### Mastering the hook

#### ✅ When to use

- When required to migrate legacy class components to the new function components paradigm

#### 🛑 What not to do

- Don't use this hook in place of `useReducer`.

<!-- Types -->
### Types
    
```typescript static
declare const useObjectState: <TState>(initialState: TState) => [TState, (state: Partial<TState>) => void];
export default useObjectState;

```
<!-- Types:end -->