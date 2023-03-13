# useSearchQuery

A hook built on top of React Router v5 that facilitate access and manipulation of the 'search' query parameter.

### Why? 💡

- Facilitates editing the 'search' query string in the URL for the current location
- Functions similarly to the useState hook

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Input, Typography, Tag } from 'antd'
import useSearchQuery from 'beautiful-react-hooks/useSearchQuery';

const ExampleComponent = () => {
  const [searchValue, setSearch] = useSearchQuery('initial-value')

  return (
    <DisplayDemo title="useSearchQuery">
      <Typography.Paragraph>
        Current value of search param is <Tag color="green">{searchValue}</Tag>
      </Typography.Paragraph>
      <Input value={searchValue} onChange={(e, nextValue) => setSearch(nextValue)} />
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```

<!-- Types -->
### Types
    
```typescript static
/**
 * Ease the process of modify the 'search' query string in the URL for the current location.
 * It's just a shortcut/wrapper around useQueryParam
 */
declare const useSearchQuery: <TSearchKey extends string>(initialValue?: TSearchKey | undefined, replaceState?: boolean) => [TSearchKey, (nextValue?: TSearchKey | undefined) => void];
export default useSearchQuery;

```
<!-- Types:end -->