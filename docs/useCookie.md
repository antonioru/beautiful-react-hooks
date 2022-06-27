# useCookie

A hook for storing, updating and deleting values into [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore).

### 💡 Why?

- A quick way to use the `CookieStore` in your React components.

### Basic Usage:

```jsx harmony
import { useCallback } from 'react';
import { Pill, Paragraph, Icon } from 'beautiful-react-ui';
import useCookie from 'beautiful-react-hooks/useCookie'; 

const UseCookieExample = () => {
  const {
    onError,
    cookieValue,
    deleteCookie,
    updateCookie
  } = useCookie('cookie-key', { secure: false, path: '/', defaultValue: 'default-value' });

  onError((error) => {
    console.log(error)

    alert(error.message)
  })
  
  const updateButtonClick = useCallback(() => {
    updateCookie('new-cookie-value')
  }, [])

  const deleteButtonClick = useCallback(() => {
    deleteCookie()
  }, [])

  return (
    <DisplayDemo>
      <Paragraph>Click on the button to update or clear from the cookieStore</Paragraph>
      <Paragraph>{cookieValue || ''}</Paragraph>
      <Pill color='primary' onClick={updateButtonClick}>
        <Icon name="envelope" />
        update the cookieStore
      </Pill>
      <Pill color='primary' onClick={deleteButtonClick}>
        <Icon name="envelope" />
        Clear the cookieStore
      </Pill>
    </DisplayDemo>
  )
};

<UseCookieExample />
```

### Mastering the hooks

#### ✅ When to use

- When you need to get/set values from the `cookieStore` 

#### 🛑 When not to use

- This hook(cookieStore) can't be used in server-side and http website.
