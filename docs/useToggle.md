# useToggle

A quick and safe utility for boolean states

### Why? 💡

- frequent boolean states causes code duplication, this hook wraps-up the business logic of implementing a single boolean state

### Basic Usage:

```jsx harmony
import useToggle from 'beautiful-react-hooks/useToggle';
import { Button } from 'beautiful-react-ui'

const ComponentWillUnmount = () => {
  const [value, toggleValue] = useToggle()

  return (
    <DisplayDemo>
      <p>Toggle is {value ? 'on' : 'off'}</p>
      <Button color="primary" onClick={toggleValue}>toggle value</Button>
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```

### Initial state

```jsx harmony
import useToggle from 'beautiful-react-hooks/useToggle';
import { Button } from 'beautiful-react-ui'

const ComponentWillUnmount = () => {
  const [value, toggleValue] = useToggle(true)

  return (
    <DisplayDemo>
      <p>Toggle is {value ? 'on' : 'off'}</p>
      <Button color="primary" onClick={toggleValue}>toggle value</Button>
    </DisplayDemo>
  );
};

<ComponentWillUnmount />
```
