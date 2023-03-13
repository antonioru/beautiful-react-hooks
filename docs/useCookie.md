# useCookie

A hook that facilitates the storage, updating, and deletion of values within
the [CookieStore](https://developer.mozilla.org/en-US/docs/Web/API/CookieStore).

### 💡 Why?

- A quick and safe way to access the `CookieStore` in your React components.
- Improves readability of React components accessing the `CookieStore

### Basic Usage:

```jsx harmony
import { useCallback } from 'react';
import { Typography, Tag, Button } from 'antd';

import useCookie from 'beautiful-react-hooks/useCookie';

const UseCookieExample = () => {
  const { onError, cookieValue, deleteCookie, updateCookie } = useCookie('cookie-key', {
    secure: false,
    path: '/',
    defaultValue: 'default-value'
  });

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

  const Actions = [
    <Button type="primary" onClick={updateButtonClick}>
      Update the cookieStore
    </Button>,
    <Button onClick={deleteButtonClick}>
      Clear the cookieStore
    </Button>
  ]

  return (
    <DisplayDemo title="useCookie" actions={Actions}>
      <Typography.Paragraph>
        Click on the button to update or clear the cookieStore
      </Typography.Paragraph>
      <Tag color="blue">
        {cookieValue || 'no value'}
      </Tag>
    </DisplayDemo>
  )
};

<UseCookieExample />
```

### Mastering the hooks

#### ✅ When to use

- When you need to CRUD values from the `CookieStore`

#### 🛑 When not to use

- in server-only components (during SSR)

<!-- Types -->
### Types
    
```typescript static
import { type CallbackSetter } from './shared/types';
declare const useCookie: (key: string, options?: UseCookieOptions) => Readonly<UseCookieReturn>;
export declare enum CookieSameSite {
    STRICT = "strict",
    LAX = "lax",
    NONE = "none"
}
interface CookieStoreDeleteOptions {
    name?: string;
    domain?: string;
    path?: string;
}
interface CookieBase extends CookieStoreDeleteOptions {
    sameSite?: CookieSameSite;
}
export interface UseCookieOptions extends CookieBase {
    defaultValue?: string;
}
export interface UseCookieReturn {
    cookieValue?: string;
    updateCookie: (nextValue: string) => Promise<void>;
    deleteCookie: () => Promise<void>;
    onError: CallbackSetter<Error>;
}
export default useCookie;

```
<!-- Types:end -->