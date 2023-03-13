# useUpdateEffect

A hook that modifies the behavior of the `useEffect` hook by skipping the initial render. This hook is particularly useful in cases where
the effect should only run after the first update of the component, but not during the initial mount.

### Basic Usage:

```jsx harmony
import { useState, useEffect, useCallback } from 'react';
import { Alert, Space, Button } from 'antd';
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
    <DisplayDemo title="useUpdateEffect">
      <Space direction="vertical">
        <Alert type="info" message="Open a console to see result and try to click update date button" showIcon />
        <Button type='primary' onClick={setNewDate}>
          Update data
        </Button>
      </Space>
    </DisplayDemo>
  );
};

<UseUpdateEffectExample />
```

<!-- Types -->
### Types
    
```typescript static
import { type DependencyList, type EffectCallback } from 'react';
/**
 * A hook that runs an effect after the first render.
 * @param callback
 * @param deps
 */
declare const useUpdateEffect: (callback: EffectCallback, deps?: DependencyList) => void;
export default useUpdateEffect;

```
<!-- Types:end -->