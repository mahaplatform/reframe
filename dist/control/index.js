'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _textfield = require('../textfield');

var _textfield2 = _interopRequireDefault(_textfield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Dynamic from 'admin/components/dynamic'
// import Checkbox from 'admin/components/checkbox'
// // import Checkboxes from 'admin/components/checkboxes'
// // import ColorField from 'admin/components/colorfield'
// import FileField from 'admin/components/filefield'
// import Lookup from 'admin/components/lookup'
// // import MultiSelect from './multiselect'
// // import Radios from './radios'
// import Select from 'admin/components/select'
// // import TableField from './tablefield'
// import Text from 'admin/components/text'
// import TextArea from 'admin/components/textarea'


// import Password from 'admin/components/password'
// import DateField from 'admin/components/datefield'

var standardControls = {
  // 'checkbox': Checkbox,
  // 'checkboxes': Checkboxes,
  // 'colorfield': ColorField,
  // 'filefield': FileField,
  // 'lookup': Lookup,
  // // 'multiselect': MultiSelect,
  // // 'radios': Radios,
  // 'select': Select,
  // 'text': Text,
  'textfield': _textfield2.default
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

      return {
        endpoint: endpoint,
        value: value,
        text: text
      };
    }
  }]);

  return Control;
}(_react2.default.Component);

Control.propTypes = {
  type: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func]).isRequired,
  endpoint: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.any,
  options: _react2.default.PropTypes.array
};
Control.defaultProps = {
  type: 'textfield',
  datasource: null,
  options: []
};
exports.default = Control;