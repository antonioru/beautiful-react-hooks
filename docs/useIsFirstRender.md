# useIsFirstRender

A hook that returns a boolean value indicating whether it's the first render or not.

This hook can be used to conditionally execute logic or render components based on whether it's the first time the component is being
rendered or if it's being re-rendered due to a state or prop change.

### 💡 Why?

- A useful tool for managing component rendering behavior and enables you to write more efficient and flexible code

### Basic Usage:

```jsx harmony
import { useState, useCallback } from 'react';
import { Button, Typography } from 'antd';
import useIsFirstRender from 'beautiful-react-hooks/useIsFirstRender';

const UseIsFirstRenderExample = () => {
  const [data, setData] = useState(0)
  const isFirstRender = useIsFirstRender();

  const setNewDate = useCallback(() => setData(Date.now()), []);

  return (
    <DisplayDemo title="useIsFirstRender">
      <Typography.Paragraph>Click on the button to update isFirstRender flag</Typography.Paragraph>
      <Typography.Paragraph>isFirstRender: {isFirstRender ? 'yes' : 'no'}</Typography.Paragraph>
      <Button type='primary' onClick={setNewDate}>
        Update data
      </Button>
    </DisplayDemo>
  );
};

<UseIsFirstRenderExample />
```

<!-- Types -->
### Types
    
```typescript static
declare const useIsFirstRender: () => boolean;
export default useIsFirstRender;

```
<!-- Types:end -->