```jsx noeditor
// for demo purposes only
const style = window.compStyle = {
  background: '#FDFEFD',
  width: '250px',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 0 10px rgba(20, 20, 20, .1)',
  margin: '10px auto',
};
```

```jsx harmony
import { useMediaQuery } from 'beautiful-react-hooks'; 

const MediaQueryReporter = () => {
  const isTablet = useMediaQuery('(max-width: 48rem)'); 
  const isDesktop = useMediaQuery('(min-width: 48rem)'); 
  
  return (
   <div style={compStyle}>
     <p>Tablet view? {isTablet ? 'yes' : 'no'}</p>
     <p>Desktop view? {isDesktop ? 'yes' : 'no'}</p>
   </div>
  );
};

<MediaQueryReporter />
```
