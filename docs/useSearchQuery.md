# useSearchQuery

### Why? 💡

- to ease the process of modify the 'search' query string in the URL for the current location.
- Works similar to useState hook
- built on top of useQueryParam

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Input } from 'beautiful-react-ui'
import useSearchQuery from 'beautiful-react-hooks/useSearchQuery';

const ExampleComponent = () => {
  const [searchValue, setSearch] = useSearchQuery('initial-value')

  return (
    <DisplayDemo>
      <p>Current value of search param is '{searchValue}'</p>
      <Input value={searchValue} onChange={(e, nextValue) => setSearch(nextValue)} />
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```
