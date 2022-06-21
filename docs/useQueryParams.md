# useQueryParams

Very similar to `useQueryParam` (mind the final 's'), it ease the process of manipulate a query string with multiple values.

### Why? 💡

- Ease the process of manipulate a query string (with multiple values) in the URL for the current location.
- Works similar to the useState hook
- it's not built on top of react-router-dom's useSearchParams, it is therefore compatible with older version

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Button, Input } from 'beautiful-react-ui'
import useQueryParams from 'beautiful-react-hooks/useQueryParams';

const ExampleComponent = () => {
  // second parameter is optional
  const [foos, setFoos] = useQueryParams('foo[]', {
    initialValue: [1, 2, 3],
    replaceState: false,
  })

  const onClick = () => setFoos([4, 5, 6])

  return (
    <DisplayDemo>
      <p>Current value of 'foo[]' param is '{foos.join(',')}'</p>
      <Button onClick={onClick} color="primary">
        Change to param to [4,5,6]
      </Button>
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```
