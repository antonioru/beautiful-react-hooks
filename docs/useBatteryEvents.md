<a name="useBatteryEvents"></a>

## useBatteryEvents()
Returns a frozen object of callback setters to handle battery related events.<br/>

### Usage:

```jsx harmony
const BatteryReport = () => {
  const [ state, setState ] = useState({});
  const { onMount } = useLifecycle();
  const { onChargingChange, onChangingTimeChange, onDischargingTimeChange, onLevelChange } = useBatteryEvents();

  const handleBatteryChange = useCallback(async () => {
    if(window.navigator.getBattery) {
      const battery = await window.navigator.getBattery();

      setState(battery);
    }
  }, [state]);

  onChargingChange(handleBatteryChange);
  onChangingTimeChange(handleBatteryChange);
  onDischargingTimeChange(handleBatteryChange);
  onLevelChange(handleBatteryChange);
  onMount(handleBatteryChange);

  return (
    <div style={compStyle}>
      Battery level: {state.level ? state.level*100 : 0}%
    </div>
  );
};
```

**Kind**: global function  
