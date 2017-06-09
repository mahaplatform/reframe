'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTransitionGroup = require('react-transition-group');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Outlet = function (_React$Component) {
  _inherits(Outlet, _React$Component);

  function Outlet() {
    _classCallCheck(this, Outlet);

    return _possibleConstructorReturn(this, (Outlet.__proto__ || Object.getPrototypeOf(Outlet)).apply(this, arguments));
  }

  _createClass(Outlet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'reframe-tasks-outlet' },
        this.props.children
      );
    }
  }, {
    key: 'shoudlComponentUpdate',
    value: function shoudlComponentUpdate() {
      return true;
    }
  }]);

  return Outlet;
}(_react2.default.Component);

var Tasks = function (_React$Component2) {
  _inherits(Tasks, _React$Component2);

  function Tasks() {
    _classCallCheck(this, Tasks);

    return _possibleConstructorReturn(this, (Tasks.__proto__ || Object.getPrototypeOf(Tasks)).apply(this, arguments));
  }

  _createClass(Tasks, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-tasks' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransitionGroup,
          { component: Outlet, transitionName: 'expanded', transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionAppear: true, transitionAppearTimeout: 250 },
          items && _react2.default.createElement('div', { className: 'reframe-tasks-overlay', onClick: this._handleClose.bind(this) }),
          items && _react2.default.createElement(
            'div',
            { className: 'reframe-tasks-list' },
            items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'task_' + index, className: 'reframe-tasks-item', onClick: _this3._handleChoose.bind(_this3, index) },
                item.label
              );
            }),
            _react2.default.createElement(
              'div',
              { className: 'reframe-tasks-cancel', onClick: this._handleClose.bind(this) },
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

      if (items[index].route) {
        this.context.history.push(items[index].route);
        this._handleClose();
      } else if (items[index].modal) {
        this.context.modal.open(items[index].modal);
        this._handleClose();
      } else if (items[index].drawer) {
        var location = items[index].location || 'right';
        this.context.drawer.open(items[index].drawer, location);
        this._handleClose();
      } else if (items[index].handler) {
        var done = this._handleClose.bind(this);
        items[index].handler(done);
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