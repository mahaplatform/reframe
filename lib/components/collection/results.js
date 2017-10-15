'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Results = exports.Empty = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

var _message = require('../message');

var _message2 = _interopRequireDefault(_message);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Empty = exports.Empty = function Empty(props) {
  var _props = undefined.props,
      empty = _props.empty,
      entity = _props.entity,
      icon = _props.icon;


  var message = {
    icon: icon,
    title: 'No ' + _lodash2.default.startCase((0, _pluralize2.default)(entity.replace('_', ' '))),
    text: empty,
    button: {
      label: 'Create New ' + _lodash2.default.startCase(entity.replace('_', ' ')),
      modal: undefined.props.new
    }
  };

  return _react2.default.createElement(_message2.default, message);
};

var Results = exports.Results = function (_React$Component) {
  _inherits(Results, _React$Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          table = _props2.table,
          layout = _props2.layout;

      if (table) return _react2.default.createElement(_table2.default, this._getTable());
      if (layout) return _react2.default.createElement(layout, _extends({}, this._getCustomLayout()));
    }
  }, {
    key: '_getScrollpane',
    value: function _getScrollpane() {
      return {
        onReachBottom: this.props.onLoadMore.bind(this)
      };
    }
  }, {
    key: '_getTable',
    value: function _getTable() {
      var _props3 = this.props,
          columns = _props3.columns,
          handler = _props3.handler,
          link = _props3.link,
          modal = _props3.modal,
          records = _props3.records,
          recordTasks = _props3.recordTasks,
          sort = _props3.sort,
          status = _props3.status,
          onLoadMore = _props3.onLoadMore,
          onSort = _props3.onSort;

      return {
        columns: columns,
        handler: handler,
        link: link,
        modal: modal,
        records: records,
        recordTasks: recordTasks,
        sort: sort,
        status: status,
        onLoadMore: onLoadMore,
        onSort: onSort
      };
    }
  }, {
    key: '_getCustomLayout',
    value: function _getCustomLayout() {
      var _props4 = this.props,
          records = _props4.records,
          sort = _props4.sort,
          status = _props4.status,
          onLoadMore = _props4.onLoadMore,
          onSort = _props4.onSort;

      return {
        records: records,
        sort: sort,
        status: status,
        onLoadMore: onLoadMore,
        onSort: onSort
      };
    }
  }]);

  return Results;
}(_react2.default.Component);

Results.propTypes = {
  columns: _propTypes2.default.array,
  handler: _propTypes2.default.func,
  layout: _propTypes2.default.any,
  link: _propTypes2.default.string,
  modal: _propTypes2.default.func,
  records: _propTypes2.default.array,
  recordTasks: _propTypes2.default.array,
  sort: _propTypes2.default.object,
  status: _propTypes2.default.string,
  table: _propTypes2.default.array,
  onLoadMore: _propTypes2.default.func,
  onSort: _propTypes2.default.func
};