'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortableList = function (_React$Component) {
  _inherits(SortableList, _React$Component);

  function SortableList() {
    _classCallCheck(this, SortableList);

    return _possibleConstructorReturn(this, (SortableList.__proto__ || Object.getPrototypeOf(SortableList)).apply(this, arguments));
  }

  _createClass(SortableList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-sortable-list' },
        items.map(function (item, index) {
          return _react2.default.createElement(_item2.default, _extends({ key: 'item_' + index }, _this2._getItem(item, index)));
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
        return _extends({}, item, {
          checked: item.checked !== false
        });
      }));
    }
  }]);

  return SortableList;
}(_react2.default.Component);

exports.default = SortableList;