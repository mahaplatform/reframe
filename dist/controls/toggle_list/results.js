'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _format = require('../../utils/format');

var _format2 = _interopRequireDefault(_format);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_React$Component) {
  _inherits(Results, _React$Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).apply(this, arguments));
  }

  _createClass(Results, [{
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
              _react2.default.createElement(_format2.default, _extends({ format: format }, record, { value: _lodash2.default.get(record, text) }))
            ),
            _react2.default.createElement(
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
      return _lodash2.default.find(chosen, _defineProperty({}, value, _lodash2.default.get(record, value)));
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