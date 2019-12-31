"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useGeolocationEvents2 = _interopRequireDefault(require("./useGeolocationEvents"));

var _geolocationStandardOptions = _interopRequireDefault(require("./utils/geolocationStandardOptions"));

var _makePositionObject = _interopRequireDefault(require("./utils/makePositionObject"));

var _isSamePosition = _interopRequireDefault(require("./utils/isSamePosition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useGeolocationState = function useGeolocationState() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _geolocationStandardOptions["default"];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      position = _useState2[0],
      setPosition = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isRetrieving = _useState4[0],
      setRetrieving = _useState4[1];

  var _useGeolocationEvents = (0, _useGeolocationEvents2["default"])(options),
      isSupported = _useGeolocationEvents.isSupported,
      onChange = _useGeolocationEvents.onChange;

  var savePosition = (0, _react.useCallback)(function () {
    if (position === null) {
      setRetrieving(true);
      navigator.geolocation.getCurrentPosition(function (nextPosition) {
        if (!(0, _isSamePosition["default"])(position, nextPosition)) {
          setPosition((0, _makePositionObject["default"])(nextPosition));
          setRetrieving(false);
        }
      });
    }
  }, [position]);
  (0, _react.useEffect)(savePosition, [position]);
  onChange(savePosition);
  return Object.freeze({
    isSupported: isSupported,
    isRetrieving: isRetrieving,
    position: position
  });
};

var _default = useGeolocationState;
exports["default"] = _default;
//# sourceMappingURL=useGeolocationState.js.map
