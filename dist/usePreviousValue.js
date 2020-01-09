"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var usePreviousValue = function usePreviousValue(value) {
  var prevValue = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    prevValue.current = value;
    return function () {
      prevValue.current = undefined;
    };
  });
  return prevValue.current;
};

var _default = usePreviousValue;
exports["default"] = _default;
//# sourceMappingURL=usePreviousValue.js.map
