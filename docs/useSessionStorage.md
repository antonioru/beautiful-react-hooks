# useSessionStorage

A hook that enables effortless storage and retrieval of values in the
browser's [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage).

### 💡 Why?

- A fast and efficient method to implement the `sessionStorage` functionality in your React components

### Basic Usage:

```jsx harmony
import React, { useCallback } from 'react';
import { Pill, Paragraph, Icon } from 'antd';
import useSessionStorage from 'beautiful-react-hooks/useSessionStorage';

const NotificationBadgeExample = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useSessionStorage('demo-notification-count', notifications);

  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  const Actions = [
    <Button type="primary" onClick={clearNotifications}>
      You've got {notificationCount} new messages
    </Button>
  ]

  return (
    <DisplayDemo title="useSessionStorage" actions={Actions}>
      <Typography.Paragraph>
        Click on the following button to clear data from the <Tag>demo-notification-count</Tag> session storage key.
      </Typography.Paragraph>
    </DisplayDemo>
  )
};

<NotificationBadgeExample notifications={100} />
```

### Interface

```typescript
type SetValue<TValue> = (value: TValue | ((previousValue: TValue) => TValue)) => void

declare const useSessionStorage: <TValue>(storageKey: string, defaultValue?: any) => [TValue, SetValue<TValue>]
```

### Mastering the hooks

#### ✅ When to use

- When you need to get/set values from and to the `sessionStorage`

#### 🛑 When not to use

- Do not use this hook as a state manager, the `sessionStorage` is meant to be used for small pieces of data

<!-- Types -->
### Types
    
```typescript static
/**
 * Save a value on session storage
 */
declare const useSessionStorage: <TValue>(storageKey: string, defaultValue?: any) => [TValue | null, (value: TValue | ((previousValue: TValue) => TValue)) => void];
export default useSessionStorage;

```
<!-- Types:end -->