"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultOptions = {
  root: undefined,
  rootMargin: '0px',
  threshold: 0
};

var useViewportSpy = function useViewportSpy(elementRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setIsVisible = _useState2[1];

  (0, _react.useLayoutEffect)(function () {
    var observer = new IntersectionObserver(function (entries) {
      return entries.forEach(function (item) {
        var nextValue = item.isIntersecting;
        setIsVisible(nextValue);
      });
    }, options);
    observer.observe(elementRef.current);
    return function () {
      observer.disconnect(elementRef.current);
    };
  }, [elementRef]);
  return isVisible;
};

var _default = useViewportSpy;
exports["default"] = _default;
//# sourceMappingURL=useViewportSpy.js.map
