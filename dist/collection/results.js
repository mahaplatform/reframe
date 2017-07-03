'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Results = exports.Empty = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Empty = exports.Empty = function Empty(props) {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-message' },
    _react2.default.createElement(
      'div',
      { className: 'reframe-message-panel' },
      _react2.default.createElement(
        'h2',
        null,
        _react2.default.createElement('i', { className: 'circular ' + props.empty.icon + ' icon' })
      ),
      _react2.default.createElement(
        'h3',
        null,
        'No ',
        _lodash2.default.startCase((0, _pluralize2.default)(props.entity.replace('_', ' ')))
      ),
      _react2.default.createElement(
        'p',
        null,
        'You have not yet created any ',
        (0, _pluralize2.default)(props.entity.replace('_', ' '))
      ),
      props.empty.modal && _react2.default.createElement(
        'div',
        { className: 'ui basic button red', onClick: props.onAddNew.bind(undefined) },
        _react2.default.createElement('i', { className: 'plus icon' }),
        'Create New ',
        _lodash2.default.startCase(props.entity.replace('_', ' '))
      )
    )
  );
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
      var _props = this.props,
          columns = _props.columns,
          layout = _props.layout;

      if (columns) return _react2.default.createElement(_table2.default, this._getTable());
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
      var _props2 = this.props,
          columns = _props2.columns,
          handler = _props2.handler,
          link = _props2.link,
          modal = _props2.modal,
          params = _props2.params,
          records = _props2.records,
          status = _props2.status,
          onLoadMore = _props2.onLoadMore,
          onSort = _props2.onSort;
      var sort = params.sort;

      return {
        columns: columns,
        export: this.props.export,
        handler: handler,
        link: link,
        modal: modal,
        records: records,
        sort: sort,
        status: status,
        onLoadMore: onLoadMore,
        onSort: onSort
      };
    }
  }, {
    key: '_getCustomLayout',
    value: function _getCustomLayout() {
      var _props3 = this.props,
          records = _props3.records,
          sort = _props3.sort,
          status = _props3.status,
          onLoadMore = _props3.onLoadMore,
          onSort = _props3.onSort;

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