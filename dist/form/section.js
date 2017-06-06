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

var _field = require('./field');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

    _this.state = {
      collapsed: props.collapsed !== null ? props.collapsed : props.collapsing
    };
    return _this;
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          collapsing = _props.collapsing,
          label = _props.label,
          instructions = _props.instructions,
          fields = _props.fields,
          data = _props.data,
          errors = _props.errors,
          onSubmit = _props.onSubmit,
          onUpdateData = _props.onUpdateData;
      var collapsed = this.state.collapsed;

      var classes = ['ui', 'basic', 'segment'];
      if (collapsing) {
        classes.push('collapsing');
        classes.push(collapsed ? 'collapsed' : 'expanded');
      }
      return _react2.default.createElement(
        'div',
        { className: classes.join(' ') },
        label && _react2.default.createElement(
          'h4',
          { className: 'ui header', onClick: this.toggle.bind(this) },
          label,
          collapsed ? _react2.default.createElement('i', { className: 'plus icon' }) : _react2.default.createElement('i', { className: 'minus icon' })
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
            return _react2.default.createElement(_field2.default, _extends({}, field, {
              data: data,
              errors: errors,
              key: 'field_' + index,
              onSubmit: onSubmit,
              onUpdateData: onUpdateData }));
          })
        )
      );
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }]);

  return Section;
}(_react2.default.Component);

Section.propTypes = {
  label: _propTypes2.default.string,
  instructions: _propTypes2.default.string,
  collapsing: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  fields: _propTypes2.default.array,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  onSubmit: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
Section.defaultProps = {
  collapsing: false
};
exports.default = Section;