'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _infinite = require('../infinite');

var _infinite2 = _interopRequireDefault(_infinite);

var _format = require('../format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Searchbox = function (_React$Component) {
  _inherits(Searchbox, _React$Component);

  function Searchbox() {
    _classCallCheck(this, Searchbox);

    return _possibleConstructorReturn(this, (Searchbox.__proto__ || Object.getPrototypeOf(Searchbox)).apply(this, arguments));
  }

  _createClass(Searchbox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prompt = _props.prompt,
          q = _props.q;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-searchbox' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-icon' },
          _react2.default.createElement('i', { className: 'search icon' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-input' },
          _react2.default.createElement(
            'div',
            { className: 'ui input' },
            _react2.default.createElement('input', { type: 'text', placeholder: prompt, onChange: this._handleType.bind(this), ref: 'query', value: q })
          )
        ),
        q.length > 0 && _react2.default.createElement(
          'div',
          { className: 'reframe-searchbox-icon', onClick: this._handleAbort.bind(this) },
          _react2.default.createElement('i', { className: 'remove circle icon' })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleLookup = _lodash2.default.throttle(this.props.onChange, 500);
    }
  }, {
    key: '_handleType',
    value: function _handleType() {
      var q = this.refs.query.value;
      this.props.onType(q);
      this._handleLookup(q);
    }
  }, {
    key: '_handleAbort',
    value: function _handleAbort() {
      this.props.onAbort();
      this.props.onChange('');
    }
  }]);

  return Searchbox;
}(_react2.default.Component);

Searchbox.propTypes = {
  q: _propTypes2.default.string,
  prompt: _propTypes2.default.string,
  onAbort: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onLookup: _propTypes2.default.func,
  onType: _propTypes2.default.func
};
Searchbox.defaultProps = {
  prompt: 'Search...'
};
exports.default = Searchbox;