'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _row = require('./row.js');

var _row2 = _interopRequireDefault(_row);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tbody = function (_React$Component) {
  _inherits(Tbody, _React$Component);

  function Tbody() {
    _classCallCheck(this, Tbody);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tbody).apply(this, arguments));
  }

  _createClass(Tbody, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (_lodash2.default.isEmpty(this.props.records) && this.props.status !== 'LOADING') {
        var colspan = this.props.columns.length;
        colspan += !_lodash2.default.isEmpty(this.props.batchActions) ? 1 : 0;
        colspan += !_lodash2.default.isEmpty(this.props.recordActions) ? 1 : 0;
        return _react2.default.createElement(
          'tbody',
          { ref: 'tbody' },
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { colSpan: colspan, className: 'center aligned' },
              this.props.empty
            )
          )
        );
      } else {
        return _react2.default.createElement(
          'tbody',
          { ref: 'tbody' },
          this.props.records.map(function (record, index) {
            var isChecked = _lodash2.default.includes(_this2.props.checked, record.id);
            return _react2.default.createElement(_row2.default, _extends({ key: 'record_' + record.id }, _this2.props, { record: record, isChecked: isChecked }));
          })
        );
      }
    }
  }]);

  return Tbody;
}(_react2.default.Component);

exports.default = Tbody;