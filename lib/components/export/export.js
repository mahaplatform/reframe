'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Export = function (_React$Component) {
  _inherits(Export, _React$Component);

  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, (Export.__proto__ || Object.getPrototypeOf(Export)).apply(this, arguments));
  }

  _createClass(Export, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-export' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-export-header' },
          'Export Results'
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-export-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-export-list' },
            items.map(function (item, index) {
              return _react2.default.createElement(_item2.default, _extends({ key: 'item_' + item.key }, _this2._getItem(item, index)));
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-export-footer' },
          _react2.default.createElement(
            'div',
            { className: 'ui fluid red button', onClick: this._handleClick.bind(this) },
            'Download Data'
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onSet = _props.onSet;

      if (defaultValue) onSet(defaultValue);
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
    key: '_handleClick',
    value: function _handleClick() {
      var _props3 = this.props,
          endpoint = _props3.endpoint,
          filter = _props3.filter,
          sort = _props3.sort,
          token = _props3.token,
          items = _props3.items;

      var query = _extends({}, filter, {
        $sort: sort,
        $select: items.filter(function (item) {
          return item.checked;
        }).reduce(function (select, item) {
          return _extends({}, select, _defineProperty({}, item.label, item.key));
        }, {})
      });
      var url = endpoint + '.csv?token=' + token + '&download=true&' + _qs2.default.stringify(query);
      window.location.href = url;
    }
  }]);

  return Export;
}(_react2.default.Component);

exports.default = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(Export);