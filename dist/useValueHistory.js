"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useValueHistory = function useValueHistory(value) {
  var history = (0, _react.useRef)([]);
  (0, _react.useEffect)(function () {
    history.current.push(value);
  }, [value]);
  return history.current;
};

var _default = useValueHistory;
exports["default"] = _default;
//# sourceMappingURL=useValueHistory.js.map
