'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this._swipe = {}, _this.state = {
      visited: [],
      transitioning: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          header = _props.header,
          items = _props.items;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-tabs' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-tabs-header' },
          header && _react2.default.createElement(
            'div',
            { className: 'reframe-tabs-header-content' },
            _lodash2.default.isFunction() ? _react2.default.createElement(header) : header
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-tabs-items' },
            items.map(function (item, index) {
              return _react2.default.createElement(
                'div',
                { key: 'tab_' + index, className: _this2._getItemClass(index), onClick: _this2._handleChoose.bind(_this2, index) },
                item.label
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          _extends({ className: 'reframe-tabs-body' }, this._getTabsBody()),
          items.map(function (item, index) {
            return _react2.default.createElement(
              'div',
              { key: 'tab_body_' + index, className: _this2._getTabClass(index) },
              _react2.default.createElement(
                'div',
                { className: 'reframe-tab-content' },
                _lodash2.default.isFunction() ? _react2.default.createElement(item.component) : item.component
              )
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
    key: '_getItemClass',
    value: function _getItemClass(index) {
      var chosen = this.props.chosen;

      var classes = ['reframe-tabs-item'];
      if (index === chosen) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_getTabClass',
    value: function _getTabClass(index) {
      var transitioning = this.state.transitioning;
      var chosen = this.props.chosen;

      var classes = ['reframe-tab'];
      if (transitioning) classes.push('transitioning');
      if (index > chosen) classes.push('right');
      if (index < chosen) classes.push('left');
      if (index === chosen) classes.push('active');
      return classes.join(' ');
    }
  }, {
    key: '_handleChoose',
    value: function _handleChoose(index) {
      var _this3 = this;

      var onChoose = this.props.onChoose;

      var visited = _lodash2.default.uniq([].concat(_toConsumableArray(this.state.visited), [index]));
      this.setState({ visited: visited, transitioning: true });
      setTimeout(function () {
        return onChoose(index);
      }, 20);
      setTimeout(function () {
        return _this3.setState({ transitioning: false });
      }, 520);
    }
  }, {
    key: '_getTabsBody',
    value: function _getTabsBody() {
      return {
        className: 'reframe-tabs-body',
        onTouchStart: this._handleTouchStart.bind(this),
        onTouchMove: this._handleTouchMove.bind(this),
        onTouchEnd: this._handleTouchEnd.bind(this)
      };
    }
  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(e) {
      this._swipe = { x: e.touches[0].clientX };
    }
  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(e) {
      if (e.changedTouches && e.changedTouches.length) {
        this._swipe.swiping = true;
      }
    }
  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd(e) {
      var _props2 = this.props,
          chosen = _props2.chosen,
          items = _props2.items;

      var touch = e.changedTouches[0];
      var dist = touch.clientX - this._swipe.x;
      if (this._swipe.swiping && Math.abs(dist) > 30) {
        if (dist < 0 && chosen < items.length - 1) this._handleChoose(chosen + 1);
        if (dist > 0 && chosen > 0) this._handleChoose(chosen - 1);
      }
      this._swipe = {};
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.contextTypes = {
  stack: _propTypes2.default.object
};
Tabs.propTypes = {
  chosen: _propTypes2.default.number,
  header: _propTypes2.default.any,
  items: _propTypes2.default.array,
  onChoose: _propTypes2.default.func
};
Tabs.defaultProps = {
  chosen: null,
  header: null,
  items: [],
  onChoose: function onChoose(index) {}
};
exports.default = Tabs;