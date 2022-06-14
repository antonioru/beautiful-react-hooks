# useOnlineState

Uses the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) to define whether the browser is
connected or not.

Returns a `boolean` value that if is true indicates the browser is connected.

### Why? 💡

- You want to your component to re-render ether when the connection goes online or offline.

### Basic Usage:

```jsx harmony
import useOnlineState from 'beautiful-react-hooks/useOnlineState';

const ConnectionTest = () => {
  const isOnline = useOnlineState();
      
  return (
    <DisplayDemo>
      <p>Connection status: {isOnline ? 'online' : 'offline'}</p>
    </DisplayDemo>
  );
};

<ConnectionTest />
```
