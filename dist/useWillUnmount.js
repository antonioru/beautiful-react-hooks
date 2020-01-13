"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _createHandlerSetter3 = _interopRequireDefault(require("./utils/createHandlerSetter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useWillUnmount = function useWillUnmount(handler) {
  var _createHandlerSetter = (0, _createHandlerSetter3["default"])(handler),
      _createHandlerSetter2 = _slicedToArray(_createHandlerSetter, 2),
      onUnmountHandler = _createHandlerSetter2[0],
      setOnUnmount = _createHandlerSetter2[1];

  (0, _react.useEffect)(function () {
    return function () {
      if (onUnmountHandler.current) {
        onUnmountHandler.current();
      }
    };
  }, []);
  return setOnUnmount;
};

var _default = useWillUnmount;
exports["default"] = _default;
//# sourceMappingURL=useWillUnmount.js.map
