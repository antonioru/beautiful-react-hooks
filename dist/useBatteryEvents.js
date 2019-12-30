"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useCallbackRef9 = _interopRequireDefault(require("./useCallbackRef"));

var _createCbSetterErrorProxy = _interopRequireDefault(require("./utils/createCbSetterErrorProxy"));

var _getNavigator = _interopRequireDefault(require("./utils/getNavigator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getBatteryThenAssignEvent = function getBatteryThenAssignEvent(nav, callbackRef, eventName) {
  (0, _react.useEffect)(function () {
    var cb = function cb() {
      if (callbackRef.current) {
        callbackRef.current.apply(callbackRef, arguments);
      }
    };

    nav.getBattery().then(function (batteryManager) {
      return batteryManager.addEventListener(eventName, cb);
    });
    return function () {
      nav.getBattery().then(function (batteryManager) {
        return batteryManager.removeEventListener(eventName, cb);
      });
    };
  }, [callbackRef]);
};

var useBatteryEvents = function useBatteryEvents() {
  var nav = (0, _getNavigator["default"])();

  var _useCallbackRef = (0, _useCallbackRef9["default"])(),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      onChargingChangeRef = _useCallbackRef2[0],
      setOnChargingChangeRef = _useCallbackRef2[1];

  var _useCallbackRef3 = (0, _useCallbackRef9["default"])(),
      _useCallbackRef4 = _slicedToArray(_useCallbackRef3, 2),
      onChargingTimeChangeRef = _useCallbackRef4[0],
      setOnChargingTimeChangeRef = _useCallbackRef4[1];

  var _useCallbackRef5 = (0, _useCallbackRef9["default"])(),
      _useCallbackRef6 = _slicedToArray(_useCallbackRef5, 2),
      onDischargingTimeChangeRef = _useCallbackRef6[0],
      setOnDischargingTimeChangeRef = _useCallbackRef6[1];

  var _useCallbackRef7 = (0, _useCallbackRef9["default"])(),
      _useCallbackRef8 = _slicedToArray(_useCallbackRef7, 2),
      onLevelChange = _useCallbackRef8[0],
      setOnLevelChange = _useCallbackRef8[1];

  if (!nav || !nav.getBattery || typeof nav.getBattery !== 'function') {
    return (0, _createCbSetterErrorProxy["default"])('Battery API is not supported by your device');
  }

  getBatteryThenAssignEvent(nav, onChargingChangeRef, 'chargingchange');
  getBatteryThenAssignEvent(nav, onChargingTimeChangeRef, 'chargingtimechange');
  getBatteryThenAssignEvent(nav, onDischargingTimeChangeRef, 'dischargingtimechange');
  getBatteryThenAssignEvent(nav, onLevelChange, 'levelchange');
  return Object.freeze({
    onChargingChange: setOnChargingChangeRef,
    onChangingTimeChange: setOnChargingTimeChangeRef,
    onDischargingTimeChange: setOnDischargingTimeChangeRef,
    onLevelChange: setOnLevelChange
  });
};

var _default = useBatteryEvents;
exports["default"] = _default;
//# sourceMappingURL=useBatteryEvents.js.map
