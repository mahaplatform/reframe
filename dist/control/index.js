'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _filefield = require('../filefield');

var _filefield2 = _interopRequireDefault(_filefield);

var _lookup = require('../lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _textarea = require('../textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

var _password = require('../password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Dynamic from '../dynamic'

// // import Checkboxes from '../checkboxes'
// // import ColorField from '../colorfield'

// // import MultiSelect from './multiselect'
// // import Radios from './radios'
// import Select from '../select'
// // import TableField from './tablefield'
// import Text from '../text'


// import DateField from '../datefield'

var standardControls = {
  'checkbox': _checkbox2.default,
  // 'checkboxes': Checkboxes,
  // 'colorfield': ColorField,
  'filefield': _filefield2.default,
  'lookup': _lookup2.default,
  // 'multiselect': MultiSelect,
  // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': _textfield2.default,
  'password': _password2.default,
  'textarea': _textarea2.default
};

var Control = function (_React$Component) {
  _inherits(Control, _React$Component);

  function Control() {
    _classCallCheck(this, Control);

    return _possibleConstructorReturn(this, (Control.__proto__ || Object.getPrototypeOf(Control)).apply(this, arguments));
  }

  _createClass(Control, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          type = _props.type,
          endpoint = _props.endpoint;

      var Element = _lodash2.default.isString(this.props.type) ? _lodash2.default.get(standardControls, type) : type;
      return _react2.default.createElement(
        'div',
        { className: 'control' },
        _react2.default.createElement(Element, this.props)
      );
    }
  }, {
    key: '_getDynamic',
    value: function _getDynamic() {
      var _props2 = this.props,
          endpoint = _props2.endpoint,
          value = _props2.value,
          text = _props2.text;

      return { endpoint: endpoint, value: value, text: text };
    }
  }]);

  return Control;
}(_react2.default.Component);

Control.propTypes = {
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  endpoint: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  options: _propTypes2.default.array
};
Control.defaultProps = {
  type: 'textfield',
  datasource: null,
  options: []
};
exports.default = Control;