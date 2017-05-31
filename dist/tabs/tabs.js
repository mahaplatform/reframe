'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollpane = require('../scrollpane');

var _scrollpane2 = _interopRequireDefault(_scrollpane);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = exports.Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      visted: [],
      transitioning: false
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          chosen = _props.chosen,
          tabs = _props.tabs;
      var visited = this.state.visited;

      return _react2.default.createElement(
        _scrollpane2.default,
        null,
        children,
        _react2.default.createElement(
          'div',
          { className: 'reframe-scrollpane-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-tabs' },
            tabs.map(function (tab, index) {
              var klass = ['reframe-tabs-item'];
              if (index === chosen) klass.push('active');
              return _react2.default.createElement(
                'a',
                { key: 'tab_' + index, onClick: _this2._handleChoose.bind(_this2, index), className: klass.join(' ') },
                tab.label
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-tab' },
          tabs.map(function (tab, index) {
            return _react2.default.createElement(
              'div',
              { key: 'tab_body_' + index, className: 'reframe-tab-body ' + _this2._getStatus(index) },
              _react2.default.createElement(tab.component, null)
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onChoose(0);
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var _this3 = this;

      var onChoose = this.props.onChoose;

      var visited = _lodash2.default.uniq([].concat(_toConsumableArray(this.state.visted), [index]));
      this.setState({ visited: visited, transitioning: true });
      setTimeout(function () {
        return onChoose(index);
      }, 20);
      setTimeout(function () {
        return _this3.setState({ transitioning: false });
      }, 520);
    }
  }, {
    key: '_getStatus',
    value: function _getStatus(index) {
      var transitioning = this.state.transitioning;
      var chosen = this.props.chosen;

      var statuses = [];
      if (transitioning) statuses.push('transitioning');
      if (index > chosen) statuses.push('right');
      if (index < chosen) statuses.push('left');
      if (index === chosen) statuses.push('active');
      return statuses.join(' ');
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.contextTypes = {
  stack: _propTypes2.default.object
};
Tabs.propTypes = {
  chosen: _propTypes2.default.number,
  tabs: _propTypes2.default.array
};
exports.default = Tabs;