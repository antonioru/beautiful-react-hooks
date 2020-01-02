<a name="useMediaQuery"></a>

## useMediaQuery()
Accepts a media query string then uses the
[window.matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API to determine if it
matches with the current document.<br />
It also monitor the document changes to detect when it matches or stops matching the media query.<br />
Returns the validity state of the given media query.

### Usage

```jsx harmony
const MediaQueryReporter = () => {
  const isTablet = useMediaQuery('(max-width: 48rem)');
  const isDesktop = useMediaQuery('(min-width: 48rem)');

  return (
    <div style={compStyle}>
      <p>Tablet view? {isTablet ? 'yes' : 'no'}</p>
      <p>Desktop view? {isDesktop ? 'yet' : 'no'}</p>
    </div>
   );
};
```

**Kind**: global function  
