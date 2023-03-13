# useInfiniteScroll

A hook that accepts an HTML Element reference and returns a function that facilitates handling infinite scroll for that specific element.

### Why? 💡

- adds the required event listeners for infinite scrolling to the defined target
- takes care of cleaning up the event listener when the component is unmounted, reducing the risk of memory leaks in your application
- simplifies the implementation of infinite scroll business logic by providing an intuitive and easy-to-use interface

### Basic Usage:

Provide a DOM ref as first parameter to `useInfiniteScroll`

```jsx harmony
import { useState, useRef } from 'react';
import { Alert, List, Typography } from 'antd';
import useInfiniteScroll from 'beautiful-react-hooks/useInfiniteScroll';

const generateRandomNo = () => Math.floor(Math.random() * 11)
const initialData = Array.from({ length: 40 }).map(generateRandomNo)

/**
 * Fake fetch, resolves an array of random numbers
 * @param items
 * @returns {Promise<unknown>}
 */
const fetchMock = (items = 10) => new Promise((resolve) => {
  setTimeout(() => {
    const data = Array.from({ length: items }).map(generateRandomNo)
    resolve(data)
  }, 1000)
})

/**
 * Uses fetchMock to mimic an inifinite loading
 * @returns {JSX.Element}
 * @constructor
 */
const TestComponent = () => {
  const targetElementRef = useRef();
  const onInfiniteScroll = useInfiniteScroll(targetElementRef);
  const [isFetching, setIsFetching] = useState(false)
  const [data, setData] = useState(initialData)

  onInfiniteScroll(() => {
    if (!isFetching) {
      setIsFetching(true)

      fetchMock()
              .then((next) => setData([...data, ...next]))
              .finally(() => setIsFetching(false))
    }
  })

  return (
          <DisplayDemo title="useInfiniteScroll">
            <div style={{ maxHeight: 250, overflow: 'scroll' }} ref={targetElementRef}>
              <div style={{ height: 500, position: 'relative' }}>
                <Alert type="info" message="Scroll to load more content" />
                <List
                        bordered
                        dataSource={data}
                        renderItem={(_, item) => (
                                <List.Item>
                                  <Typography.Text mark>mock item no: {item}</Typography.Text>
                                </List.Item>
                        )}
                />
                {isFetching && (
                        <div style={{ opacity: 0.6, textAlign: 'center', marginBottom: 20 }}>
                          Loading next data...
                        </div>
                )}
              </div>
            </div>
          </DisplayDemo>
  );
};

<TestComponent />
```

### Mastering the hook

#### ✅ When to use

- Use this hook to abstract your own infinite scroll business logic and streamline the implementation of this functionality in your
  application

#### 🛑 What not to do

- Avoid using this hook to debounce or throttle your functions. If you're implementing a pagination-like infinite scroll, it's best to
  handle this debounce/throttle functionality yourself, to ensure that your application behaves exactly as you intend.

<!-- Types -->
### Types
    
```typescript static
import { type RefObject } from 'react';
/**
 * Accepts an HTML Element ref, then returns a function that allows you to handle the infinite
 * scroll for that specific element.
 */
declare const useInfiniteScroll: <TElement extends HTMLElement>(ref: RefObject<TElement>, delay?: number) => import("./shared/types").CallbackSetter<unknown>;
export default useInfiniteScroll;

```
<!-- Types:end -->