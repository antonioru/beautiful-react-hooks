import { useEffect } from 'react';
import useCallbackRef from './useCallbackRef';
import createCbSetterErrorProxy from './utils/createCbSetterErrorProxy';
import getNavigator from './utils/getNavigator';

const getBatteryThenAssignEvent = (nav, callbackRef, eventName) => {
  useEffect(() => {
    const cb = (...args) => {
      if (callbackRef.current) {
        callbackRef.current(...args);
      }
    };

    nav.getBattery().then((batteryManager) => batteryManager.addEventListener(eventName, cb));

    return () => {
      nav.getBattery().then((batteryManager) => batteryManager.removeEventListener(eventName, cb));
    };
  }, [callbackRef]);
};

/**
 * Returns a frozen object of callback setters to handle battery related events.<br/>
 *
 * ### Usage:
 *
 * ```jsx harmony
 * const BatteryReport = () => {
 *   const [ state, setState ] = useState({});
 *   const { onMount } = useLifecycle();
 *   const { onChargingChange, onChangingTimeChange, onDischargingTimeChange, onLevelChange } = useBatteryEvents();
 *
 *   const handleBatteryChange = useCallback(async () => {
 *     if(window.navigator.getBattery) {
 *       const battery = await window.navigator.getBattery();
 *
 *       setState(battery);
 *     }
 *   }, [state]);
 *
 *   onChargingChange(handleBatteryChange);
 *   onChangingTimeChange(handleBatteryChange);
 *   onDischargingTimeChange(handleBatteryChange);
 *   onLevelChange(handleBatteryChange);
 *   onMount(handleBatteryChange);
 *
 *   return (
 *     <div style={compStyle}>
 *       Battery level: {state.level ? state.level*100 : 0}%
 *     </div>
 *   );
 * };
 * ```
 */
const useBatteryEvents = () => {
  const nav = getNavigator();
  const [onChargingChangeRef, setOnChargingChangeRef] = useCallbackRef();
  const [onChargingTimeChangeRef, setOnChargingTimeChangeRef] = useCallbackRef();
  const [onDischargingTimeChangeRef, setOnDischargingTimeChangeRef] = useCallbackRef();
  const [onLevelChange, setOnLevelChange] = useCallbackRef();

  if (!nav || !nav.getBattery || typeof nav.getBattery !== 'function') {
    return createCbSetterErrorProxy('Battery API is not supported by your device');
  }

  // Handling the battery events
  getBatteryThenAssignEvent(nav, onChargingChangeRef, 'chargingchange');
  getBatteryThenAssignEvent(nav, onChargingTimeChangeRef, 'chargingtimechange');
  getBatteryThenAssignEvent(nav, onDischargingTimeChangeRef, 'dischargingtimechange');
  getBatteryThenAssignEvent(nav, onLevelChange, 'levelchange');

  return Object.freeze({
    onChargingChange: setOnChargingChangeRef,
    onChangingTimeChange: setOnChargingTimeChangeRef,
    onDischargingTimeChange: setOnDischargingTimeChangeRef,
    onLevelChange: setOnLevelChange,
  });
};

export default useBatteryEvents;
