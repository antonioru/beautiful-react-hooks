# useIsFirstRender

-- This hook return a boolean set to true at the mount time and then always false --

### 💡 Why?

- Give information about if it's first render

### Basic Usage:

```jsx harmony
import { useState, useCallback } from 'react';
import { Pill, Paragraph, Icon } from 'beautiful-react-ui';
import useIsFirstRender from 'beautiful-react-hooks/useIsFirstRender'; 

const UseIsFirstRenderExample = () => {
  const [data, setData] = useState(0)
  const isFirstRender = useIsFirstRender();

  const setNewDate = useCallback(() => setData(Date.now()), []);

  return (
    <DisplayDemo>
      <Paragraph>Click on the button to update isFirstRender flag</Paragraph>
      <Paragraph>isFirstRender: {isFirstRender ? 'yes' : 'no'}</Paragraph>
      <Pill color='primary' onClick={setNewDate}>
        <Icon name="envelope" />
        Update data
      </Pill>
    </DisplayDemo>
  );
};

<UseIsFirstRenderExample />
```

### Mastering the hooks

#### ✅ When to use
 
- When you need to get information if first render occurs
