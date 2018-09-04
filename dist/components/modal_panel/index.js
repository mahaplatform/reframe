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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalPanel = function (_React$Component) {
  (0, _inherits3.default)(ModalPanel, _React$Component);

  function ModalPanel() {
    (0, _classCallCheck3.default)(this, ModalPanel);
    return (0, _possibleConstructorReturn3.default)(this, (ModalPanel.__proto__ || Object.getPrototypeOf(ModalPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalPanel, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          leftItems = _props.leftItems,
          position = _props.position,
          rightItems = _props.rightItems,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        position === 'top' && _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          leftItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation' },
            leftItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'left_' + index, className: 'reframe-modal-panel-header-navigation-item', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            title
          ),
          rightItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation' },
            rightItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'right_' + index, className: 'reframe-modal-panel-header-navigation-item', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
          this.props.children
        ),
        position === 'bottom' && _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-footer' },
          leftItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-footer-navigation' },
            leftItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'left_' + index, className: 'ui button', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          ),
          rightItems && _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-footer-navigation' },
            rightItems.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'right_' + index, className: 'ui red button', onClick: item.handler },
                _this2._getElement(item)
              );
            })
          )
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var className = this.props.className;

      var classes = ['reframe-modal-panel'];
      if (className) classes.push(className);
      return classes.join(' ');
    }
  }, {
    key: '_getElement',
    value: function _getElement(item) {
      if (item.component) return _lodash2.default.isFunction(item.component) ? _react2.default.createElement(item.component) : item.component;
      if (item.icon) return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel-header-navigation-button' },
        _react2.default.createElement('i', { className: 'fa fa-fw fa-' + item.icon })
      );
      if (item.label) return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel-header-navigation-button' },
        _react2.default.createElement(
          'span',
          null,
          item.label
        )
      );
    }
  }, {
    key: '_getLeftClass',
    value: function _getLeftClass() {
      var leftEnabled = this.props.leftEnabled;

      var classes = ['reframe-modal-panel-header-navigation'];
      if (!leftEnabled) classes.push('disabled');
      return classes.join(' ');
    }
  }, {
    key: '_getRightClass',
    value: function _getRightClass() {
      var rightEnabled = this.props.rightEnabled;

      var classes = ['reframe-modal-panel-header-navigation'];
      if (!rightEnabled) classes.push('disabled');
      return classes.join(' ');
    }
  }]);
  return ModalPanel;
}(_react2.default.Component);

ModalPanel.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  leftItems: _propTypes2.default.array,
  rightItems: _propTypes2.default.array,
  position: _propTypes2.default.string,
  title: _propTypes2.default.string
};
ModalPanel.defaultProps = {
  position: 'top'
};
exports.default = ModalPanel;