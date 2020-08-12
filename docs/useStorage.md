# useStorage

An utility to quickly create hooks to access both [Session Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage) and [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

### 💡 Why?

- A thunk function to abstract [useLocalStorage](./useLocalStorage.md) and [useSessionStorage](./useSessionStorage.md) onto.

```jsx harmony
import React, { useCallback } from 'react'; 
import { Pill, Paragraph, Icon } from 'beautiful-react-ui'; 
import { useStorage } from 'beautiful-react-hooks'; 

const NotificationBadgeExample = ({ notifications }) => {
  const useLocalStorage = useStorage('local');
  const [notificationCount, setNotificationCount] = useLocalStorage('demo-notification-count', notifications);
  
  const clearNotifications = useCallback(() => {
    setNotificationCount(0);
  }, [notificationCount]);

  return (
    <DisplayDemo>
        <Paragraph>Click on the badge to clear from the local storage</Paragraph>
        <Pill color="primary" onClick={clearNotifications}>
          <Icon name="envelope" />
          You've got {notificationCount} new messages
        </Pill>
    </DisplayDemo>
  )
};

<NotificationBadgeExample notifications={100}/>
```

### Mastering the hooks

#### ✅ When to use
 
- It's internally use to create [useLocalStorage](./useLocalStorage.md) and [useSessionStorage](./useSessionStorage.md).
