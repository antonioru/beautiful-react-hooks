"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _createHandlerSetter5 = _interopRequireDefault(require("./utils/createHandlerSetter"));

var _createCbSetterErrorProxy = _interopRequireDefault(require("./utils/createCbSetterErrorProxy"));

var _geolocationStandardOptions = _interopRequireDefault(require("./utils/geolocationStandardOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGeolocationEvents = function useGeolocationEvents() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _geolocationStandardOptions["default"];
  var watchId = (0, _react.useRef)();

  var _createHandlerSetter = (0, _createHandlerSetter5["default"])(),
      _createHandlerSetter2 = _slicedToArray(_createHandlerSetter, 2),
      onChangeRef = _createHandlerSetter2[0],
      setOnChangeRef = _createHandlerSetter2[1];

  var _createHandlerSetter3 = (0, _createHandlerSetter5["default"])(),
      _createHandlerSetter4 = _slicedToArray(_createHandlerSetter3, 2),
      onErrorRef = _createHandlerSetter4[0],
      setOnErrorRef = _createHandlerSetter4[1];

  var isSupported = 'geolocation' in window.navigator;
  (0, _react.useEffect)(function () {
    var onSuccess = function onSuccess(successEvent) {
      if (onChangeRef.current) {
        onChangeRef.current(successEvent);
      }
    };

    var onError = function onError(err) {
      if (onErrorRef.current) {
        onErrorRef.current(err);
      }
    };

    if (isSupported) {
      watchId.current = window.navigator.geolocation.watchPosition(onSuccess, onError, options);
    }

    return function () {
      if (isSupported) {
        window.navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, []);
  return !isSupported ? (0, _createCbSetterErrorProxy["default"])('The Geolocation API is not supported') : Object.freeze({
    isSupported: isSupported,
    onChange: setOnChangeRef,
    onError: setOnErrorRef
  });
};

var _default = useGeolocationEvents;
exports["default"] = _default;
//# sourceMappingURL=useGeolocationEvents.js.map
