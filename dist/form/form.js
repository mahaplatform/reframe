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

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      var _this2 = this;

      var _props = this.props,
          after = _props.after,
          before = _props.before,
          data = _props.data,
          errors = _props.errors,
          instructions = _props.instructions,
          sections = _props.sections,
          title = _props.title;

      var formClasses = ['ui', 'form', 'reframe-form', status];
      if (_.includes(['pending', 'submitting'], status)) formClasses.push('loading');
      return _react2.default.createElement(
        'div',
        { className: 'reframe-modal-panel' },
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-header' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-cancel', onClick: this._handleCancel.bind(this) },
            'Cancel'
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-title' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'reframe-modal-panel-header-proceed', onClick: this._handleSubmit.bind(this) },
            'Save'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'reframe-modal-panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'reframe-form' },
            (before || instructions) && _react2.default.createElement(
              'div',
              { className: 'reframe-form-header' },
              before && _react2.default.createElement(
                'div',
                { className: 'reframe-form-before' },
                before
              ),
              instructions && _react2.default.createElement(
                'div',
                { className: 'instructions' },
                instructions
              )
            ),
            _react2.default.createElement(
              'div',
              { className: formClasses.join(' '), ref: 'form' },
              sections.map(function (section, index) {
                return _react2.default.createElement(_section2.default, _extends({}, section, {
                  key: 'section_' + index,
                  data: data,
                  errors: errors,
                  onUpdateData: _this2._handleUpdateData.bind(_this2),
                  onSubmit: _this2._handleSubmit.bind(_this2) }));
              })
            ),
            after && _react2.default.createElement(
              'div',
              { className: 'reframe-form-footer' },
              _react2.default.createElement(
                'div',
                { className: 'reframe-form-after' },
                after
              )
            )
          )
        )
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props2 = this.props,
          sections = _props2.sections,
          onSetSections = _props2.onSetSections;

      onSetSections(sections);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props3 = this.props,
          data = _props3.data,
          entity = _props3.entity,
          status = _props3.status;

      if (prevProps.status !== status) {
        if (status === 'configured') this._handleLoadData();
        if (status === 'validated') this._handleSubmit();
        if (status === 'success') this._handleSuccess();
        if (status === 'failure') this._handleFailure();
      }
      if (prevProps.data != data) this._handleChange(prevProps.data, data);
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      this.context.modal.close();
    }
  }, {
    key: '_handleLoadData',
    value: function _handleLoadData() {
      var _props4 = this.props,
          defaults = _props4.defaults,
          endpoint = _props4.endpoint,
          sections = _props4.sections,
          onFetchData = _props4.onFetchData,
          onSetData = _props4.onSetData;

      if (endpoint) return onFetchData(endpoint);
      onSetData(defaults);
    }
  }, {
    key: '_handleUpdateData',
    value: function _handleUpdateData(key, value) {}
  }, {
    key: '_handleChange',
    value: function _handleChange(previous, current) {
      var _props5 = this.props,
          onChangeField = _props5.onChangeField,
          onChange = _props5.onChange;

      if (onChangeField) {
        _.forOwn(current, function (value, code) {
          if (previous[code] != current[code]) onChangeField(code, value);
        });
      }
      if (onChange) onChange(current);
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit() {
      var _props6 = this.props,
          action = _props6.action,
          filtered = _props6.filtered,
          method = _props6.method,
          onSubmit = _props6.onSubmit,
          onSubmitForm = _props6.onSubmitForm;

      if (action) return onSubmitForm(method, action, filtered);
      if (onSubmit) {
        if (onSubmit(filtered)) return this._handleSuccess();
        return this._handleFailure();
      }
      this._handleSuccess();
    }
  }, {
    key: '_handleSuccess',
    value: function _handleSuccess() {
      var flash = this.context.flash;
      var _props7 = this.props,
          entity = _props7.entity,
          successMessage = _props7.successMessage,
          onSuccess = _props7.onSuccess;

      if (successMessage) flash.set('success', successMessage);
      onSuccess(entity);
    }
  }, {
    key: '_handleFailure',
    value: function _handleFailure() {
      var flash = this.context.flash;
      var onFailure = this.props.onFailure;

      flash.set('error', 'There were problems with your data');
      onFailure();
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.contextTypes = {
  flash: _propTypes2.default.object,
  modal: _propTypes2.default.object
};
Form.PropTypes = {
  action: _propTypes2.default.string,
  after: _propTypes2.default.string,
  before: _propTypes2.default.string,
  defaults: _propTypes2.default.object,
  data: _propTypes2.default.object,
  errors: _propTypes2.default.object,
  fields: _propTypes2.default.array,
  instructions: _propTypes2.default.string,
  method: _propTypes2.default.string,
  sections: _propTypes2.default.array,
  status: _propTypes2.default.string,
  title: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onChangeField: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onFailure: _propTypes2.default.func,
  onSuccess: _propTypes2.default.func,
  onValidateForm: _propTypes2.default.func,
  onResetForm: _propTypes2.default.func,
  onUpdateData: _propTypes2.default.func
};
exports.default = Form;