'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _tab = require('./tab');

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var tabs = _props.tabs;
      var active = _props.active;
      var onChangeTab = _props.onChangeTab;

      var content = tabs[active].content;
      return _react2.default.createElement(
        'div',
        { className: 'tabs' },
        _react2.default.createElement(
          'div',
          { className: 'ui top attached tabular menu' },
          tabs.map(function (tab, index) {
            var isActive = index == active;
            return _react2.default.createElement(_tab2.default, { key: 'tab_' + index, active: isActive, label: tab.label, onChangeTab: onChangeTab });
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ui bottom attached active tab segment' },
          function () {
            if (_lodash2.default.isString(content)) {
              return _react2.default.createElement(
                'p',
                null,
                content
              );
            } else if (_lodash2.default.isElement(content)) {
              return _react2.default.createElement('content', null);
            } else if (_lodash2.default.isFunction(content)) {
              return { content: content };
            }
          }()
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  tabs: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func, _react2.default.PropTypes.element])
  })).isRequired,
  onChangeTab: _react2.default.PropTypes.func.isRequired,
  active: _react2.default.PropTypes.number
};
Tabs.defaultProps = {
  active: 0
};
exports.default = Tabs;