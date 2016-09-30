'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _dynamic = require('./dynamic');

var _dynamic2 = _interopRequireDefault(_dynamic);

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxes = require('./checkboxes');

var _checkboxes2 = _interopRequireDefault(_checkboxes);

var _colorfield = require('./colorfield');

var _colorfield2 = _interopRequireDefault(_colorfield);

var _filefield = require('./filefield');

var _filefield2 = _interopRequireDefault(_filefield);

var _multiselect = require('./multiselect');

var _multiselect2 = _interopRequireDefault(_multiselect);

var _radios = require('./radios');

var _radios2 = _interopRequireDefault(_radios);

var _select = require('./select');

var _select2 = _interopRequireDefault(_select);

var _tablefield = require('./tablefield');

var _tablefield2 = _interopRequireDefault(_tablefield);

var _textarea = require('./textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _textfield = require('./textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var standardControls = {
  'checkbox': _checkbox2.default,
  'checkboxes': _checkboxes2.default,
  'colorfield': _colorfield2.default,
  'filefield': _filefield2.default,
  'multiselect': _multiselect2.default,
  'radios': _radios2.default,
  'select': _select2.default,
  'textfield': _textfield2.default,
  'textarea': _textarea2.default,
  'tablefield': _tablefield2.default
};

var Control = function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control(props) {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).call(this, props));
  }

  _createClass(Control, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var type = _props.type;
      var datasource = _props.datasource;

      var Element = _lodash2.default.isString(this.props.type) ? _lodash2.default.get(standardControls, type) : type;
      var controlProps = _lodash2.default.omit(this.props, ['type', 'datasource']);
      if (datasource) {
        return _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement(
            _dynamic2.default,
            { datasource: datasource },
            _react2.default.createElement(Element, controlProps)
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'control' },
          _react2.default.createElement(Element, controlProps)
        );
      }
    }
  }]);

  return Control;
}(_react2.default.Component);

Control.propTypes = {
  type: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  datasource: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.shape({
    source: _react2.default.PropTypes.string,
    key: _react2.default.PropTypes.string,
    value: _react2.default.PropTypes.string
  })]),
  defaultValue: _react2.default.PropTypes.any,
  options: _react2.default.PropTypes.array
};
Control.defaultProps = {
  type: 'textfield',
  datasource: null,
  options: []
};
exports.default = Control;