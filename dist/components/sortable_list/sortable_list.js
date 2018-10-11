'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SortableList = function (_React$Component) {
  (0, _inherits3.default)(SortableList, _React$Component);

  function SortableList() {
    (0, _classCallCheck3.default)(this, SortableList);
    return (0, _possibleConstructorReturn3.default)(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).apply(this, arguments));
  }

  (0, _createClass3.default)(SortableList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-sortable-list' },
        items.map(function (item, index) {
          return _react2.default.createElement(_item2.default, (0, _extends3.default)({ key: 'item_' + index }, _this2._getItem(item, index)));
        })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.defaultValue) this._handleSet();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          items = _props.items,
          onUpdate = _props.onUpdate;

      if (!_lodash2.default.isEqual(prevProps.items, items)) onUpdate(items);
      if (!_lodash2.default.isEqual(prevProps.defaultValue, defaultValue)) this._handleSet();
    }
  }, {
    key: '_getItem',
    value: function _getItem(item, index) {
      var _props2 = this.props,
          onMove = _props2.onMove,
          onToggle = _props2.onToggle;

      return {
        label: item.label,
        checked: item.checked,
        index: index,
        onMove: onMove.bind(this),
        onToggle: onToggle.bind(this)
      };
    }
  }, {
    key: '_handleSet',
    value: function _handleSet() {
      var _props3 = this.props,
          defaultValue = _props3.defaultValue,
          onSet = _props3.onSet;

      onSet(defaultValue.map(function (item) {
        return (0, _extends3.default)({}, item, {
          checked: item.checked !== false
        });
      }));
    }
  }]);
  return SortableList;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(SortableList);