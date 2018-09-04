'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_React$Component) {
  (0, _inherits3.default)(Header, _React$Component);

  function Header() {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          filters = _props.filters,
          filter = _props.filter,
          search = _props.search,
          tasks = _props.tasks;

      if (!filters && !this.props.export && !search && !tasks) return null;
      // const count = Object.keys(filter).reduce((count, key) => {
      //   if(filter[key].$eq) return count + 1
      //   if(filter[key].$in) return count + filter[key].$in.length
      //   return count
      // }, 0)
      return _react2.default.createElement(
        'div',
        { className: 'reframe-collection-header' },
        search && _react2.default.createElement(_searchbox2.default, this._getSearchbox())
      );
    }
  }, {
    key: '_getSearchbox',
    value: function _getSearchbox() {
      var _props2 = this.props,
          filters = _props2.filters,
          managing = _props2.managing,
          tasks = _props2.tasks,
          onSetQuery = _props2.onSetQuery;

      return {
        icon: filters || this.props.export || tasks ? managing ? 'times' : 'sliders' : null,
        onIcon: this._handleToggleTasks.bind(this),
        onChange: onSetQuery
      };
    }
  }, {
    key: '_handleToggleTasks',
    value: function _handleToggleTasks() {
      this.props.onToggleTasks();
    }
  }]);
  return Header;
}(_react2.default.Component);

Header.propTypes = {
  export: _propTypes2.default.array,
  filters: _propTypes2.default.array,
  filter: _propTypes2.default.object,
  managing: _propTypes2.default.bool,
  search: _propTypes2.default.bool,
  tasks: _propTypes2.default.array,
  onSetQuery: _propTypes2.default.func,
  onToggleTasks: _propTypes2.default.func
};
exports.default = Header;