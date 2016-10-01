'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      var tasks = this.props.tasks;

      return _react2.default.createElement(
        'div',
        { className: 'tasks' },
        _react2.default.createElement(
          'div',
          { className: 'ui basic buttons' },
          tasks.primary.map(function (task, index) {
            return _react2.default.createElement(
              _reactRouter.Link,
              { key: 'primary_task_' + index, to: task.route, className: 'ui button' },
              task.label
            );
          }),
          _react2.default.createElement(
            'div',
            { className: 'ui icon top right pointing dropdown button', ref: 'dropdown' },
            _react2.default.createElement('i', { className: 'setting icon' }),
            _react2.default.createElement('i', { className: 'caret down icon' }),
            _react2.default.createElement(
              'div',
              { className: 'menu' },
              [].concat(_toConsumableArray(tasks.primary), _toConsumableArray(tasks.secondary)).map(function (task, index) {
                return _react2.default.createElement(
                  'div',
                  { key: 'primary_secondary_task_' + index, className: 'item' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: task.route },
                    task.label
                  )
                );
              })
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.dropdown).dropdown();
    }
  }]);

  return Tasks;
}(_react2.default.Component);

Tasks.propTypes = {};
Tasks.defaultProps = {};


var mapStateToProps = function mapStateToProps(state, props) {
  return { state: state };
};

var mapDispatchToProps = {
  onChangeTab: actions.changeTab
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Tasks);