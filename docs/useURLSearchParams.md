# useQueryParams

Very similar to `useQueryParam` (mind the final 's'), it eases the process of manipulate a query string with multiple values.

### Why? 💡

- Ease the process of use an always updated instance of URLSearchParams
- it's NOT built on top of version 6 of react-router-dom's useSearchParams, it is therefore compatible with older version

### Basic Usage:

```jsx harmony
import { useState, useRef } from 'react';
import { HashRouter as Router, useHistory } from 'react-router-dom'
import { Button, Input } from 'beautiful-react-ui'
import useURLSearchParams from 'beautiful-react-hooks/useURLSearchParams';
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
    <DisplayDemo>
      <p>Current value of 'foo' param is '{params.get('foo')}'</p>
      <p>Change the value of the foo param to see how this hook works</p>
    </DisplayDemo>
  );
};

<Router>
  <ExampleComponent />
</Router>
```
