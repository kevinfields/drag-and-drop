"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _DragAndDropItem = _interopRequireDefault(require("./DragAndDropItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const OrderObjectContainer = props => {
  const [highlit, setHighlit] = (0, _react.useState)(false);
  const colorName = props.colorName ? props.colorName : 'lightblue';

  const dropItem = () => {
    setHighlit(false);
    props.placeHere(props.dragging);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      backgroundColor: highlit ? colorName : 'white'
    },
    className: props.slotClassName,
    onDrop: () => dropItem(),
    onDragOver: e => e.preventDefault(),
    onDragEnter: () => setHighlit(true),
    onDragLeave: () => setHighlit(false)
  }, /*#__PURE__*/_react.default.createElement(_DragAndDropItem.default, {
    item: props.item,
    dragObject: () => props.dragObject(props.item),
    dragging: props.dragging,
    objectClassName: props.objectClassName,
    children: props.children
  }));
};

var _default = OrderObjectContainer;
exports.default = _default;