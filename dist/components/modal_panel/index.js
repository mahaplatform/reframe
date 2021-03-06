'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalPanel = function (_React$Component) {
  _inherits(ModalPanel, _React$Component);

  function ModalPanel() {
    _classCallCheck(this, ModalPanel);

    return _possibleConstructorReturn(this, (ModalPanel.__proto__ || Object.getPrototypeOf(ModalPanel)).apply(this, arguments));
  }

  _createClass(ModalPanel, [{
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
      var _props2 = this.props,
          className = _props2.className,
          color = _props2.color;

      var classes = ['reframe-modal-panel'];
      if (className) classes.push(className);
      if (color) classes.push(color);
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
  color: _propTypes2.default.string,
  leftEnabled: _propTypes2.default.bool,
  leftItems: _propTypes2.default.array,
  rightEnabled: _propTypes2.default.bool,
  rightItems: _propTypes2.default.array,
  position: _propTypes2.default.string,
  title: _propTypes2.default.string
};
ModalPanel.defaultProps = {
  position: 'top'
};
exports.default = ModalPanel;