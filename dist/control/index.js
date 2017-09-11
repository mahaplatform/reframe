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

var _colorfield = require('../colorfield');

var _colorfield2 = _interopRequireDefault(_colorfield);

var _datefield = require('../datefield');

var _datefield2 = _interopRequireDefault(_datefield);

var _filefield = require('../filefield');

var _filefield2 = _interopRequireDefault(_filefield);

var _lookup = require('../lookup');

var _lookup2 = _interopRequireDefault(_lookup);

var _moneyfield = require('../moneyfield');

var _moneyfield2 = _interopRequireDefault(_moneyfield);

var _text = require('../text');

var _text2 = _interopRequireDefault(_text);

var _textarea = require('../textarea');

var _textarea2 = _interopRequireDefault(_textarea);

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

var _timefield = require('../timefield');

var _timefield2 = _interopRequireDefault(_timefield);

var _toggle_list = require('../toggle_list');

var _toggle_list2 = _interopRequireDefault(_toggle_list);

var _password = require('../password');

var _password2 = _interopRequireDefault(_password);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Checkboxes from '../checkboxes'

// import MultiSelect from './multiselect'
// import Radios from './radios'
// import Select from '../select'
// import TableField from './tablefield'


var standardControls = {
  'checkbox': _checkbox2.default,
  // 'checkboxes': Checkboxes,
  'colorfield': _colorfield2.default,
  'datefield': _datefield2.default,
  'filefield': _filefield2.default,
  'lookup': _lookup2.default,
  'moneyfield': _moneyfield2.default,
  // 'multiselect': MultiSelect,
  // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': _textfield2.default,
  'password': _password2.default,
  'text': _text2.default,
  'textarea': _textarea2.default,
  // 'tablefield': TableField
  'timefield': _timefield2.default,
  'togglelist': _toggle_list2.default
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
      var type = this.props.type;

      var Element = _lodash2.default.isString(this.props.type) ? _lodash2.default.get(standardControls, type) || standardControls.textfield : type;
      return _react2.default.createElement(
        'div',
        { className: 'control' },
        _react2.default.createElement(Element, this.props)
      );
    }
  }]);

  return Control;
}(_react2.default.Component);

Control.propTypes = {
  type: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]).isRequired,
  endpoint: _propTypes2.default.string,
  defaultValue: _propTypes2.default.any,
  options: _propTypes2.default.array,
  text: _propTypes2.default.string,
  value: _propTypes2.default.string,
  onBusy: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  onReady: _propTypes2.default.func,
  onSet: _propTypes2.default.func
};
Control.defaultProps = {
  type: 'textfield',
  options: []
};
exports.default = Control;