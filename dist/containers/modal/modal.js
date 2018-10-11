'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_React$Component) {
  (0, _inherits3.default)(Modal, _React$Component);

  function Modal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      panels: []
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Modal, [{
    key: 'render',
    value: function render() {
      var panels = this.props.panels;
      var children = this.props.children;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-modal-overlay', 'in': panels.length > 0, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-modal-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-modal-window', 'in': panels.length > 0, classNames: 'expanded', timeout: 500, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-window' },
          _react2.default.createElement(
            _reactTransitionGroup.TransitionGroup,
            null,
            panels.map(function (panel, index) {
              return _react2.default.createElement(
                _reactTransitionGroup.CSSTransition,
                { classNames: index > 0 ? 'stack' : '', timeout: 500, key: 'panel_' + index },
                _react2.default.createElement(
                  'div',
                  null,
                  _lodash2.default.isFunction(panel) ? _react2.default.createElement(panel) : panel
                )
              );
            })
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var panels = this.props.panels;
      // if(panels.length > prevProps.panels.length) {
      //   this.setState({ panels })
      // } else if(panels.length < prevProps.panels.length) {
      //   setTimeout(() => this.setState({ panels }), 500)
      // }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        modal: {
          close: this._handleClose.bind(this),
          open: this._handleOpen.bind(this),
          pop: this._handlePop.bind(this),
          push: this._handlePush.bind(this)
        }
      };
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }, {
    key: '_handleOpen',
    value: function _handleOpen(component) {
      this.props.onOpen(component);
    }
  }, {
    key: '_handlePop',
    value: function _handlePop() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      this.props.onPop(num);
    }
  }, {
    key: '_handlePush',
    value: function _handlePush(component) {
      this.props.onPush(component);
    }
  }]);
  return Modal;
}(_react2.default.Component);

Modal.childContextTypes = {
  modal: _propTypes2.default.object
};
Modal.propTypes = {
  panels: _propTypes2.default.array,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onPop: _propTypes2.default.func,
  onPush: _propTypes2.default.func
};
exports.default = Modal;