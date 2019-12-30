<a name="useBattery"></a>

## useBattery()
Returns an array where the first item is the battery state from the `useBatteryState` hook and the second
item is the object of callback setters from `useBatteryEvents`.
It is intended as a shortcut to those hooks.

### Usage:

```jsx harmony
const BatteryReport = () => {
  const [batteryState, { onLevelChange }] = useBattery();


  onLevelChange(() => {
     if(batteryState < 15) {
       sendNotification(...notification);
     }
  });

  return (
    <div style={compStyle}>
      Battery level: {state.level ? state.level*100 : 0}%
    </div>
  );
};
```

**Kind**: global function  
