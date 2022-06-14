# useMediaQuery

Accepts a media query string then uses the [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia)
API to determine if it matches with the current document.

It also monitor the document changes to detect when it stops matching the given media query.

Returns the validity state of the given media query.

### Why? 💡

- takes care of re-rendering the component when the given media query changes
- get rid of the listener when the component will unmount

```jsx harmony
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';

const MediaQueryReporter = () => {
  const isSmall = useMediaQuery('(max-width: 48rem)');
  const isLarge = useMediaQuery('(min-width: 48rem)');

  return (
    <DisplayDemo>
      <p>Small view? {isSmall ? 'yes' : 'no'}</p>
      <p>Large view? {isLarge ? 'yes' : 'no'}</p>
    </DisplayDemo>
  );
};

<MediaQueryReporter />
```

### Mastering the hook

#### ✅ When to use

- When a component should have a different layout/behaviour on different medias
- Mount/Unmount sub-components according to a defined media-query

#### 🛑 When not to use

- Do not use this hook to define the user device
