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

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

var _checkbox = require('./checkbox.js');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxes = require('./checkboxes.js');

var _checkboxes2 = _interopRequireDefault(_checkboxes);

var _countryselect = require('./countryselect.js');

var _countryselect2 = _interopRequireDefault(_countryselect);

var _datefield = require('./datefield.js');

var _datefield2 = _interopRequireDefault(_datefield);

var _dateselect = require('./dateselect.js');

var _dateselect2 = _interopRequireDefault(_dateselect);

var _daterange = require('./daterange.js');

var _daterange2 = _interopRequireDefault(_daterange);

var _emailfield = require('./emailfield.js');

var _emailfield2 = _interopRequireDefault(_emailfield);

var _fields = require('./fields.js');

var _fields2 = _interopRequireDefault(_fields);

var _filefield = require('./filefield.js');

var _filefield2 = _interopRequireDefault(_filefield);

var _moneyfield = require('./moneyfield.js');

var _moneyfield2 = _interopRequireDefault(_moneyfield);

var _monthselect = require('./monthselect.js');

var _monthselect2 = _interopRequireDefault(_monthselect);

var _numberfield = require('./numberfield.js');

var _numberfield2 = _interopRequireDefault(_numberfield);

var _numberselect = require('./numberselect.js');

var _numberselect2 = _interopRequireDefault(_numberselect);

var _passwordfield = require('./passwordfield.js');

var _passwordfield2 = _interopRequireDefault(_passwordfield);

var _phonefield = require('./phonefield.js');

var _phonefield2 = _interopRequireDefault(_phonefield);

var _radios = require('./radios.js');

var _radios2 = _interopRequireDefault(_radios);

var _select = require('./select.js');

var _select2 = _interopRequireDefault(_select);

var _stateselect = require('./stateselect.js');

var _stateselect2 = _interopRequireDefault(_stateselect);

var _textarea = require('./textarea.js');

var _textarea2 = _interopRequireDefault(_textarea);

var _textfield = require('./textfield.js');

var _textfield2 = _interopRequireDefault(_textfield);

var _timezoneselect = require('./timezoneselect.js');

var _timezoneselect2 = _interopRequireDefault(_timezoneselect);

var _urlfield = require('./urlfield.js');

var _urlfield2 = _interopRequireDefault(_urlfield);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import {DefaultsAsyncContainer} from 'components/containers/async.js';
//import API from 'api/standard'
//import FormActions from 'actions/form.js'

var standardControls = {
  'button': _button2.default,
  'checkbox': _checkbox2.default,
  'checkboxes': _checkboxes2.default,
  'countryselect': _countryselect2.default,
  'datefield': _datefield2.default,
  'daterange': _daterange2.default,
  'dateselect': _dateselect2.default,
  'emailfield': _emailfield2.default,
  'fields': _fields2.default,
  'filefield': _filefield2.default,
  'moneyfield': _moneyfield2.default,
  'monthselect': _monthselect2.default,
  'numberfield': _numberfield2.default,
  'numberselect': _numberselect2.default,
  'passwordfield': _passwordfield2.default,
  'phonefield': _phonefield2.default,
  'radios': _radios2.default,
  'stateselect': _stateselect2.default,
  'select': _select2.default,
  'textarea': _textarea2.default,
  'textfield': _textfield2.default,
  'timezoneselect': _timezoneselect2.default,
  'urlfield': _urlfield2.default
};

var FieldMessage = function FieldMessage(_ref) {
  var message = _ref.message;
  var _ref$type = _ref.type;
  var type = _ref$type === undefined ? 'normal' : _ref$type;

  var fieldTypeColors = {
    normal: '',
    error: 'red',
    success: 'green',
    info: 'blue',
    inverted: 'inverse'
  };

  return _react2.default.createElement(
    'div',
    { className: 'ui basic ' + _lodash2.default.get(fieldTypeColors, type, '') + ' pointing prompt label transition visible' },
    message
  );
};

var Field = function (_React$Component) {
  _inherits(Field, _React$Component);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Field).apply(this, arguments));
  }

  _createClass(Field, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var className = ['field'];
      if (this.props.required) {
        className.push('required');
      }
      if (this.props.inline) {
        className.push('inline');
      }
      if (this.props.error) {
        className.push('error');
      }
      return _react2.default.createElement(
        'div',
        { className: className.join(' '), 'data-field-code': this.props.code },
        this.props.label && !_lodash2.default.includes(['checkbox'], this.props.type) ? _react2.default.createElement(
          'label',
          null,
          this.props.label
        ) : '',
        _react2.default.createElement(
          'span',
          { style: { marginBottom: 6, display: 'block' } },
          this.props.instructions ? this.props.instructions : ''
        ),
        function () {
          // Lookup a known field type if the type is a string
          if (_lodash2.default.isString(_this2.props.type)) {
            var Control = _lodash2.default.get(standardControls, _this2.props.type);
            return _react2.default.createElement(Control, _extends({ ref: 'control' }, _this2.props, { onChange: _this2.props.onChange }));
          }

          // Use a supplied field type if there's an object given
          if (!_lodash2.default.isUndefined(_this2.props.type)) {
            var _Field = _this2.props.type;
            return _react2.default.createElement(_Field, _extends({}, _this2.props, { ref: 'control', onChange: _this2.props.onChange }));
          }
        }(),
        function () {
          if (_this2.props.error) {
            return _react2.default.createElement(FieldMessage, { type: 'error', message: _this2.props.error });
          }
        }()
      );
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.refs['control'].getValue();
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      this.refs.control.setValue(value);
    }
  }, {
    key: 'clearField',
    value: function clearField() {
      _lodash2.default.result(this.refs.control, 'clear');
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      if (this.props.type !== 'fields') {
        //FormActions.change(this.props.formId, this.props.code, this.getValue())
      }
      if (this.props.onChange && this.props.type !== 'fields') {
        this.props.onChange(this.props.code, this.getValue());
      }
    }
  }]);

  return Field;
}(_react2.default.Component);
//
//class AsyncAwareField extends React.Component {
//  render() {
//    return <DefaultsAsyncContainer ref="container" component={Field} {...this.getComponentProps()}/>
//  }
//
//  getValue() {
//    return this.refs.container.getInnerComponent().getValue();
//  }
//
//  getComponentProps() {
//    if(this.props.endpoint) {
//      let {endpoint, value, text} = this.props;
//      return _(this.props)
//        .omit(['endpoint', 'field', 'value'])
//        .merge({
//          options: API.loadJSON(endpoint)
//            .then(response => {
//              if(_.isArray(response)) {
//                return {records: response}
//              }
//              else {
//                return response
//              }
//            })
//            .then(({records}) => {
//              return _.map(records, record => {
//                return {
//                  key: _.get(record, value),
//                  value: _.get(record, text)
//                }
//              })
//            })
//        }).value();
//    }
//    else {
//      return this.props;
//    }
//  }
//}
//
//export default AsyncAwareField


Field.propTypes = {
  label: _react2.default.PropTypes.string,
  code: _react2.default.PropTypes.string,
  instructions: _react2.default.PropTypes.string,
  options: _react2.default.PropTypes.array,
  type: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  error: _react2.default.PropTypes.string
};
exports.default = Field;