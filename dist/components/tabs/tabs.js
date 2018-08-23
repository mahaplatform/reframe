'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call.apply(_ref, [this].concat(args))), _this), _this._swipe = {}, _this.state = {
      visited: [],
      transitioning: false
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Tabs, [{
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
          (0, _extends3.default)({ className: 'reframe-tabs-body' }, this._getTabsBody()),
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

      var visited = _lodash2.default.uniq([].concat((0, _toConsumableArray3.default)(this.state.visited), [index]));
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