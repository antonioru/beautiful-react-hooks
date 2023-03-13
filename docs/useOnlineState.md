# useOnlineState

A hook is available in this library that utilizes
the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine)  to determine the connectivity status of
the user's browser.

This hook returns a boolean value which indicates whether the browser is currently online or offline.

The primary use case for this hook is to facilitate re-rendering of a component when the browser's connectivity status changes. By using
this hook, your component can respond dynamically to changes in connectivity and update its behavior accordingly

### Why? 💡

- Your component requires network connectivity to function correctly and should behave differently when offline
- You need to trigger some functionality when the user's connectivity status changes, such as syncing data with a server when the user comes
  back online

### Basic Usage:

```jsx harmony
import { Tag, Typography } from 'antd';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';

const ConnectionTest = () => {
  const isOnline = useOnlineState();

  return (
          <DisplayDemo title="useOnlineState">
            <Typography.Paragraph>
              Connection status: <Tag color="green">{isOnline ? 'online' : 'offline'}</Tag>
            </Typography.Paragraph>
          </DisplayDemo>
  );
};

<ConnectionTest />
```

<!-- Types -->
### Types
    
```typescript static
/**
 * Uses the [Navigator online API](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine) to define
 * whether the browser is connected or not.
 */
declare const useOnlineState: () => boolean;
export default useOnlineState;

```
<!-- Types:end -->