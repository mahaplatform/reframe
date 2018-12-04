'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableField = function (_React$Component) {
  _inherits(TableField, _React$Component);

  function TableField() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableField.__proto__ || Object.getPrototypeOf(TableField)).call.apply(_ref, [this].concat(args))), _this), _this.columns = [], _this._handleAdd = _this._handleAdd.bind(_this), _this._handleKeyDown = _this._handleKeyDown.bind(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableField, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var columns = this.props.columns;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-tablefield' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tablefield-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-tablefield-row' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-tablefield-handle' },
              '\xA0'
            ),
            columns.map(function (column, j) {
              return _react2.default.createElement(
                'div',
                { className: 'reframe-tablefield-column', key: 'column_' + j },
                column.label
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'reframe-tablefield-actions' },
              '\xA0'
            )
          )
        ),
        _react2.default.createElement(_body2.default, this._getBody()),
        _react2.default.createElement(
          'div',
          { className: 'reframe-tablefield-footer' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-tablefield-row' },
            _react2.default.createElement(
              'div',
              { className: 'reframe-tablefield-handle' },
              '\xA0'
            ),
            columns.map(function (column, j) {
              return _react2.default.createElement(
                'div',
                { className: 'reframe-tablefield-column', key: 'column_' + j },
                _react2.default.createElement('input', _this2._getInput(column))
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'reframe-tablefield-actions', onClick: this._handleAdd },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-plus' })
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          defaultValue = _props.defaultValue,
          onSet = _props.onSet,
          onReady = _props.onReady;

      if (defaultValue) onSet(defaultValue);
      onReady();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var rows = this.props.rows;

      if (!_lodash2.default.isEqual(rows, prevProps.rows)) {
        this.props.onChange(rows.map(function (row) {
          return _lodash2.default.omit(row, ['code']);
        }));
      }
    }
  }, {
    key: '_getInput',
    value: function _getInput(column) {
      var _this3 = this;

      var values = this.props.values;

      return {
        type: 'text',
        placeholder: column.label,
        ref: function ref(node) {
          return _this3.columns[column.key] = node;
        },
        onKeyDown: this._handleKeyDown,
        onChange: this._handleChange.bind(this, column.key),
        value: values[column.key] || ''
      };
    }
  }, {
    key: '_getBody',
    value: function _getBody() {
      var _props2 = this.props,
          columns = _props2.columns,
          rows = _props2.rows,
          onRemove = _props2.onRemove,
          onReorder = _props2.onReorder;

      return {
        columns: columns,
        rows: rows,
        onRemove: onRemove,
        onReorder: onReorder
      };
    }
  }, {
    key: '_handleAdd',
    value: function _handleAdd() {
      var _props3 = this.props,
          isValid = _props3.isValid,
          row = _props3.row,
          onAdd = _props3.onAdd;

      if (isValid) onAdd(row);
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(key, e) {
      this.props.onUpdate(key, e.target.value);
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      if (!(e.keyCode === 13 && e.shiftKey === false)) return;
      e.preventDefault();
      this._handleAdd();
    }
  }]);

  return TableField;
}(_react2.default.Component);

TableField.propTypes = {
  columns: _propTypes2.default.array,
  defaultValue: _propTypes2.default.array,
  isValid: _propTypes2.default.bool,
  row: _propTypes2.default.object,
  rows: _propTypes2.default.array,
  values: _propTypes2.default.object,
  onAdd: _propTypes2.default.func,
  onSet: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onRemove: _propTypes2.default.func,
  onReorder: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func
};
TableField.defaultProps = {
  onReady: function onReady() {}
};
exports.default = TableField;