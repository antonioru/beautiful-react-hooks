"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useGlobalEvent = _interopRequireDefault(require("./useGlobalEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useOnlineState = function useOnlineState() {
  var _useState = (0, _react.useState)(navigator.onLine),
      _useState2 = _slicedToArray(_useState, 2),
      isOnline = _useState2[0],
      setIsOnline = _useState2[1];

  var whenOnline = (0, _useGlobalEvent["default"])('online', {
    capture: true
  });
  var whenOffline = (0, _useGlobalEvent["default"])('offline', {
    capture: true
  });
  whenOnline(function () {
    setIsOnline(true);
  });
  whenOffline(function () {
    setIsOnline(false);
  });
  return isOnline;
};

var _default = useOnlineState;
exports["default"] = _default;
//# sourceMappingURL=useOnlineState.js.map
