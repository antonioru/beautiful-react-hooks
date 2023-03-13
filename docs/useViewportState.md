# useViewportState

A hook that returns relevant information on the current viewport state.

It's built on top of [useWindowResize](./useWindowResize.md) and [useWindowScroll](./useWindowScroll.md).

### Why? 💡

- takes care of adding the listener for the window resize event.
- takes care of removing the listener when the component will unmount

### Basic Usage:

```jsx harmony
import { useState } from 'react';
import { Typography, Tag } from 'antd';
import useViewportState from 'beautiful-react-hooks/useViewportState';

const WindowSizeReporter = () => {
  const { width, height, scrollX, scrollY } = useViewportState();

  return (
    <DisplayDemo title="useViewportState">
      <Typography.Title>Window current properties</Typography.Title>
      <Typography.Paragraph>width: <Tag color="green">{width}</Tag></Typography.Paragraph>
      <Typography.Paragraph>height: <Tag color="green">{height}</Tag></Typography.Paragraph>
      <Typography.Paragraph>horizontal scroll: <Tag color="green">{scrollX}</Tag></Typography.Paragraph>
      <Typography.Paragraph>vertical scroll: <Tag color="green">{scrollY}</Tag></Typography.Paragraph>
    </DisplayDemo>
  );
};

<WindowSizeReporter />
```

### Mastering the hook

#### ✅ When to use

- When in need of reading common information about the current viewport

<!-- Types -->
### Types
    
```typescript static
export interface ViewportState {
    width: number;
    height: number;
    scrollX: number;
    scrollY: number;
}
/**
 * Returns updated information on the current viewport state
 */
declare const useViewportState: (debounceBy?: number) => ViewportState;
export default useViewportState;

```
<!-- Types:end -->