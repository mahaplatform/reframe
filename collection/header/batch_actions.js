'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BatchActions = function (_React$Component) {
  _inherits(BatchActions, _React$Component);

  function BatchActions() {
    _classCallCheck(this, BatchActions);

    return _possibleConstructorReturn(this, (BatchActions.__proto__ || Object.getPrototypeOf(BatchActions)).apply(this, arguments));
  }

  _createClass(BatchActions, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ui selection dropdown item', ref: 'batchActions' },
        _react2.default.createElement('i', { className: 'dropdown icon' }),
        _react2.default.createElement(
          'div',
          { className: 'default text' },
          'With Selected'
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu' },
          this.props.batchActions.map(function (action, index) {
            return _react2.default.createElement(
              'div',
              { className: 'item', key: 'batch_action_' + index, onClick: action.handler },
              action.label
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.batchActions).dropdown({ action: 'nothing' });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      $(this.refs.batchActions).dropdown('refresh');
    }
  }]);

  return BatchActions;
}(_react2.default.Component);

exports.default = BatchActions;