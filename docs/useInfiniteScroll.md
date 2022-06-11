# useInfiniteScroll

Accepts an HTML Element ref, then returns a function that allows you to handle the infinite scroll for that specific element.

### Why? 💡

- takes care of adding the infinite scroll-related events listeners to the defined target
- takes care of cleaning the listener when the component will unmount
- allow to easily implement infinite scroll business logic

### Basic Usage:

Provide a DOM ref as first parameter to `useInfiniteScroll`

```jsx harmony
import { useState, useRef } from 'react';
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
    <DisplayDemo>
      <div style={{ maxHeight: 250, overflow: 'scroll' }} ref={targetElementRef}>
        <div style={{ height: 500, position: 'relative' }}>
          <p>Scroll to "load" more contents&hellip;</p>
          <ul>
            {data.map((item) => (
              <li>mock item no: {item}</li>
            ))}
          </ul>
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
