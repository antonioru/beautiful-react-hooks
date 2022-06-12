# useQueryParam

### Why? 💡

- to ease the process of modify the query string in the URL for the current location.
- Works similar to useState hook
- built on top of react-router-dom's useSearchParams

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Input } from 'beautiful-react-ui'
import useQueryParam from 'beautiful-react-hooks/useQueryParam';

const ExampleComponent = () => {
  // second parameter is optional
  const [fooValue, setFoo] = useQueryParam('foo', {
    initialValue: 'bar',
    replaceState: false,
  })

  return (
    <DisplayDemo>
      <p>Current value of 'foo' param is '{fooValue}'</p>
      <Input value={fooValue} onChange={(e, nextValue) => setFoo(nextValue)} />
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```
