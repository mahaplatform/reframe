'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tasks = function (_React$Component) {
  (0, _inherits3.default)(Tasks, _React$Component);

  function Tasks() {
    (0, _classCallCheck3.default)(this, Tasks);
    return (0, _possibleConstructorReturn3.default)(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  (0, _createClass3.default)(Tasks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          items = _props.items,
          open = _props.open,
          title = _props.title;

      return [children, _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tasks-overlay', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement('div', { className: 'reframe-tasks-overlay', onClick: this._handleClose.bind(this) })
      ), _react2.default.createElement(
        _reactTransitionGroup.CSSTransition,
        { key: 'reframe-tasks-list', 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tasks-list' },
          items && items.map(function (item, index) {
            if (item.show === false) return;
            return _react2.default.createElement(_button2.default, (0, _extends3.default)({ key: 'task_' + index }, _this2._getButton(item)));
          }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-tasks-cancel', onClick: this._handleClose.bind(this) },
            'Cancel'
          )
        )
      )];
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          open = _props2.open,
          onClear = _props2.onClear;

      if (open !== prevProps.open && !open) {
        setTimeout(onClear, 500);
      }
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props3 = this.props,
          onOpen = _props3.onOpen,
          onClose = _props3.onClose;

      return {
        tasks: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }, {
    key: '_getButton',
    value: function _getButton(item) {
      return (0, _extends3.default)({}, item, {
        className: 'reframe-task',
        onDone: this._handleClose.bind(this)
      });
    }
  }, {
    key: '_handleClose',
    value: function _handleClose() {
      this.props.onClose();
    }
  }]);
  return Tasks;
}(_react2.default.Component);

Tasks.childContextTypes = {
  tasks: _propTypes2.default.object
};
Tasks.contextTypes = {
  drawer: _propTypes2.default.object,
  modal: _propTypes2.default.object
};
Tasks.propTypes = {
  children: _propTypes2.default.any,
  items: _propTypes2.default.array,
  title: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  onClear: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func
};
exports.default = Tasks;