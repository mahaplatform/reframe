'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecordActions = function (_React$Component) {
  _inherits(RecordActions, _React$Component);

  function RecordActions() {
    _classCallCheck(this, RecordActions);

    return _possibleConstructorReturn(this, (RecordActions.__proto__ || Object.getPrototypeOf(RecordActions)).apply(this, arguments));
  }

  _createClass(RecordActions, [{
    key: 'render',
    value: function render() {
      _lodash2.default.templateSettings.interpolate = /#{([\s\S]+?)}/g;
      var _props = this.props;
      var button = _props.button;
      var icon = _props.icon;
      var record = _props.record;
      var recordActions = _props.recordActions;

      var classes = ['ui', 'icon', 'top', 'right', 'pointing', 'dropdown'];
      if (button) {
        classes = [].concat(_toConsumableArray(classes), ['tiny', 'button']);
      }
      return _react2.default.createElement(
        'div',
        { className: classes.join(' '), ref: 'record_actions' },
        _react2.default.createElement('i', { className: icon + ' icon' }),
        button ? _react2.default.createElement('i', { className: 'dropdown icon' }) : null,
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          recordActions.map(function (action, index) {
            var redirect = _lodash2.default.template(action.redirect)(record);
            return _react2.default.createElement(
              'div',
              { key: 'action_' + index, className: 'item' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: redirect },
                action.label
              )
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.record_actions).dropdown();
    }
  }]);

  return RecordActions;
}(_react2.default.Component);

RecordActions.propTypes = {
  button: _react2.default.PropTypes.bool.isRequired,
  icon: _react2.default.PropTypes.string.isRequired,
  record: _react2.default.PropTypes.object.isRequired,
  recordActions: _react2.default.PropTypes.array.isRequired
};
RecordActions.defaultProps = {
  button: true,
  icon: '',
  recordActions: [],
  record: {}
};
exports.default = RecordActions;