# useLocalStorage

A hook that enables effortless storage and retrieval of values in the
browser's [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### 💡 Why?

- A fast and efficient method to implement the `localStorage` functionality in your React components

### Basic Usage:

```jsx harmony
import React, { useCallback } from 'react';
import { Button, Tag, Typography } from 'antd';
import useLocalStorage from 'beautiful-react-hooks/useLocalStorage';

const NotificationBadgeExample = ({ notifications }) => {
  const [notificationCount, setNotificationCount] = useLocalStorage('demo-notification-count', notifications);

  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  const Actions = [
    <Button type="primary" onClick={clearNotifications}>
      You've got {notificationCount} new messages
    </Button>
  ]

  return (
    <DisplayDemo title="useLocalStorage" actions={Actions}>
      <Typography.Paragraph>
        Click on the following button to clear data from the <Tag>demo-notification-count</Tag> local storage key.
      </Typography.Paragraph>
    </DisplayDemo>
  )
};

<NotificationBadgeExample notifications={100} />
```

### Interface

```typescript
type SetValue<TValue> = (value: TValue | ((previousValue: TValue) => TValue)) => void

declare const useLocalStorage: <TValue>(storageKey: string, defaultValue?: any) => [TValue, SetValue<TValue>]
```

### Mastering the hooks

#### ✅ When to use

- When you need to get/set values from and to the `localStorage`

#### 🛑 When not to use

- Do not use this hook as a state manager, the `localStorage` is meant to be used for small pieces of data

<!-- Types -->
### Types
    
```typescript static
/**
 * Save a value on local storage
 */
declare const useLocalStorage: <TValue>(storageKey: string, defaultValue?: any) => [TValue | null, (value: TValue | ((previousValue: TValue) => TValue)) => void];
export default useLocalStorage;

```
<!-- Types:end -->