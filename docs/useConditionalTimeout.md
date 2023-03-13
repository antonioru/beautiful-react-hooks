# useConditionalTimeout

An asynchronous hook which takes in three parameters: a "callback", a "delay time" (in milliseconds), and a boolean value known as "
condition".\
It then postpones the execution of the given callback by the specified delay time, only when the provided condition changes to `true`

### 💡 Why?

- To start a timeout only after a certain condition has been confirmed;
- Handles the executing of the provided callback despite the component's re-rendering;
- Terminates the timeout when the component unmounts (or not, depending on the specified options) and/or when the provided condition is
  confirmed;

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Button, Space, Typography } from 'antd';

import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useConditionalTimeout(() => {
    setShowContent(true)
  }, 2000, condition);

  const Actions = [
    <Button type="primary" onClick={() => setCondition(true)} disabled={condition} loading={condition && !showContent}>
      {condition ? 'Timer started' : 'Start the timer'}&hellip;
    </Button>
  ]

  return (
    <DisplayDemo title="useConditionalTimeout" actions={Actions}>
      <Space direction="vertical">
        <Typography.Paragraph>
          Click on the following button to change the condition that triggers the 2 seconds timeout to true
        </Typography.Paragraph>
        <Typography.Paragraph>
          After timeout is elapsed a content is displayed
        </Typography.Paragraph>
        {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}

      </Space>
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

### State & clear method:

The hook will return the state of the timeout (either cleared or not cleared) and a function that may be used to clear it.

```jsx harmony
import { useState } from 'react';
import { Button, Typography } from 'antd';

import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isCleared, clearTimeoutRef] = useConditionalTimeout(() => {
    setShowContent(true)
  }, 5000, condition);

  const Actions = [
    <Button type="primary" onClick={() => setCondition(true)} disabled={condition}>Start a 5 seconds timeout</Button>
  ]

  return (
    <DisplayDemo title="useConditionalTimeout" actions={Actions}>
      <Typography.Paragraph>Content will show after 5 second starting from the following button click</Typography.Paragraph>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
      {!isCleared && !showContent && <Button onClick={clearTimeoutRef}>Cancel timeout</Button>}
      {isCleared && <Typography.Paragraph>Cleared</Typography.Paragraph>}
    </DisplayDemo>
  )
};

<ConditionalDelayedContentComponent />
```

### Options:

The third parameter is an optional object of options

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Button } from 'antd';
import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const options = { cancelOnUnmount: false };

  useConditionalTimeout(() => {
    setShowContent(true)
  }, 5000, condition, options);

  return (
    <DisplayDemo title="useConditionalTimeout">
      <Button type="primary" onClick={() => setCondition(true)}>Start a 5 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

#### cancelOnConditionChange:

Defines whether the timeout should be cleared when the condition changes.

In this example, clicking on the button will not trigger any action as there are two instances of useConditionalTimeout, and one of them
will modify the condition.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Button } from 'antd';
import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useConditionalTimeout(() => {
    setShowContent(true)
  }, 5000, condition);

  useConditionalTimeout(() => {
    setCondition(false)
  }, 2000, condition);

  return (
    <DisplayDemo title="useConditionalTimeout">
      <Button type="primary" onClick={() => setCondition(true)}>Start a 5 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

### Mastering the hooks

#### ✅ When to use

- If it is necessary to execute a callback after a specific duration and only when a specific condition has been verified.

<!-- Types -->
### Types
    
```typescript static
import { type GenericFunction } from './shared/types';
/**
 * An async-utility hook that accepts a callback function and a delay time (in milliseconds), then delays the
 * execution of the given function by the defined time from when the condition verifies.
 */
declare const useConditionalTimeout: <TCallback extends GenericFunction>(fn: TCallback, milliseconds: number, condition: boolean, options?: UseConditionalTimeoutOptios) => UseConditionalTimeoutReturn;
export interface UseConditionalTimeoutOptios {
    cancelOnUnmount?: boolean;
    cancelOnConditionChange?: boolean;
}
export type UseConditionalTimeoutReturn = [boolean, () => void];
export default useConditionalTimeout;

```
<!-- Types:end -->