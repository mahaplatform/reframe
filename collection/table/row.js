'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _cell = require('./cell.js');

var _cell2 = _interopRequireDefault(_cell);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _logger = require('../../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'tr',
        null,
        function () {
          if (!_lodash2.default.isEmpty(_this2.props.batchActions)) {
            return _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('input', { type: 'checkbox', checked: _this2.props.isChecked, onChange: _this2.handleCheck.bind(_this2, _this2.props.record.id) })
            );
          }
        }(),
        this.props.columns.map(function (column, index) {
          if (_lodash2.default.includes(_this2.props.visible, index)) {
            return _react2.default.createElement(_cell2.default, _extends({ key: 'column_' + index }, _this2.props.record, { params: _this2.props.params, column: column }));
          }
        }),
        function () {
          if (!_lodash2.default.isEmpty(_this2.props.recordActions)) {
            return _react2.default.createElement(
              'td',
              { className: 'center aligned' },
              _react2.default.createElement(
                'div',
                { className: 'ui icon top right pointing dropdown', ref: 'itemMenu' },
                _react2.default.createElement('i', { className: 'ui horizontal ellipsis icon' }),
                _react2.default.createElement(
                  'div',
                  { className: 'menu' },
                  _this2.props.recordActions.map(function (action, index) {
                    if (action.action == 'edit') {
                      return _react2.default.createElement(
                        'div',
                        { key: 'action_' + index, onClick: _this2.handleEdit.bind(_this2), className: 'item' },
                        'Edit'
                      );
                    } else if (action.action == 'delete') {
                      return _react2.default.createElement(
                        'div',
                        { key: 'action_' + index, onClick: _this2.handleDelete.bind(_this2, _this2.props.record.id), className: 'item' },
                        'Delete'
                      );
                    } else if (action.route) {
                      var compiled = _lodash2.default.template(action.route);
                      var to = compiled(_this2.props.record);
                      return _react2.default.createElement(
                        'div',
                        { key: 'action_' + index, className: 'item' },
                        _react2.default.createElement(
                          _reactRouter.Link,
                          { to: to },
                          action.label
                        )
                      );
                    } else {
                      return _react2.default.createElement(
                        'div',
                        { key: 'action_' + index, onClick: _this2.handleAction.bind(_this2, action, _this2.props.record.id), className: 'item' },
                        action.label
                      );
                    }
                  })
                )
              )
            );
          } else {
            return _react2.default.createElement(
              'td',
              null,
              ' '
            );
          }
        }()
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $(this.refs.itemMenu).dropdown();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      $(this.refs.itemMenu).dropdown('refresh');
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(id) {
      var isChecked = _lodash2.default.includes(this.props.checked, id);
      this.props.onCheck(this.props.componentId, id, !isChecked);
    }
  }, {
    key: 'handleEdit',
    value: function handleEdit() {
      this.props.onEdit(this.props.record.id);
    }
  }, {
    key: 'handleDelete',
    value: function handleDelete(id) {
      this.props.onDelete(id);
    }
  }, {
    key: 'handleAction',
    value: function handleAction(action, id) {
      if (action.handler) {
        if (_lodash2.default.isString(action.handler)) {
          var handlerFn = this.props.actions[action.handler];
        } else if (_lodash2.default.isFunction(action.handler)) {
          var handlerFn = action.handler;
        } else {
          _logger2.default.error('NOTICE: Handlers for row actions must be a function or a string\n        matching the name of a known Flux action. Type ' + _typeof(action.handler) + ' given.');
        }
        if (action.confirm === true) {
          ModalActions.openModal(this.props.componentId, function (props) {
            return _react2.default.createElement(ConfirmModal, _extends({ onApprove: _lodash2.default.bind(handlerFn, handlerFn, id) }, props));
          });
        } else {
          _lodash2.default.defer(handlerFn, id);
        }
      }
    }
  }]);

  return Row;
}(_react2.default.Component);

exports.default = Row;