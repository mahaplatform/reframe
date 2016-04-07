'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _field = require('./field.js');

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_React$Component) {
  _inherits(Section, _React$Component);

  function Section(props) {
    _classCallCheck(this, Section);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Section).call(this, props));

    _this.state = {
      collapsed: _this.props.collapsing
    };
    return _this;
  }

  _createClass(Section, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var segmentClass = this.props.borderless ? ['ui', 'basic', 'segment'] : ['ui', 'segment'];
      if (this.props.collapsing) {
        segmentClass.push('collapsing');
        segmentClass.push(this.state.collapsed ? 'collapsed' : 'expanded');
      }
      if (this.props.notes) {
        var Notes = this.props.notes;
        return _react2.default.createElement(
          'div',
          { className: 'ui horizontal segments' },
          _react2.default.createElement(
            'div',
            { className: segmentClass.join(' ') },
            function () {
              if (_this2.props.label) {
                return _react2.default.createElement(
                  'h4',
                  { className: 'ui header' },
                  _this2.props.label
                );
              }
            }(),
            function () {
              if (_this2.props.instructions) {
                return _this2.props.instructions;
              }
            }(),
            this.props.fields.map(function (field, index) {
              return _react2.default.createElement(_field2.default, _extends({ formId: _this2.props.formId }, field, {
                onChange: _this2.props.onFieldChange,
                ref: 'field_' + field.code,
                key: 'field_' + index }));
            })
          ),
          _react2.default.createElement(
            'div',
            { className: segmentClass.join(' ') },
            _react2.default.createElement(Notes, null)
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: segmentClass.join(' ') },
          function () {
            if (_this2.props.label) {
              return _react2.default.createElement(
                'h4',
                { className: 'ui header', onClick: _this2.toggle.bind(_this2) },
                _this2.props.label
              );
            }
          }(),
          function () {
            if (!_this2.props.collapsing || _this2.props.collapsing && !_this2.state.collapsed) {
              return _react2.default.createElement(
                'div',
                { className: 'section' },
                function () {
                  if (_this2.props.instructions) {
                    return _this2.props.instructions;
                  }
                }(),
                _this2.props.fields.map(function (field, index) {
                  return _react2.default.createElement(_field2.default, _extends({ formId: _this2.props.formId }, field, {
                    onChange: _this2.props.onFieldChange,
                    ref: 'field_' + index,
                    key: 'field_' + index }));
                })
              );
            }
          }()
        );
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState({ collapsed: !this.state.collapsed });
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return _.reduce(this.refs, function (values, field) {
        var fieldValue = field.getValue();
        if (_.isPlainObject(fieldValue)) {
          _.assign(values, fieldValue);
        } else {
          values[field.props.code] = fieldValue;
        }
        return values;
      }, {});
    }
  }, {
    key: 'setValue',
    value: function setValue(values) {
      var _this3 = this;

      _.each(values, function (field, value) {
        _this3.refs['field_' + field].setValue(value);
      });
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      var _this4 = this;

      _.each(values, function (field) {
        _.result(_this4.refs['field_' + field], 'clear');
      });
    }
  }]);

  return Section;
}(_react2.default.Component);

Section.defaultProps = {
  collapsing: false
};
exports.default = Section;