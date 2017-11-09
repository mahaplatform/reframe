'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
      var _props = this.props,
          leftText = _props.leftText,
          rightText = _props.rightText,
          title = _props.title;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          leftText ? _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation', onClick: this._handleLeftClick.bind(this) },
            leftText
          ) : _react2.default.createElement('div', { className: 'reframe-modal-panel-header-navigation' }),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            title
          ),
          rightText ? _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-navigation', onClick: this._handleRightClick.bind(this) },
            rightText
          ) : _react2.default.createElement('div', { className: 'reframe-modal-panel-header-navigation' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
          this.props.children
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
  }, {
    key: '_handleLeftClick',
    value: function _handleLeftClick() {
      this.props.onLeftClick();
    }
  }, {
    key: '_handleRightClick',
    value: function _handleRightClick() {
      this.props.onRightClick();
    }
  }]);

  return ModalPanel;
}(_react2.default.Component);

ModalPanel.propTypes = {
  children: _propTypes2.default.any,
  leftEnabled: _propTypes2.default.bool,
  leftText: _propTypes2.default.string,
  rightEnabled: _propTypes2.default.bool,
  rightText: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onLeftClick: _propTypes2.default.func,
  onRightClick: _propTypes2.default.func
};
ModalPanel.defaultProps = {
  leftEnabled: true,
  rightEnabled: true,
  onLeftClick: function onLeftClick() {},
  onRightClick: function onRightClick() {}
};
exports.default = ModalPanel;