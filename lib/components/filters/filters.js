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

var Filters = function (_React$Component) {
  _inherits(Filters, _React$Component);

  function Filters() {
    _classCallCheck(this, Filters);

    return _possibleConstructorReturn(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  _createClass(Filters, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var panels = this.props.panels;

      return _react2.default.createElement(
        'div',
        { className: 'reframe-filters' },
        _react2.default.createElement(_overview2.default, this._getOverview()),
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.onSet(this.props.values);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var results = this.props.results;

      if (!_lodash2.default.isEqual(prevProps.results, results)) this._handleChange();
    }
  }, {
    key: '_getOverview',
    value: function _getOverview() {
      return this.props;
    }
  }, {
    key: '_getPanel',
    value: function _getPanel() {
      var _props = this.props,
          results = _props.results,
          onChange = _props.onChange,
          onRemovePanel = _props.onRemovePanel;

      return {
        results: results,
        onChange: onChange,
        onRemovePanel: onRemovePanel
      };
    }
  }, {
    key: '_handleChange',
    value: function _handleChange() {
      this.props.onUpdate(this.props.results);
    }
  }]);

  return Filters;
}(_react2.default.Component);

Filters.propTypes = {
  filters: _propTypes2.default.array,
  panels: _propTypes2.default.array,
  results: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
exports.default = Filters;