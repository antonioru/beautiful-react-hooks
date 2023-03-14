# useMutableState

This hook provides mutable states that trigger the component to re-render. It offers similar functionality to Svelte's reactivity, enabling
developers to write more efficient and concise code.

### Why? 💡

- Improves code streamlining by providing a reactive state that can be used to trigger a rerender

### Basic Usage:

```jsx harmony
import { Typography, Space, Button, Tag } from 'antd';
import useMutableState from 'beautiful-react-hooks/useMutableState';

const TestComponent = () => {
  const counter = useMutableState({ value: 0 });

  return (
    <DisplayDemo title="useMutableState">
      <Typography.Paragraph>
        Counter: <Tag color="green">{counter.value}</Tag>
      </Typography.Paragraph>
      <Space>
        <Button type="primary" onClick={() => counter.value += 1}>increase</Button>
        <Button type="primary" onClick={() => counter.value -= 1}>decrease</Button>
      </Space>
    </DisplayDemo>
  );
};

<TestComponent />
```

<!-- Types -->
