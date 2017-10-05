'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sortable_list = require('../sortable_list');

var _sortable_list2 = _interopRequireDefault(_sortable_list);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

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
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Export);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Export.__proto__ || Object.getPrototypeOf(Export)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      items: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Export, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-tasks-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-icon', onClick: this._handleDone.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-collection-tasks-panel-header-title' },
            'Export Results'
          ),
          _react2.default.createElement('div', { className: 'reframe-collection-tasks-panel-header-icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-body' },
          _react2.default.createElement(_sortable_list2.default, this._getSortableList())
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-collection-tasks-panel-footer' },
          _react2.default.createElement(
            'div',
            { className: 'ui fluid red button', onClick: this._handleClick.bind(this) },
            'Download Data'
          )
        )
      );
    }
  }, {
    key: '_getSortableList',
    value: function _getSortableList() {
      var _this2 = this;

      var defaultValue = this.props.defaultValue;

      return {
        defaultValue: defaultValue,
        onUpdate: function onUpdate(items) {
          return _this2.setState({ items: items });
        }
      };
    }
  }, {
    key: '_handleClick',
    value: function _handleClick() {
      var items = this.state.items;
      var _props = this.props,
          endpoint = _props.endpoint,
          filter = _props.filter,
          sort = _props.sort,
          token = _props.token;

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
  }, {
    key: '_handleDone',
    value: function _handleDone() {
      this.props.onDone();
    }
  }]);

  return Export;
}(_react2.default.Component);

exports.default = Export;