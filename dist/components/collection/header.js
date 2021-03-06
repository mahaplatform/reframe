'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _searchbox = require('../searchbox');

var _searchbox2 = _interopRequireDefault(_searchbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
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