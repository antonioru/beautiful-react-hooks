"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash.curryright"));

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultOptions = {
  cancelPrevious: false,
  cancelOnUnmount: true
};

var useTimeout = function useTimeout(fn, delay) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions;

  var _fn = typeof fn === 'function' ? fn : undefined;

  var _delay = typeof delay !== 'number' && typeof fn === 'number' ? fn : delay;

  var _options = _typeof(options) === 'object' && _typeof(delay) === 'object' ? delay : options;

  var _useCallbackRef = (0, _useCallbackRef3["default"])(_fn),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      userCallback = _useCallbackRef2[0],
      setUserCallback = _useCallbackRef2[1];

  var timeoutRef = (0, _react.useRef)();
  var opts = (0, _react.useMemo)(function () {
    return _objectSpread({}, defaultOptions, {}, _options || {});
  }, [options, delay]);
  (0, _react.useEffect)(function () {
    if (!timeoutRef.current && userCallback.current) {
      timeoutRef.current = setTimeout(function () {
        userCallback.current();
      }, _delay);
    }
  }, [fn, delay]);
  (0, _react.useEffect)(function () {
    if (opts.cancelPrevious) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [options, delay]);
  (0, _react.useEffect)(function () {
    return function () {
      if (timeoutRef.current && options.cancelOnUnmount) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  return !_fn ? setUserCallback : timeoutRef.current;
};

var _default = (0, _lodash["default"])(useTimeout);

exports["default"] = _default;
//# sourceMappingURL=useTimeout.js.map
