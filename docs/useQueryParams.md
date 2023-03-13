# useQueryParams

Very similar to `useQueryParam` (mind the final 's'), it eases the process of manipulate a query string with multiple values.

### Why? 💡

- Ease the process of manipulate a query string (with multiple values) in the URL for the current location.
- Works similar to the useState hook
- it's NOT built on top of version 6 of react-router-dom's useSearchParams, it is therefore compatible with older version

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router } from 'react-router-dom'
import { Button, Typography, Input } from 'antd'
import useQueryParams from 'beautiful-react-hooks/useQueryParams';

const ExampleComponent = () => {
  // second parameter is optional
  const [foos, setFoos] = useQueryParams('foo[]', {
    initialValue: [1, 2, 3],
    replaceState: false,
  })

  const onClick = () => setFoos([4, 5, 6])

  const Actions = [
    <Button onClick={onClick} type="primary">
      Change to param to [4,5,6]
    </Button>
  ]

  return (
    <DisplayDemo actions={Actions}>
      <Typography.Paragraph>
        Current value of 'foo[]' param is '{foos.join(',')}'
      </Typography.Paragraph>
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
export interface UseQueryParamsOptions<TValue extends string[]> {
    initialValue?: TValue;
    replaceState?: boolean;
}
/**
 * Very similar to `useQueryParams`, it eases the process of manipulate a query string that handles multiple values
 */
declare const useQueryParams: <TValue extends string[]>(key: string, options?: UseQueryParamsOptions<TValue>) => [TValue, (nextValue?: TValue | undefined) => void];
export default useQueryParams;

```
<!-- Types:end -->