'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _loading = require('snax/lib/containers/loading');

var _loading2 = _interopRequireDefault(_loading);

var _core = require('./core.js');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OmniForm = function (_React$Component) {
  _inherits(OmniForm, _React$Component);

  function OmniForm(props) {
    _classCallCheck(this, OmniForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(OmniForm).call(this, props));
  }

  _createClass(OmniForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _loading2.default,
        { isLoading: false, isError: false },
        _react2.default.createElement(
          _loading.LoadingState,
          null,
          _react2.default.createElement(
            'div',
            { className: 'ui segment' },
            _react2.default.createElement(
              'div',
              { className: 'ui active inverted dimmer' },
              _react2.default.createElement(
                'div',
                { className: 'ui text loader' },
                'Loading'
              )
            ),
            _react2.default.createElement('p', null)
          )
        ),
        _react2.default.createElement(
          _loading.PresentState,
          null,
          _react2.default.createElement(_core2.default, this.applyProps())
        )
      );
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {}
  }, {
    key: 'transformFields',
    value: function transformFields(fields) {}
  }]);

  return OmniForm;
}(_react2.default.Component);

exports.default = OmniForm;