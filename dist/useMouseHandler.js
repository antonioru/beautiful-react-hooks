"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useCallbackRef15 = _interopRequireDefault(require("./useCallbackRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useMouseHandler = function useMouseHandler() {
  var ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var target;

  var _useCallbackRef = (0, _useCallbackRef15["default"])(),
      _useCallbackRef2 = _slicedToArray(_useCallbackRef, 2),
      onMouseDownHandler = _useCallbackRef2[0],
      setOnMouseDown = _useCallbackRef2[1];

  var _useCallbackRef3 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef4 = _slicedToArray(_useCallbackRef3, 2),
      onMouseEnterHandler = _useCallbackRef4[0],
      setOnMouseEnter = _useCallbackRef4[1];

  var _useCallbackRef5 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef6 = _slicedToArray(_useCallbackRef5, 2),
      onMouseLeaveHandler = _useCallbackRef6[0],
      setOnMouseLeave = _useCallbackRef6[1];

  var _useCallbackRef7 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef8 = _slicedToArray(_useCallbackRef7, 2),
      onMouseMoveHandler = _useCallbackRef8[0],
      setOnMouseMove = _useCallbackRef8[1];

  var _useCallbackRef9 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef10 = _slicedToArray(_useCallbackRef9, 2),
      onMouseOutHandler = _useCallbackRef10[0],
      setOnMouseOut = _useCallbackRef10[1];

  var _useCallbackRef11 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef12 = _slicedToArray(_useCallbackRef11, 2),
      onMouseOverHandler = _useCallbackRef12[0],
      setOnMouseOver = _useCallbackRef12[1];

  var _useCallbackRef13 = (0, _useCallbackRef15["default"])(),
      _useCallbackRef14 = _slicedToArray(_useCallbackRef13, 2),
      onMouseUpHandler = _useCallbackRef14[0],
      setOnMouseUp = _useCallbackRef14[1];

  (0, _react.useEffect)(function () {
    if (ref !== null && !!ref.current) {
      target = ref.current;
    }

    if (ref === null) {
      target = document;
    }

    if (target) {
      if (onMouseDownHandler.current) {
        target.addEventListener('mousedown', onMouseDownHandler.current);
      }

      if (onMouseEnterHandler.current) {
        target.addEventListener('mouseenter', onMouseEnterHandler.current);
      }

      if (onMouseLeaveHandler.current) {
        target.addEventListener('mouseleave', onMouseLeaveHandler.current);
      }

      if (onMouseMoveHandler.current) {
        target.addEventListener('mousemove', onMouseMoveHandler.current);
      }

      if (onMouseOutHandler.current) {
        target.addEventListener('mouseout', onMouseOutHandler.current);
      }

      if (onMouseOverHandler.current) {
        target.addEventListener('mouseover', onMouseOverHandler.current);
      }

      if (onMouseUpHandler.current) {
        target.addEventListener('mouseup', onMouseUpHandler.current);
      }
    }

    return function () {
      if (target) {
        target.removeEventListener('mousedown', onMouseDownHandler.current);
        target.removeEventListener('mouseenter', onMouseEnterHandler.current);
        target.removeEventListener('mouseleave', onMouseLeaveHandler.current);
        target.removeEventListener('mousemove', onMouseMoveHandler.current);
        target.removeEventListener('mouseout', onMouseOutHandler.current);
        target.removeEventListener('mouseover', onMouseOverHandler.current);
        target.removeEventListener('mouseup', onMouseUpHandler.current);
      }
    };
  }, [ref, onMouseDownHandler, onMouseEnterHandler, onMouseLeaveHandler, onMouseMoveHandler, onMouseOutHandler, onMouseOverHandler, onMouseUpHandler]);
  return {
    onMouseDown: setOnMouseDown,
    onMouseEnter: setOnMouseEnter,
    onMouseLeave: setOnMouseLeave,
    onMouseMove: setOnMouseMove,
    onMouseOut: setOnMouseOut,
    onMouseOver: setOnMouseOver,
    onMouseUp: setOnMouseUp
  };
};

var _default = useMouseHandler;
exports["default"] = _default;
//# sourceMappingURL=useMouseHandler.js.map
