# useURLSearchParams

A hook that encapsulates the functionality of retrieving an always updated URLSearchParams object.

### Why? 💡

- simplify the process of obtaining an always up-to-date instance of the URLSearchParams object
- This hook is not based on the useSearchParams hook from version **6** of the `react-router-dom` library. Therefore, it is compatible with
  earlier versions of `react-router-dom`

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router, useHistory } from 'react-router-dom'
import { Button, Input } from 'antd'
import useURLSearchParams from 'beautiful-react-hooks/useURLSearchParams'
import useDidMount from 'beautiful-react-hooks/useDidMount'

const ExampleComponent = () => {
  const history = useHistory()
  const params = useURLSearchParams()
  const onMount = useDidMount()

  onMount(() => {
    params.set('foo', 'value')

    history.replace({
      search: params.toString(),
    })
  })

  return (
    <DisplayDemo title="useURLSearchParams">
      <p>Current value of 'foo' param is '{params.get('foo')}'</p>
      <p>Change the value of the foo param to see how this hook works</p>
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
 * Wraps the business logic of retrieve always updated URLSearchParams
 */
declare const useURLSearchParams: () => URLSearchParams;
export default useURLSearchParams;

```
<!-- Types:end -->