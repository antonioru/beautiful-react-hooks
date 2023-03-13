# useMediaQuery

A hook that takes in a media query string and utilizes the [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
API to check whether it corresponds to the present document.

Additionally, it tracks changes in the document to detect when it no longer corresponds to the provided media query.

The hook returns the validity status of the media query provided.

```jsx harmony
import { Tag, Typography, Space, Alert } from 'antd';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

const MediaQueryReporter = () => {
  const isSmall = useMediaQuery('(max-width: 48rem)');
  const isLarge = useMediaQuery('(min-width: 48rem)');

  return (
    <DisplayDemo title="useMediaQuery">
      <Space direction="vertical">
        <Alert type="info" message="Resize the browser window to see the changes" showIcon />
        <Typography.Paragraph>Small view? <Tag color={isSmall ? 'green' : 'red'}>{isSmall ? 'yes' : 'no'}</Tag></Typography.Paragraph>
        <Typography.Paragraph>Large view? <Tag color={isLarge ? 'green' : 'red'}>{isLarge ? 'yes' : 'no'}</Tag></Typography.Paragraph>
      </Space>
    </DisplayDemo>
  );
};

<MediaQueryReporter />
```

### Mastering the hook

#### ✅ When to use

- If a component needs to display a different layout or behavior on various media types
- Conditionally render sub-components based on a specified media query

#### 🛑 When not to use

- Avoid using this hook to identify the user's device, use agent detection instead

<!-- Types -->
### Types
    
```typescript static
/**
 * Accepts a media query string then uses the
 * [window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
 * matches with the current document.<br />
 * It also monitor the document changes to detect when it matches or stops matching the media query.<br />
 * Returns the validity state of the given media query.
 *
 */
declare const useMediaQuery: (mediaQuery: string) => boolean;
export default useMediaQuery;

```
<!-- Types:end -->