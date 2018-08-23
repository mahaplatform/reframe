'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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

var Filters = function (_React$Component) {
  (0, _inherits3.default)(Filters, _React$Component);

  function Filters() {
    (0, _classCallCheck3.default)(this, Filters);
    return (0, _possibleConstructorReturn3.default)(this, (Filters.__proto__ || Object.getPrototypeOf(Filters)).apply(this, arguments));
  }

  (0, _createClass3.default)(Filters, [{
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
              _react2.default.cloneElement(panel, (0, _extends4.default)({}, _this2._getPanel(), { key: 'filter_panel_' + index }))
            );
          })
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.values) this._handleSet(this.props.values);
    }
  }, {
    key: '_handleSet',
    value: function _handleSet(defaultValue) {
      var _this3 = this;

      var values = Object.keys(defaultValue).reduce(function (values, key) {
        return (0, _extends4.default)({}, values, (0, _defineProperty3.default)({}, key, _this3._getValue(defaultValue[key])));
      }, {});
      this.props.onSet(values);
    }
  }, {
    key: '_getValue',
    value: function _getValue(value) {
      if (value.$in) return value.$in.map(function (key) {
        return { key: parseInt(key), value: '' };
      });
      if (value.$eq) return value.$eq;
      if (value.$dr) return { key: value.$dr, value: '' };
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
      var filtered = this.props.filtered;

      this.props.onUpdate(filtered);
    }
  }]);
  return Filters;
}(_react2.default.Component);

Filters.propTypes = {
  filters: _propTypes2.default.array,
  filtered: _propTypes2.default.object,
  panels: _propTypes2.default.array,
  results: _propTypes2.default.object,
  values: _propTypes2.default.object,
  onAddPanel: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onUpdate: _propTypes2.default.func,
  onRemovePanel: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
exports.default = Filters;