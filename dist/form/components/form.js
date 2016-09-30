'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mapDispatchToProps;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _map_fields = require('../map_fields');

var _map_fields2 = _interopRequireDefault(_map_fields);

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

var _buttons = require('./buttons');

var _buttons2 = _interopRequireDefault(_buttons);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var title = _props.title;
      var instructions = _props.instructions;
      var buttons = _props.buttons;
      var _props2 = this.props;
      var onUpdateData = _props2.onUpdateData;
      var onValidateForm = _props2.onValidateForm;
      var onResetForm = _props2.onResetForm;
      var _props$state = this.props.state;
      var status = _props$state.status;
      var sections = _props$state.sections;
      var message = _props$state.message;
      var data = _props$state.data;
      var errors = _props$state.errors;

      if (status) {
        var formClasses = ['ui', 'form', status];
        if (_lodash2.default.includes(['configuring', 'configured', 'loading', 'submitting'], status)) {
          formClasses.push('loading');
        }
        var segmentsStyle = style == 'basic' ? {
          border: 'none !important',
          borderRadius: 0,
          boxShadow: 'none !important'
        } : {};
        var segmentClass = style == 'basic' ? 'ui basic segment' : 'ui segment';
        return _react2.default.createElement(
          'div',
          { className: formClasses.join(' ') },
          _react2.default.createElement(
            'div',
            { className: 'ui segments', style: segmentsStyle },
            title ? _react2.default.createElement(
              'div',
              { className: 'ui inverted segment' },
              title
            ) : null,
            instructions ? _react2.default.createElement(
              'div',
              { className: segmentClass },
              _react2.default.createElement(
                'div',
                { className: 'instructions' },
                instructions
              )
            ) : null,
            sections.map(function (section, index) {
              return _react2.default.createElement(_section2.default, _extends({}, section, {
                style: style,
                data: data,
                errors: errors,
                key: 'section_' + index,
                onUpdateData: onUpdateData }));
            }),
            message ? _react2.default.createElement(
              'div',
              { className: segmentClass },
              _react2.default.createElement(_message2.default, { message: message })
            ) : null,
            buttons ? _react2.default.createElement(_buttons2.default, { buttons: buttons,
              onValidateForm: onValidateForm,
              onResetForm: onResetForm }) : null
          )
        );
      } else {
        return _react2.default.createElement('div', { className: 'ui active centered inline loader' });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._handleLoadSections();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props$state2 = this.props.state;
      var status = _props$state2.status;
      var data = _props$state2.data;

      if (prevProps.state.status != status) {
        if (status == 'configured') {
          this._handleLoadData();
        } else if (status == 'validated') {
          this._handleSubmit();
        } else if (status == 'success') {
          this._handleSuccess();
        } else if (status == 'failure') {
          this._handleFailure();
        }
      } else if (prevProps.state.data != data) {
        this._handleChange(prevProps.data, data);
      }
    }
  }, {
    key: '_handleLoadSections',
    value: function _handleLoadSections() {
      var _props3 = this.props;
      var sections = _props3.sections;
      var onFetchSections = _props3.onFetchSections;
      var onSetSections = _props3.onSetSections;

      if (_lodash2.default.isString(sections)) {
        onFetchSections(sections);
      } else if (_lodash2.default.isArray(sections)) {
        onSetSections(sections);
      }
    }
  }, {
    key: '_handleLoadData',
    value: function _handleLoadData() {
      var _props4 = this.props;
      var data = _props4.data;
      var onFetchData = _props4.onFetchData;
      var onSetData = _props4.onSetData;
      var onSetReady = _props4.onSetReady;
      var query = this.context.location.query;

      if (_lodash2.default.isString(data)) {
        onFetchData(data);
      } else if (_lodash2.default.isObject(data)) {
        onSetData(data);
      } else if (query) {
        onSetData(query);
      } else {
        onSetReady();
      }
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(previous, current) {
      var _props5 = this.props;
      var onChangeField = _props5.onChangeField;
      var onChange = _props5.onChange;

      if (onChangeField) {
        _lodash2.default.forOwn(current, function (value, code) {
          if (previous[code] != current[code]) {
            onChangeField(code, value);
          }
        });
      }
      if (onChange) {
        onChange(current);
      }
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit() {
      var _props6 = this.props;
      var method = _props6.method;
      var action = _props6.action;
      var onSubmit = _props6.onSubmit;
      var onSubmitForm = _props6.onSubmitForm;

      var data = this._collectData();
      if (action) {
        onSubmitForm(method, action, data);
      } else if (onSubmit) {
        if (onSubmit(data)) {
          this._handleSuccess();
        } else {
          this._handleFailure();
        }
      } else {
        this._handleSuccess();
      }
    }
  }, {
    key: '_handleSuccess',
    value: function _handleSuccess() {
      var _props7 = this.props;
      var redirect = _props7.redirect;
      var onSuccess = _props7.onSuccess;
      var result = this.props.state.result;

      if (onSuccess) {
        onSuccess(result);
      }
      this._handleResetForm();
      if (redirect) {
        this._handleRedirect();
      }
    }
  }, {
    key: '_handleFailure',
    value: function _handleFailure() {
      var onFailure = this.props.onFailure;
      var errors = this.props.state.errors;

      if (onFailure) {
        onFailure(errors);
      }
    }
  }, {
    key: '_handleResetForm',
    value: function _handleResetForm() {
      this.props.onResetForm();
    }
  }, {
    key: '_handleRedirect',
    value: function _handleRedirect() {
      _lodash2.default.templateSettings.interpolate = /#{([\s\S]+?)}/g;
      var redirect = this.props.redirect;
      var result = this.props.state.result;

      var url = _lodash2.default.template(redirect)(result);
      this.context.history.push(url);
    }
  }, {
    key: '_collectData',
    value: function _collectData() {
      var _props$state3 = this.props.state;
      var sections = _props$state3.sections;
      var data = _props$state3.data;

      var entity = {};
      (0, _map_fields2.default)(sections, function (field) {
        if (field.include !== false) {
          entity[field.code] = data[field.code];
        }
      });
      return entity;
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.contextTypes = {
  location: _react2.default.PropTypes.object,
  history: _react2.default.PropTypes.object
};
Form.propTypes = {
  datasource: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  sections: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.array]),
  method: _react2.default.PropTypes.string,
  action: _react2.default.PropTypes.string,
  redirect: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  instructions: _react2.default.PropTypes.string,
  status: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.object,
  errors: _react2.default.PropTypes.array,
  message: _react2.default.PropTypes.object,
  buttons: _react2.default.PropTypes.array,
  style: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  onChangeField: _react2.default.PropTypes.func,
  onSubmit: _react2.default.PropTypes.func,
  onFailure: _react2.default.PropTypes.func,
  onSuccess: _react2.default.PropTypes.func,
  state: _react2.default.PropTypes.shape({
    status: _react2.default.PropTypes.string,
    sections: _react2.default.PropTypes.array,
    data: _react2.default.PropTypes.object,
    errors: _react2.default.PropTypes.object,
    result: _react2.default.PropTypes.object,
    message: _react2.default.PropTypes.string
  }),
  onValidateForm: _react2.default.PropTypes.func,
  onResetForm: _react2.default.PropTypes.func,
  onUpdateData: _react2.default.PropTypes.func
};
Form.defaultProps = {
  style: 'standard',
  method: 'GET',
  action: null,
  title: null,
  instructions: null,
  buttons: [{ label: 'Save', type: 'submit' }]
};


var mapStateToProps = function mapStateToProps(state, props) {
  return { state: state };
};

var mapDispatchToProps = (_mapDispatchToProps = {
  onFetchSections: actions.fetchSections,
  onSetSections: actions.setSections,
  onFetchData: actions.fetchData,
  onSetData: actions.setData,
  onSetReady: actions.setReady,
  onSubmitForm: actions.submitForm,
  onResetForm: actions.resetForm,
  onUpdateData: actions.updateData,
  onValidateForm: actions.validateForm
}, _defineProperty(_mapDispatchToProps, 'onResetForm', actions.resetForm), _defineProperty(_mapDispatchToProps, 'onUpdateData', actions.updateData), _mapDispatchToProps);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Form);