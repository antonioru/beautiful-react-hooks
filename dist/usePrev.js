"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var usePrev = function usePrev(value) {
  var prevValue = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    prevValue.current = value;
    return function () {
      prevValue.current = undefined;
    };
  });
  return prevValue.current;
};

var _default = usePrev;
exports["default"] = _default;
//# sourceMappingURL=usePrev.js.map
