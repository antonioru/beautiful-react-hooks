# useConditionalTimeout

An async-utility hook that accepts a callback `function`, a `delay time` (*in milliseconds*) and a `condition`, then delays the execution of
the given function by the defined time when the condition is verified.

### 💡 Why?

- to start a timeout only after a given condition is verified;
- takes care of performing the given callback regardless the component re-renders;
- cancels the timeout when component unmount (or not, depends by the defined options) and/or the given condition verifies;

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Button } from 'beautiful-react-ui';
import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  useConditionalTimeout(() => {
    setShowContent(true)
  }, 2000, condition);

  return (
    <DisplayDemo>
      <Button color="primary" icon="clock" onClick={() => setCondition(true)}> Start a 2 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

### State & clear method:

The hook returns the state of the timeout (a boolean, cleared/not cleared) and a method to possibly clear it.

```jsx harmony
import { useState } from 'react';
import { Button, Paragraph } from 'beautiful-react-ui';
import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isCleared, clearTimeoutRef] = useConditionalTimeout(() => {
    setShowContent(true)
  }, 5000, condition);

  return (
    <DisplayDemo>
      <Paragraph>Content will show after 5 second starting from the following button click</Paragraph>
      <Button color="primary" icon="clock" onClick={() => setCondition(true)}>Start a 5 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
      {!isCleared && <Button onClick={clearTimeoutRef}>Cancel timeout</Button>}
      {isCleared && <Paragraph>Cleared</Paragraph>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

### Options:

`useConditionalTimeout` might accept a options object provided as eventual parameter.

#### cancelOnUnmount:

Defines whether the timeout should be cleared on unmount.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Button } from 'beautiful-react-ui';
import useConditionalTimeout from 'beautiful-react-hooks/useConditionalTimeout';

const ConditionalDelayedContentComponent = () => {
  const [condition, setCondition] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const options = { cancelOnUnmount: false };

  useConditionalTimeout(() => {
    setShowContent(true)
  }, 5000, condition, options);

  return (
    <DisplayDemo>
      <Button color="primary" icon="clock" onClick={() => setCondition(true)}>Start a 5 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

#### cancelOnConditionChange:

Defines whether the timeout should be cleared when the condition change.

In this example nothing will happen because when clicking on the button, 2 instance of useConditionalTimeout will be performed, and one of
them will change the condition.

**default**: `true`

```jsx harmony
import { useState } from 'react';
import { Button } from 'beautiful-react-ui';
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
    <DisplayDemo>
      <Button color="primary" icon="clock" onClick={() => setCondition(true)}>Start a 5 seconds timeout</Button>
      {showContent && <div style={{ fontSize: '3rem' }}>🕰</div>}
    </DisplayDemo>)
};

<ConditionalDelayedContentComponent />
```

### Mastering the hooks

#### ✅ When to use

- If there's the necessity to run a callback after a certain time and only when a certain condition is verified.
