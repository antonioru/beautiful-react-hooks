# useRenderInfo

A hook that prints the number of renders for a given component, along with a timestamp of the most recent render and the time elapsed since
the last render.

### Why? 💡

- Easily display information on components render

### Basic Usage:

```jsx harmony
import { Typography } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';
import useRenderInfo from 'beautiful-react-hooks/useRenderInfo';

const RenderInfo = () => {
  const [seconds, setSeconds] = React.useState(0);

  // repeat the function each 1000ms
  useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  useRenderInfo('Module');

  return (
    <DisplayDemo title="useRenderInfo">
      <Typography.Paragraph>Check the console!</Typography.Paragraph>
    </DisplayDemo>
  );
};

<RenderInfo />
```

### Custom logs:

```jsx harmony
import { Typography } from 'antd';
import useInterval from 'beautiful-react-hooks/useInterval';
import useRenderInfo from 'beautiful-react-hooks/useRenderInfo';

const RenderInfo = () => {
  const [seconds, setSeconds] = React.useState(0);
  const info = useRenderInfo();

  // repeat the function each 1000ms
  useInterval(() => {
    setSeconds(1 + seconds);
  }, 1000);

  return (
    <DisplayDemo title="useRenderInfo">
      <Typography.Paragraph>{info.sinceLast} seconds passed from the last render!</Typography.Paragraph>
    </DisplayDemo>
  );
};

<RenderInfo />
```

### Mastering the hook

#### ✅ When to use

- When debugging a component

#### 🛑 What not to do

- In production build, you don't want useless logs in console :)

<!-- Types -->
### Types
    
```typescript static
export interface RenderInfo {
    readonly module: string;
    renders: number;
    timestamp: null | number;
    sinceLast: null | number | '[now]';
}
/**
 * useRenderInfo
 * @param moduleName
 * @param log
 * @returns {{renders: number, module: *, timestamp: null}}
 */
declare const useRenderInfo: (moduleName?: string, log?: boolean) => RenderInfo;
export default useRenderInfo;

```
<!-- Types:end -->