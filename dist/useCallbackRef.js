"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var useCallbackRef = function useCallbackRef() {
  var callbackRef = (0, _react.useRef)();
  var setCallbackRef = (0, _react.useCallback)(function (nextCallback) {
    if (nextCallback !== callbackRef.current && typeof nextCallback === 'function') {
      callbackRef.current = nextCallback;
    }
  }, [callbackRef]);
  return [callbackRef, setCallbackRef];
};

var _default = useCallbackRef;
exports["default"] = _default;
//# sourceMappingURL=useCallbackRef.js.map
