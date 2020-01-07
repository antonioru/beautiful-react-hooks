"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useCallbackRef3 = _interopRequireDefault(require("./useCallbackRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultOptions = {
  capture: false,
  once: false,
  passive: false
};

var useGlobalEvent = function useGlobalEvent(eventName) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;
  var fn = arguments.length > 2 ? arguments[2] : undefined;

  var _useCallbackRef = (0, _useCallbackRef3["default"])(fn),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      callbackRef = _useCallbackRef2[0],
      setCallbackRef = _useCallbackRef2[1];

  var opts = _objectSpread({}, defaultOptions, {}, options || {});

  (0, _react.useEffect)(function () {
    var cb = function cb() {
      return callbackRef.current.apply(callbackRef, arguments);
    };

    if (callbackRef.current && eventName) {
      window.addEventListener(eventName, cb, opts);
    }

    return function () {
      if (eventName) {
        window.removeEventListener(eventName, cb, opts);
      }
    };
  }, [eventName, options]);
  return setCallbackRef;
};

var _default = useGlobalEvent;
exports["default"] = _default;
//# sourceMappingURL=useGlobalEvent.js.map
