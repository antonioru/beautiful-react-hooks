# useLongPress

A hook that facilitates the implementation of a long press functionality on a given target, supporting both mouse and touch events.

### Why? 💡

- Provides an easy way to add long-press functionality to a specific target element
- Automatically adds mouse event listeners to the specified target element
- Automatically removes the listeners when the component unmounts
- Enables abstractions on mouse-related and touch-related events

### Basic Usage:

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Typography, Alert } from 'antd';
import useLongPress from 'beautiful-react-hooks/useLongPress';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const ref = useRef();
  const [longPressCount, setLongPressCount] = useState(0)
  const { isLongPressing, onLongPressStart, onLongPressEnd } = useLongPress(ref);

  onLongPressStart(() => {
    setLongPressCount(() => {
      return longPressCount + 1
    });
  });

  onLongPressEnd(() => {
    setLongPressCount(() => {
      return longPressCount + 1
    });
  })

  return (
    <DisplayDemo title="useLongPress">
      <div ref={ref}>
        <Space direction="vertical">
          <Alert message="Long press this box to get information on the long press event" type="info" showIcon />
          <Tag color={isLongPressing ? 'green' : 'red'}>isLongPressing: {isLongPressing ? 'yes' : 'no'}</Tag>
          {!!longPressCount && (
            <Typography.Paragraph>
              Long press events count:
              <Tag color="green">{longPressCount}</Tag>
            </Typography.Paragraph>
          )}
        </Space>
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

### Press duration:

You can specify the duration of the long press by passing a number as the second argument to the hook.

```jsx harmony
import { useRef, useState } from 'react';
import { Tag, Space, Typography, Alert } from 'antd';
import useLongPress from 'beautiful-react-hooks/useLongPress';

const MyComponent = () => {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const ref = useRef();
  const { isLongPressing } = useLongPress(ref, 1000);

  return (
    <DisplayDemo title="useLongPress">
      <div ref={ref}>
        <Space direction="vertical">
          <Alert message="Long press this box to get information on the long press event" type="info" showIcon />
          <Tag color={isLongPressing ? 'green' : 'red'}>isLongPressing: {isLongPressing ? 'yes' : 'no'}</Tag>
        </Space>
      </div>
    </DisplayDemo>
  );
};

<MyComponent />
```

<!-- Types -->
