'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Results = function (_React$Component) {
  (0, _inherits3.default)(Results, _React$Component);

  function Results() {
    (0, _classCallCheck3.default)(this, Results);
    return (0, _possibleConstructorReturn3.default)(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  (0, _createClass3.default)(Results, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          format = _props.format,
          multiple = _props.multiple,
          records = _props.records,
          text = _props.text;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-search-results' },
        records.map(function (record, index) {
          return _react2.default.createElement(
            'div',
            { key: 'record_' + index, className: _this2._getRecordClass(record), onClick: _this2._handleToggleRecord.bind(_this2, record) },
            multiple && _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _react2.default.createElement('i', { className: 'fa fa-fw fa-' + _this2._getIcon(record) })
            ),
            _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-label' },
              _react2.default.createElement(_format2.default, (0, _extends3.default)({ format: format }, record, { value: _lodash2.default.get(record, text) }))
            ),
            !multiple && _react2.default.createElement(
              'div',
              { className: 'reframe-search-item-icon' },
              _this2._getChecked(record) && _react2.default.createElement('i', { className: 'fa fa-fw fa-check' })
            )
          );
        })
      );
    }
  }, {
    key: '_getRecordClass',
    value: function _getRecordClass(record) {
      var classes = ['reframe-search-item'];
      if (this._getChecked(record)) classes.push('checked');
      return classes.join(' ');
    }
  }, {
    key: '_getChecked',
    value: function _getChecked(record) {
      var chosen = this.props.chosen;

      var value = this.props.value || 'id';
      return _lodash2.default.find(chosen, (0, _defineProperty3.default)({}, value, _lodash2.default.get(record, value)));
    }
  }, {
    key: '_getIcon',
    value: function _getIcon(record) {
      var checked = this._getChecked(record);
      if (checked) return 'check-circle';
      return 'circle-o';
    }
  }, {
    key: '_handleToggleRecord',
    value: function _handleToggleRecord(record) {
      this.props.onToggleRecord(record);
    }
  }]);
  return Results;
}(_react2.default.Component);

Results.propTypes = {
  format: _propTypes2.default.any,
  chosen: _propTypes2.default.any,
  multiple: _propTypes2.default.bool,
  records: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onToggleRecord: _propTypes2.default.func
};
exports.default = Results;