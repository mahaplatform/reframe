'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tasks = function (_React$Component) {
  _inherits(Tasks, _React$Component);

  function Tasks() {
    _classCallCheck(this, Tasks);

    return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  _createClass(Tasks, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        { className: 'chrome-tasks' },
        children,
        _react2.default.createElement(
          _reactAddonsCssTransitionGroup2.default,
          { transitionName: 'expanded', transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionAppear: true, transitionAppearTimeout: 250 },
          items && _react2.default.createElement('div', { className: 'chrome-tasks-overlay', onClick: this._handleClose.bind(this) }),
          items && _react2.default.createElement(
            'div',
            { className: 'chrome-tasks-list' },
            items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'task_' + index, className: 'chrome-tasks-item', onClick: _this2._handleChoose.bind(_this2, index) },
                item.label
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'chrome-tasks-cancel', onClick: this._handleClose.bind(this) },
              'Cancel'
            )
          )
        )
      );
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      var _props2 = this.props,
          onOpen = _props2.onOpen,
          onClose = _props2.onClose;

      return {
        tasks: {
          open: onOpen,
          close: onClose
        }
      };
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var items = this.props.items;

      this._handleClose();
      if (items[index].route) {
        this.context.history.push(items[index].route);
      } else if (items[index].modal) {
        this.context.modal.push(items[index].modal);
      } else if (items[index].drawer) {
        var location = items[index].location || 'right';
        this.context.drawer.open(items[index].drawer, location);
      } else if (items[index].handler) {
        items[index].handler();
      }
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
  modal: _propTypes2.default.object,
  history: _propTypes2.default.object
};
Tasks.propsTypes = {
  items: _propTypes2.default.array,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func
};
exports.default = Tasks;