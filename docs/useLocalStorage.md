# useLocalStorage

A hook for storing data. Uses the [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to store values.

### 💡 Why?

- Quick and alternative way to reading/storing data.

### Basic Usage:

```jsx harmony
import { useLocalStorage } from 'beautiful-react-hooks'; 


const YourExample = () => {
  const [value, setValue] = useLocalStorage('StorageKey', 'defaultValue')

   const changeValueAndStoreIt = (v) => {
     // Sets the new value
       setValue('New Value is here')
  }
  
  return (
    <YourComponent>
      {value}
    </YourComponent>
  );
};

<YourExample />
```

### Use cases

At this case we want to create a kind of CRUD logic at client side.

```jsx harmony
import React, { useEffect } from 'beautiful-react-hooks'; 
import { useLocalStorage } from 'beautiful-react-hooks'; 


const NotificationBadge = ({ notification }) => {
   const [notificationCount, setNotificationCount] = useLocalStorage('notificationCount', 0)

   // Your updating logic here
   const getNotificationCount = (count) => {
      setNotificationCount(count)
  }

   const clearNotificationCount = () => {
      setNotificationCount(0)
  }
  
    useEffect(() => {
      getNotificationCount(notification)
  }, [notification])


  return (
    <Badge onClick={() => clearNotificationCount()}>
      {notificationCount}
    </Badge>
  )
};

<NotificationBadge notification={34}/>
```

### Mastering the hooks

#### ✅ When to use
 
- Important state values you may want to save

#### 🛑 When not to use

- For storing large data
