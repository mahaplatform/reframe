'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var Window = function (_React$Component) {
  _inherits(Window, _React$Component);

  function Window(props) {
    _classCallCheck(this, Window);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Window).call(this, props));

    _this.state = {
      top: 0
    };
    return _this;
  }

  _createClass(Window, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { ref: 'modalDimmer', className: 'ui dimmer modals visible active page transition', onClick: this.dimmerClick.bind(this) },
        _react2.default.createElement(
          'div',
          { ref: 'modalWindow', style: { marginTop: this.state.top }, className: 'ui small modal animating transition active', key: 'collection_confirmation' },
          this.props.closeable ? _react2.default.createElement('i', { className: 'close icon', onClick: this.props.onClose }) : null,
          _react2.default.createElement(
            'div',
            { className: 'header' },
            this.props.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'content' },
            this.props.children
          ),
          _react2.default.createElement(
            'div',
            { className: 'actions' },
            _react2.default.createElement(
              'div',
              { className: 'ui negative button', onClick: this.props.onCancel },
              'Cancel'
            ),
            _react2.default.createElement(
              'div',
              { className: 'ui positive button', onClick: this.props.onApprove },
              'Continue'
            )
          )
        )
      );
    }
  }, {
    key: 'dimmerClick',
    value: function dimmerClick(e) {
      if (this.props.closeable && e.target === this.refs.modalDimmer) this.props.onClose();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({
        top: this.refs.modalWindow.offsetHeight / 2 * -1
      });
    }
  }]);

  return Window;
}(_react2.default.Component);

Window.propTypes = {
  title: _react2.default.PropTypes.string.isRequired
};
Window.defaultProps = {
  onApprove: noop,
  onCancel: noop,
  onClose: noop,
  closeable: true
};
exports.default = Window;