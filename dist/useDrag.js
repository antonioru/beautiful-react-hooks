"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _useDragEvents2 = _interopRequireDefault(require("./useDragEvents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultOptions = {
  dragImage: null,
  dragImageXOffset: 0,
  dragImageYOffset: 0,
  transfer: null,
  transferFormat: 'text'
};

var useDrag = function useDrag(targetRef) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOptions;

  var _useDragEvents = (0, _useDragEvents2["default"])(targetRef, true),
      onDragStart = _useDragEvents.onDragStart,
      onDragEnd = _useDragEvents.onDragEnd;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDragging = _useState2[0],
      setIsDragging = _useState2[1];

  var opts = _objectSpread({}, defaultOptions, {}, options || {});

  onDragStart(function (event) {
    setIsDragging(true);

    if (opts.dragImage) {
      var img = new Image();
      img.src = opts.dragImage;
      event.dataTransfer.setDragImage(img, opts.dragImageXOffset, opts.dragImageYOffset);
    }

    if (opts.transfer) {
      var data = _typeof(opts.transfer) === 'object' ? JSON.stringify(opts.transfer) : "".concat(opts.transfer);
      event.dataTransfer.setData(opts.transferFormat, data);
    }
  });
  onDragEnd(function () {
    return setIsDragging(false);
  });
  return isDragging;
};

var _default = useDrag;
exports["default"] = _default;
//# sourceMappingURL=useDrag.js.map
