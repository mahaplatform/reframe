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
          items = _props.items,
          open = _props.open;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-tasks' },
        children,
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement('div', { className: 'reframe-tasks-overlay', onClick: this._handleClose.bind(this) })
        ),
        _react2.default.createElement(
          _reactTransitionGroup.CSSTransition,
          { 'in': open, classNames: 'expanded', timeout: 250, mountOnEnter: true, unmountOnExit: true },
          _react2.default.createElement(
            'div',
            { className: 'reframe-tasks-list' },
            items && items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'task_' + index, className: 'reframe-tasks-item', onClick: _this2._handleChoose.bind(_this2, index) },
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
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var items = this.props.items;
      var _context = this.context,
          drawer = _context.drawer,
          modal = _context.modal,
          router = _context.router;

      if (items[index].route) {
        router.history.push(items[index].route);
        this._handleClose();
      } else if (items[index].modal) {
        modal.open(items[index].modal);
        this._handleClose();
      } else if (items[index].drawer) {
        var location = items[index].location || 'right';
        drawer.open(items[index].drawer, location);
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
  router: _propTypes2.default.object
};
Tasks.propTypes = {
  children: _propTypes2.default.any,
  items: _propTypes2.default.array,
  open: _propTypes2.default.bool,
  onClear: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpen: _propTypes2.default.func
};
exports.default = Tasks;