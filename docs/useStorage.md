# useStorage

A hook for storing data. Uses the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) or [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) to store values.

### 💡 Why?

- Quick and alternative way to reading/storing data.

### Basic Usage:

```jsx harmony
import React, { useCallback } from 'react';
import { Button } from 'beautiful-react-ui';
import { useStorage } from 'beautiful-react-hooks';

const Counter = ({ defaultValue }) => {
  const localStorage = useStorage('local')({ counter: defaultValue });

  const incrementCounter = useCallback(() => {
    localStorage.set('counter', value => value + 1)
  }, [defaultValue]);

  return (
    <DisplayDemo>
        <Button onClick={incrementCounter}>
          Counter {localStorage.counter}
        </Button>
    </DisplayDemo>
  )
};

<Counter defaultValue={0}/>
```

### Mastering the hooks

#### ✅ When to use

- When you need to get/save data from and to the local/session storage

#### 🛑 When not to use

- Do not use this hook as a state manager:
  - the `localStorage` is meant to be used for small pieces of data
  - the `sessionStorage` is meant to be used for small pieces of data and it resets when the user leave the wesbite or closes the tab.
