"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useMouseEvents = _interopRequireDefault(require("./useMouseEvents"));

var _useMouseState = _interopRequireDefault(require("./useMouseState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useMouse = function useMouse() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var state = (0, _useMouseState["default"])(ref);
  var events = (0, _useMouseEvents["default"])(ref);
  return [state, events];
};

var _default = useMouse;
exports["default"] = _default;
//# sourceMappingURL=useMouse.js.map
