'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'reframe-lookup-panel-results' },
    props.results.map(function (result, index) {
      var value = _lodash2.default.get(result, text);
      return _react2.default.createElement(
        'div',
        { key: 'result_' + index, className: 'reframe-lookup-panel-result', onClick: props.onChoose(index) },
        _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-result-label' },
          _react2.default.createElement(Format, _extends({}, result, { format: format, value: value }))
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-lookup-panel-result-icon' },
          index === props.selected ? _react2.default.createElement('i', { className: 'green check icon' }) : null
        )
      );
    })
  );
};