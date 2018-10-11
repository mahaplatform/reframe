'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function (_React$Component) {
  (0, _inherits3.default)(Section, _React$Component);

  function Section(props) {
    (0, _classCallCheck3.default)(this, Section);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    var collapsed = props.collapsed !== null ? props.collapsed : props.collapsing;
    _this.state = { collapsed: collapsed };
    return _this;
  }

  (0, _createClass3.default)(Section, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          fields = _props.fields,
          instructions = _props.instructions,
          label = _props.label;

      return _react2.default.createElement(
        'div',
        { className: this._getClass() },
        label && _react2.default.createElement(
          'h4',
          { className: 'ui header', onClick: this._handleToggle.bind(this) },
          label
        ),
        _react2.default.createElement(
          'div',
          { className: 'section' },
          instructions && _react2.default.createElement(
            'div',
            { className: 'instructions' },
            instructions
          ),
          fields.map(function (field, index) {
            return _react2.default.createElement(_field2.default, (0, _extends3.default)({ key: 'field_' + index }, _this2._getField(field, index)));
          })
        )
      );
    }
  }, {
    key: '_getClass',
    value: function _getClass() {
      var collapsing = this.props.collapsing;
      var collapsed = this.state.collapsed;

      var classes = ['ui', 'basic', 'segment'];
      if (collapsing) {
        classes.push('collapsing');
        classes.push(collapsed ? 'collapsed' : 'expanded');
      }
      return classes.join(' ');
    }
  }, {
    key: '_getField',
    value: function _getField(field, index) {
      var _props2 = this.props,
          data = _props2.data,
          errors = _props2.errors,
          tabIndexStart = _props2.tabIndexStart,
          onBusy = _props2.onBusy,
          onReady = _props2.onReady,
          onSubmit = _props2.onSubmit,
          onUpdateData = _props2.onUpdateData;

      return (0, _extends3.default)({}, field, {
        data: data,
        errors: errors,
        tabIndex: tabIndexStart + index,
        onBusy: onBusy,
        onReady: onReady,
        onSubmit: onSubmit,
        onUpdateData: onUpdateData
      });
    }
  }, {
    key: '_handleToggle',
    value: function _handleToggle() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }]);
  return Section;
}(_react2.default.Component);

Section.propTypes = {
  label: _propTypes2.default.string,
  instructions: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  collapsing: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  fields: _propTypes2.default.array,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  tabIndexStart: _propTypes2.default.number,
  onBusy: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Section.defaultProps = {
  collapsing: false,
  tabIndexStart: 1
};
exports.default = Section;