'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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
      var tasks = this.props.tasks;

      var primary = _lodash2.default.filter(tasks, function (task) {
        return task.primary === true;
      });
      return _react2.default.createElement(
        'div',
        { className: 'tasks' },
        _react2.default.createElement(
          'div',
          { className: 'ui basic buttons' },
          primary.map(function (task, index) {
            return _react2.default.createElement(_task2.default, _extends({ key: 'primary_task_' + index }, task));
          }),
          _react2.default.createElement(
            'div',
            { className: 'ui icon top right pointing dropdown button', ref: 'dropdown' },
            _react2.default.createElement('i', { className: 'setting icon' }),
            _react2.default.createElement('i', { className: 'caret down icon' }),
            _react2.default.createElement(
              'div',
              { className: 'menu' },
              tasks.map(function (task, index) {
                return _react2.default.createElement(_task2.default, _extends({ key: 'task_' + index }, task));
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

Tasks.propTypes = {
  tasks: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    route: _react2.default.PropTypes.string,
    handler: _react2.default.PropTypes.func,
    primary: _react2.default.PropTypes.bool
  })).isRequired
};
Tasks.defaultProps = {};
exports.default = Tasks;