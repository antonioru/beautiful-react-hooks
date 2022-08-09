# useUpdateEffect

-- This hook is a modification to `useEffect` hook that is skipping the first render --

### 💡 Why?

- Sometimes you do not want to run useEffect on the first render and this hook allows you to do this

### Basic Usage:

```jsx harmony
import { useState, useEffect, useCallback } from 'react';
import { Pill, Paragraph, Icon } from 'beautiful-react-ui';
import useUpdateEffect from 'beautiful-react-hooks/useUpdateEffect'; 

const UseUpdateEffectExample = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    console.log('Normal useEffect', { data })
  }, [data])

  useUpdateEffect(() => {
    console.log('Update useEffect only', { data })
  }, [data])

  const setNewDate = useCallback(() => setData(Date.now()), []);

  return (
    <DisplayDemo>
      <Paragraph>Open a console to see result and try to click update date button</Paragraph>
      <Pill color='primary' onClick={setNewDate}>
        <Icon name="envelope" />
        Update data
      </Pill>
    </DisplayDemo>
  );
};

<UseUpdateEffectExample />
```

### Mastering the hooks

#### ✅ When to use
 
- When you want to skip first render of useEffect
