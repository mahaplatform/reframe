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

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Detail).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var total = this.props.properties.length;
      var half = Math.ceil(total / 2);
      var left = this.props.properties.splice(0, half);
      var right = this.props.properties.splice(0, half);
      if (total % 2 == 1) {
        right.push({ label: '&nbsp;', value: null });
      }
      return _react2.default.createElement(
        'div',
        { className: 'details' },
        _react2.default.createElement(
          'div',
          { className: 'details-header' },
          this.props.title
        ),
        [left, right].map(function (collection) {
          return _react2.default.createElement(
            'table',
            { className: 'ui small unstackable definition table' },
            _react2.default.createElement(
              'tbody',
              null,
              collection.map(function (property, index) {
                return _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement('td', { dangerouslySetInnerHTML: { __html: property.label } }),
                  _react2.default.createElement(
                    'td',
                    null,
                    _react2.default.createElement(_format2.default, _extends({}, _this2.props, { format: property.format, value: property.value, key: 'property_' + index }))
                  )
                );
              })
            )
          );
        })
      );
    }
  }]);

  return Detail;
}(_react2.default.Component);

Detail.propTypes = {
  title: _react2.default.PropTypes.string,
  properties: _react2.default.PropTypes.array
};
Detail.defaultProps = {};
exports.default = Detail;