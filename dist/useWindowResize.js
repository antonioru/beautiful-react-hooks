"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _useGlobalEvent = _interopRequireDefault(require("./useGlobalEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useWindowResize = function useWindowResize(handler) {
  return (0, _useGlobalEvent["default"])('resize', null, handler);
};

var _default = useWindowResize;
exports["default"] = _default;
//# sourceMappingURL=useWindowResize.js.map
