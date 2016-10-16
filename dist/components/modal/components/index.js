'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var open = _props.open;
      var children = _props.children;

      if (open) {
        return _react2.default.createElement(
          'div',
          { className: 'modal' },
          _react2.default.createElement(
            'div',
            { className: 'ui dimmer modals page transition visible active' },
            _react2.default.createElement(
              'div',
              { className: 'ui standard modal media transition visible active scrolling' },
              _react2.default.createElement(
                'div',
                { className: 'header' },
                title
              ),
              children
            )
          )
        );
      } else {
        return _react2.default.createElement('div', { className: 'modal' });
      }
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  title: _react2.default.PropTypes.string,
  open: _react2.default.PropTypes.bool
};


var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.title,
    open: state.open
  };
};

Modal = (0, _reactRedux.connect)(mapStateToProps)(Modal);

exports.default = Modal;