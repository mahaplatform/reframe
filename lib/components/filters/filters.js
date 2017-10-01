'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactTransitionGroup = require('react-transition-group');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _overview = require('./overview');

var _overview2 = _interopRequireDefault(_overview);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter() {
    _classCallCheck(this, Filter);

    return _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).apply(this, arguments));
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var panels = this.props.panels;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters' },
        _react2.default.createElement(_overview2.default, this.props),
        _react2.default.createElement(
          _reactTransitionGroup.TransitionGroup,
          null,
          panels.map(function (panel, index) {
            return _react2.default.createElement(
              _reactTransitionGroup.CSSTransition,
              { key: 'filter_panel_' + index, classNames: 'slide', timeout: 500 },
              _react2.default.cloneElement(panel, _extends({}, _this2._getPanel(), { key: 'filter_panel_' + index }))
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          values = _props.values,
          onUpdate = _props.onUpdate;

      if (!_lodash2.default.isEqual(prevProps.values, values)) onUpdate(values);
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props2 = this.props,
          values = _props2.values,
          onChange = _props2.onChange,
          onRemovePanel = _props2.onRemovePanel;

      return {
        values: values,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      };
    }
  }]);

  return Filter;
}(_react2.default.Component);

Filter.propTypes = {
  filters: _propTypes2.default.array,
  values: _propTypes2.default.object,
  panels: _propTypes2.default.array,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func
};
exports.default = Filter;